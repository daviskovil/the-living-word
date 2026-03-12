"use client";

import { useRef, useMemo } from "react";

// Components
import { LiturgicalBanner } from "@/components/LiturgicalBanner";
import { Header } from "@/components/Header";
import { VerseOfTheDay } from "@/components/VerseOfTheDay";
import { HolyDayStrip } from "@/components/HolyDayStrip";
import { MassReadingCards } from "@/components/MassReadingCards";
import { YearlyReadingCards } from "@/components/YearlyReadingCards";
import { MoodInput } from "@/components/MoodInput";
import { SaintOfTheDay } from "@/components/SaintOfTheDay";
import { VerseReaderPanel } from "@/components/VerseReaderPanel";
import { ReflectionJournal } from "@/components/ReflectionJournal";
import { Footer } from "@/components/Footer";

// Hooks
import { useVerseLoader } from "@/hooks/useVerseLoader";
import { useReadingStreak } from "@/hooks/useReadingStreak";
import { useReflectionJournal } from "@/hooks/useReflectionJournal";
import { useFontSize } from "@/hooks/useFontSize";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";

// Liturgical engine
import {
  getLiturgicalSeason,
  getLiturgicalYear,
  getLiturgicalWeek,
  isHolyDayOfObligation,
  getNextHolyDays,
} from "@/lib/liturgical";

// Data
import { versesOfTheDay } from "@/data/verseOfTheDay";
import { saintsOfTheDay } from "@/data/saints";
import { getLectionaryReadings } from "@/data/lectionary";

// Types
import type { MoodResult, VerseContext } from "@/lib/types";

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

function getTodayISO(): string {
  return new Date().toISOString().split("T")[0];
}

export default function Home() {
  const today = useMemo(() => new Date(), []);
  const todayISO = useMemo(() => getTodayISO(), []);

  // --- Liturgical Calculations ---
  const season = useMemo(() => getLiturgicalSeason(today), [today]);
  const cycle = useMemo(() => getLiturgicalYear(today), [today]);
  const weekInfo = useMemo(() => getLiturgicalWeek(today), [today]);
  const holyDay = useMemo(() => isHolyDayOfObligation(today), [today]);
  const upcomingHolyDays = useMemo(() => getNextHolyDays(today, 3), [today]);

  // --- Verse of the Day ---
  const verseOfTheDay = useMemo(() => {
    const dayIndex = getDayOfYear(today) - 1;
    const safeIndex = Math.max(0, Math.min(dayIndex, versesOfTheDay.length - 1));
    return versesOfTheDay[safeIndex];
  }, [today]);

  // --- Saint of the Day ---
  const saintOfTheDay = useMemo(() => {
    const dayIndex = getDayOfYear(today) - 1;
    const safeIndex = Math.max(0, Math.min(dayIndex, saintsOfTheDay.length - 1));
    const saint = saintsOfTheDay[safeIndex];
    return {
      name: saint.name,
      feastMonth: saint.feastMonth,
      feastDay: saint.feastDay,
      bio: saint.bio,
      patronage: saint.patronage,
      relatedVerse: saint.relatedVerse,
    };
  }, [today]);

  // --- Mass Readings (Lectionary) ---
  const massReadings = useMemo(() => {
    const entry = getLectionaryReadings(today, weekInfo.season, weekInfo.week, cycle);
    if (!entry) return { readings: [], cycleNote: "" };

    const isSunday = today.getDay() === 0;
    const cycleNote = isSunday
      ? `Year ${cycle} \u2014 ${entry.title}`
      : entry.title;

    return {
      readings: entry.readings.map((r) => ({
        label: r.label,
        reference: r.reference,
      })),
      cycleNote,
    };
  }, [today, weekInfo, cycle]);

  // --- Hooks ---
  const { passage, reflection, verseContext, loading, error, loadVerse } = useVerseLoader();
  const { streak, milestoneMessage, recordReading } = useReadingStreak();
  const { entries: journalEntries, saveEntry, clearAll } = useReflectionJournal();
  const { fontSize, increase: fontIncrease, decrease: fontDecrease } = useFontSize();
  const { speak, stop: stopSpeech, speaking, supported: speechSupported } = useTextToSpeech();

  // --- Ref for scroll-to-reader ---
  const readerRef = useRef<HTMLDivElement>(null);

  function scrollToReader() {
    setTimeout(() => {
      readerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  // --- Event Handlers ---

  function handleVerseOfDayClick(reference: string) {
    const context: VerseContext = { source: "verse-of-day" };
    loadVerse(reference, undefined, context);
    recordReading();
    scrollToReader();
  }

  function handleMassReading(reference: string, label: string) {
    const context: VerseContext = {
      source: "mass-reading",
      liturgicalLabel: label,
    };
    loadVerse(reference, undefined, context);
    recordReading();
    scrollToReader();
  }

  function handleYearlyReading(reference: string) {
    const context: VerseContext = { source: "yearly-plan" };
    loadVerse(reference, undefined, context);
    recordReading();
    scrollToReader();
  }

  function handleMoodResult(result: MoodResult) {
    const context: VerseContext = {
      source: "mood",
      saintConnection: result.saintConnection ?? undefined,
    };
    loadVerse(result.verseRange, result.reflection, context);
    recordReading();
    scrollToReader();
  }

  function handleSaintVerse(reference: string) {
    const context: VerseContext = {
      source: "saint",
      liturgicalLabel: `${saintOfTheDay.name}'s Verse`,
    };
    loadVerse(reference, undefined, context);
    recordReading();
    scrollToReader();
  }

  function handleReadFullChapter(chapterRef: string) {
    loadVerse(chapterRef);
    scrollToReader();
  }

  const activeReference = passage?.reference ?? null;

  return (
    <div className="min-h-screen bg-surface-50">
      <LiturgicalBanner season={season} holyDay={holyDay} />

      <div className="px-4 sm:px-6 py-8 sm:py-10">
        <main className="max-w-2xl mx-auto">
          <Header streak={streak} milestoneMessage={milestoneMessage} />

          <VerseOfTheDay
            entry={verseOfTheDay}
            onOpenInReader={handleVerseOfDayClick}
          />

          <MoodInput onMoodResult={handleMoodResult} />

          <HolyDayStrip upcomingDays={upcomingHolyDays} />

          {massReadings.readings.length > 0 && (
            <MassReadingCards
              readings={massReadings.readings}
              cycleNote={massReadings.cycleNote}
              activeReference={activeReference}
              onSelectReading={handleMassReading}
            />
          )}

          {/* Yearly Reading Plan (collapsible) */}
          <section className="mt-8">
            <details>
              <summary className="section-label cursor-pointer hover:text-surface-700 transition-colors select-none flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                Daily Reading Plan (365-Day)
              </summary>
              <YearlyReadingCards
                activeReference={activeReference}
                onSelectReading={handleYearlyReading}
              />
            </details>
          </section>

          <SaintOfTheDay
            saint={saintOfTheDay}
            onOpenVerse={handleSaintVerse}
          />

          <div ref={readerRef}>
            <VerseReaderPanel
              passage={passage}
              reflection={reflection}
              verseContext={verseContext}
              loading={loading}
              error={error}
              onReadFullChapter={handleReadFullChapter}
              fontSize={fontSize}
              onIncrease={fontIncrease}
              onDecrease={fontDecrease}
              speaking={speaking}
              speechSupported={speechSupported}
              onSpeak={speak}
              onStopSpeech={stopSpeech}
            />
          </div>

          <ReflectionJournal
            currentDate={todayISO}
            currentReference={activeReference}
            entries={journalEntries}
            onSave={saveEntry}
            onClearAll={clearAll}
          />

          <Footer />
        </main>
      </div>
    </div>
  );
}
