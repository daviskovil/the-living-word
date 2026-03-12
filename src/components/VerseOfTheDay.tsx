"use client";

import { useState } from "react";

export interface VerseOfTheDayEntry {
  reference: string;
  text: string;
  whyThisVerse: string;
}

interface VerseOfTheDayProps {
  entry: VerseOfTheDayEntry;
  onOpenInReader: (reference: string) => void;
}

export function VerseOfTheDay({ entry, onOpenInReader }: VerseOfTheDayProps) {
  const [showWhy, setShowWhy] = useState(false);

  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl border border-surface-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-sm font-semibold text-surface-900">Verse of the Day</h2>
        </div>

        <blockquote
          className="font-serif text-xl sm:text-2xl leading-relaxed text-surface-800 cursor-pointer hover:text-primary-700 transition-colors"
          onClick={() => onOpenInReader(entry.reference)}
          title="Click to read in full"
        >
          &ldquo;{entry.text}&rdquo;
        </blockquote>

        <p className="text-sm text-primary-600 mt-4 font-semibold">
          &mdash; {entry.reference}
        </p>

        <div className="mt-5 pt-4 border-t border-surface-100">
          <button
            onClick={() => setShowWhy(!showWhy)}
            className="text-xs font-medium text-surface-400 hover:text-surface-600 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform ${showWhy ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            Why this verse?
          </button>

          {showWhy && (
            <p className="mt-3 text-sm text-surface-500 leading-relaxed animate-fade-in">
              {entry.whyThisVerse}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
