"use client";

import { useState } from "react";
import type { JournalEntry } from "@/lib/types";

interface ReflectionJournalProps {
  currentDate: string;
  currentReference: string | null;
  entries: JournalEntry[];
  onSave: (date: string, reference: string, text: string) => void;
  onClearAll: () => void;
}

export function ReflectionJournal({
  currentDate,
  currentReference,
  entries,
  onSave,
  onClearAll,
}: ReflectionJournalProps) {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const [showJournal, setShowJournal] = useState(false);

  function handleSave() {
    if (!currentReference || !text.trim()) return;
    onSave(currentDate, currentReference, text.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleClear() {
    if (window.confirm("Are you sure you want to clear your entire journal? This cannot be undone.")) {
      onClearAll();
    }
  }

  return (
    <section className="mt-8">
      {currentReference && (
        <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 className="text-sm font-semibold text-surface-900">Write a Reflection</h2>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your reflection or prayer..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-white text-surface-800 text-sm placeholder:text-surface-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-50 resize-none"
          />
          <div className="flex items-center gap-3 mt-3">
            <button
              onClick={handleSave}
              disabled={!text.trim()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg transition-colors hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Save
            </button>
            {saved && (
              <span className="text-sm text-emerald-600 font-medium animate-fade-in">
                Saved!
              </span>
            )}
          </div>
        </div>
      )}

      {entries.length > 0 && (
        <div>
          <button
            onClick={() => setShowJournal(!showJournal)}
            className="section-label cursor-pointer flex items-center gap-2 hover:text-surface-700 transition-colors"
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform ${showJournal ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            My Journal ({entries.length} {entries.length === 1 ? "entry" : "entries"})
          </button>

          {showJournal && (
            <div className="mt-3 space-y-3 animate-fade-in">
              {entries.map((entry, i) => (
                <div
                  key={`${entry.date}-${entry.reference}-${i}`}
                  className="bg-white border border-surface-200 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-surface-400">
                      {new Date(entry.date + "T12:00:00").toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-xs font-semibold text-primary-600">
                      {entry.reference}
                    </span>
                  </div>
                  <p className="text-sm text-surface-600 leading-relaxed">
                    {entry.text}
                  </p>
                </div>
              ))}

              <button
                onClick={handleClear}
                className="text-xs text-red-400 hover:text-red-600 transition-colors cursor-pointer mt-2"
              >
                Clear journal
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
