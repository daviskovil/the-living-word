"use client";

import { useState } from "react";
import type { MoodResult } from "@/lib/types";

interface MoodInputProps {
  onMoodResult: (result: MoodResult) => void;
}

export function MoodInput({ onMoodResult }: MoodInputProps) {
  const [mood, setMood] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = mood.trim();
    if (!trimmed || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood: trimmed }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      const result: MoodResult = await res.json();
      onMoodResult(result);
      setMood("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mt-8">
      <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-sm font-semibold text-surface-900">How are you feeling?</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Describe how you're feeling today, and we'll find a verse that speaks to your heart..."
            maxLength={500}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-white text-surface-800 text-sm placeholder:text-surface-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-50 resize-none"
          />
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
          <button
            type="submit"
            disabled={!mood.trim() || submitting}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-lg transition-colors hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {submitting ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Finding a verse...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Find a verse
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
