"use client";

import { useState, useCallback, useEffect } from "react";
import type { StreakData } from "@/lib/types";

const STORAGE_KEY = "tlw-reading-streak";

const MILESTONES: Record<number, string> = {
  7: "One week of faithful reading!",
  30: "A full month walking with the Word!",
  100: "100 days — what a beautiful commitment to Scripture!",
};

function getTodayISO(): string {
  return new Date().toISOString().split("T")[0];
}

function loadStreak(): StreakData {
  if (typeof window === "undefined") {
    return { currentStreak: 0, lastReadDate: "", longestStreak: 0 };
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return { currentStreak: 0, lastReadDate: "", longestStreak: 0 };
}

function saveStreak(data: StreakData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

function isYesterday(dateStr: string): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0] === dateStr;
}

export function useReadingStreak() {
  const [streak, setStreak] = useState<StreakData>(loadStreak);
  const [milestoneMessage, setMilestoneMessage] = useState<string | null>(null);

  // Sync from localStorage on mount
  useEffect(() => {
    setStreak(loadStreak());
  }, []);

  const recordReading = useCallback(() => {
    setStreak((prev) => {
      const today = getTodayISO();

      // Already recorded today
      if (prev.lastReadDate === today) return prev;

      let newStreak: number;
      if (isYesterday(prev.lastReadDate)) {
        // Consecutive day
        newStreak = prev.currentStreak + 1;
      } else if (prev.lastReadDate === "") {
        // First ever reading
        newStreak = 1;
      } else {
        // Missed a day — reset
        newStreak = 1;
      }

      const newLongest = Math.max(prev.longestStreak, newStreak);

      const updated: StreakData = {
        currentStreak: newStreak,
        lastReadDate: today,
        longestStreak: newLongest,
      };

      saveStreak(updated);

      // Check milestones
      if (MILESTONES[newStreak]) {
        setMilestoneMessage(MILESTONES[newStreak]);
        // Clear milestone after 5 seconds
        setTimeout(() => setMilestoneMessage(null), 5000);
      }

      return updated;
    });
  }, []);

  return {
    streak: streak.currentStreak,
    longestStreak: streak.longestStreak,
    milestoneMessage,
    recordReading,
  };
}
