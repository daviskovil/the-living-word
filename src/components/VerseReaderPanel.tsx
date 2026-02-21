"use client";

import type { BiblePassage } from "@/lib/types";
import { ShareButtons } from "./ShareButtons";

interface VerseReaderPanelProps {
  passage: BiblePassage | null;
  reflection: string | null;
  loading: boolean;
  error: string | null;
}

export function VerseReaderPanel({ passage, reflection, loading, error }: VerseReaderPanelProps) {
  if (!loading && !passage && !error) return null;

  // Group verses by chapter to insert chapter headings for multi-chapter passages
  function renderVerses() {
    if (!passage) return null;

    const verses = passage.verses;
    const hasMultipleChapters = new Set(verses.map((v) => v.chapter)).size > 1;

    if (!hasMultipleChapters) {
      return (
        <div className="verse-text">
          {verses.map((v) => (
            <span key={`${v.chapter}-${v.verse}`}>
              <sup className="verse-number">{v.verse}</sup>
              {v.text}
            </span>
          ))}
        </div>
      );
    }

    // Multi-chapter: group by chapter with subheadings
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
        <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-parchment-400 mb-3">
          Chapter {ch.chapter}
        </h3>
        <div className="verse-text">
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

  return (
    <section className="mt-10 animate-fade-in">
      <div className="bg-white/60 border border-parchment-200 rounded-xl p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
        {loading && (
          <div className="flex items-center gap-3 text-parchment-500 font-sans">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading passage...
          </div>
        )}

        {error && (
          <p className="text-red-700/80 font-sans text-sm">{error}</p>
        )}

        {passage && (
          <article>
            <h2 className="font-serif text-2xl font-bold text-parchment-900 mb-6">
              {passage.reference}
            </h2>

            {renderVerses()}

            {reflection && (
              <blockquote className="reflection">
                {reflection}
              </blockquote>
            )}

            <ShareButtons reference={passage.reference} text={passage.text} />
          </article>
        )}
      </div>
    </section>
  );
}
