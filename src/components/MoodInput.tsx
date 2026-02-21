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
    <section className="mt-10">
      <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-parchment-500 mb-4">
        How are you feeling?
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Describe how you're feeling today, and we'll find a verse that speaks to your heart..."
          maxLength={500}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-parchment-200 bg-white/60 text-parchment-800 font-sans text-base placeholder:text-parchment-400 focus:outline-none focus:ring-2 focus:ring-parchment-300 focus:border-parchment-300 resize-none"
        />
        {error && (
          <p className="text-red-700/80 font-sans text-sm">{error}</p>
        )}
        <button
          type="submit"
          disabled={!mood.trim() || submitting}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium text-white bg-parchment-600 rounded-lg transition-colors hover:bg-parchment-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
            "Find a verse"
          )}
        </button>
      </form>
    </section>
  );
}
