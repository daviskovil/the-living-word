"use client";

import type { BiblePassage, VerseContext } from "@/lib/types";
import { ShareButtons } from "./ShareButtons";

interface VerseReaderPanelProps {
  passage: BiblePassage | null;
  reflection: string | null;
  verseContext: VerseContext | null;
  loading: boolean;
  error: string | null;
  onReadFullChapter?: (chapterReference: string) => void;
  fontSize: number;
  onIncrease: () => void;
  onDecrease: () => void;
  speaking: boolean;
  speechSupported: boolean;
  onSpeak: (text: string) => void;
  onStopSpeech: () => void;
}

function getChapterReference(passage: BiblePassage): string | null {
  if (passage.reference.includes(":")) {
    const match = passage.reference.match(/^(.+?\s+\d+):/);
    if (match) return match[1];
  }
  return null;
}

export function VerseReaderPanel({
  passage,
  reflection,
  verseContext,
  loading,
  error,
  onReadFullChapter,
  fontSize,
  onIncrease,
  onDecrease,
  speaking,
  speechSupported,
  onSpeak,
  onStopSpeech,
}: VerseReaderPanelProps) {
  if (!loading && !passage && !error) return null;

  function renderVerses() {
    if (!passage) return null;

    const verses = passage.verses;
    const hasMultipleChapters = new Set(verses.map((v) => v.chapter)).size > 1;

    if (!hasMultipleChapters) {
      return (
        <div className="verse-text" style={{ fontSize: `${fontSize}px` }}>
          {verses.map((v) => (
            <span key={`${v.chapter}-${v.verse}`}>
              <sup className="verse-number">{v.verse}</sup>
              {v.text}
            </span>
          ))}
        </div>
      );
    }

    const chapters: { chapter: number; bookName: string; verses: typeof verses }[] = [];
    for (const v of verses) {
      const last = chapters[chapters.length - 1];
      if (last && last.chapter === v.chapter) {
        last.verses.push(v);
      } else {
        chapters.push({ chapter: v.chapter, bookName: v.book_name, verses: [v] });
      }
    }

    return chapters.map((ch) => (
      <div key={ch.chapter} className="mb-6 last:mb-0">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-surface-400 mb-3">
          Chapter {ch.chapter}
        </h3>
        <div className="verse-text" style={{ fontSize: `${fontSize}px` }}>
          {ch.verses.map((v) => (
            <span key={`${v.chapter}-${v.verse}`}>
              <sup className="verse-number">{v.verse}</sup>
              {v.text}
            </span>
          ))}
        </div>
      </div>
    ));
  }

  const chapterRef = passage ? getChapterReference(passage) : null;

  const toolbarBtnClass =
    "w-8 h-8 flex items-center justify-center rounded-lg border border-surface-200 text-surface-500 hover:bg-surface-100 transition-colors cursor-pointer text-xs font-bold";

  return (
    <section className="mt-8 animate-fade-in">
      <div className="bg-white rounded-2xl border border-surface-200 p-6 sm:p-8 shadow-sm max-h-[70vh] overflow-y-auto">
        {/* Toolbar */}
        {passage && (
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-surface-100">
            <div className="flex items-center gap-1.5">
              <button onClick={onDecrease} className={toolbarBtnClass} title="Decrease font size">
                A&minus;
              </button>
              <button onClick={onIncrease} className={toolbarBtnClass} title="Increase font size">
                A+
              </button>
            </div>
            {speechSupported && (
              <button
                onClick={() => {
                  if (speaking) {
                    onStopSpeech();
                  } else {
                    onSpeak(passage.text);
                  }
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  speaking
                    ? "bg-red-50 text-red-600 border border-red-200"
                    : "bg-surface-100 text-surface-600 border border-surface-200 hover:bg-surface-200"
                }`}
                title={speaking ? "Stop reading" : "Read aloud"}
              >
                {speaking ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6z" />
                    </svg>
                    Stop
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                    </svg>
                    Listen
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-3 text-surface-500 py-4">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span className="text-sm">
              {verseContext?.source === "mood"
                ? "Seeking a word for your heart..."
                : "Loading passage..."}
            </span>
          </div>
        )}

        {error && (
          <p className="text-red-600 text-sm py-2">{error}</p>
        )}

        {passage && (
          <article>
            {verseContext?.liturgicalLabel && (
              <div className="liturgical-badge">
                {verseContext.liturgicalLabel}
              </div>
            )}

            <h2 className="font-serif text-2xl font-bold text-surface-900 mb-6">
              {passage.reference}
            </h2>

            {renderVerses()}

            {reflection && (
              <blockquote className="reflection">
                {reflection}
              </blockquote>
            )}

            {verseContext?.saintConnection && (
              <blockquote className="saint-connection">
                {verseContext.saintConnection}
              </blockquote>
            )}

            <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-surface-100">
              {chapterRef && onReadFullChapter && (
                <button
                  onClick={() => onReadFullChapter(chapterRef)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-surface-700 bg-surface-100 border border-surface-200 rounded-lg transition-colors hover:bg-surface-200 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Full chapter
                </button>
              )}
              <ShareButtons reference={passage.reference} text={passage.text} />
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
