"use client";

import { useRef } from "react";
import { Header } from "@/components/Header";
import { DailyReadingCards } from "@/components/DailyReadingCards";
import { MoodInput } from "@/components/MoodInput";
import { VerseReaderPanel } from "@/components/VerseReaderPanel";
import { Footer } from "@/components/Footer";
import { useVerseLoader } from "@/hooks/useVerseLoader";
import type { MoodResult } from "@/lib/types";

export default function Home() {
  const { passage, reflection, loading, error, loadVerse } = useVerseLoader();
  const readerRef = useRef<HTMLDivElement>(null);

  function scrollToReader() {
    setTimeout(() => {
      readerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function handleSelectReading(reference: string) {
    loadVerse(reference);
    scrollToReader();
  }

  function handleMoodResult(result: MoodResult) {
    loadVerse(result.verseRange, result.reflection);
    scrollToReader();
  }

  const activeReference = passage?.reference ?? null;

  return (
    <div className="min-h-screen px-4 py-10 sm:py-16">
      <main className="max-w-2xl mx-auto">
        <Header />
        <DailyReadingCards
          activeReference={activeReference}
          onSelectReading={handleSelectReading}
        />
        <MoodInput onMoodResult={handleMoodResult} />
        <div ref={readerRef}>
          <VerseReaderPanel
            passage={passage}
            reflection={reflection}
            loading={loading}
            error={error}
            onReadFullChapter={(chapterRef) => {
              loadVerse(chapterRef);
              scrollToReader();
            }}
          />
        </div>
        <Footer />
      </main>
    </div>
  );
}
