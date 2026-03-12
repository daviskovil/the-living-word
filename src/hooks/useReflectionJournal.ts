"use client";

import { useState, useCallback, useEffect } from "react";
import type { JournalEntry } from "@/lib/types";

const STORAGE_KEY = "tlw-journal";

function loadEntries(): JournalEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return [];
}

function saveEntries(entries: JournalEntry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // ignore
  }
}

export function useReflectionJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>(loadEntries);

  // Sync from localStorage on mount
  useEffect(() => {
    setEntries(loadEntries());
  }, []);

  const saveEntry = useCallback(
    (date: string, reference: string, text: string) => {
      setEntries((prev) => {
        // Check if entry already exists for this date + reference
        const existingIndex = prev.findIndex(
          (e) => e.date === date && e.reference === reference
        );

        let updated: JournalEntry[];
        const entry: JournalEntry = {
          date,
          reference,
          text,
          timestamp: Date.now(),
        };

        if (existingIndex >= 0) {
          // Update existing entry
          updated = [...prev];
          updated[existingIndex] = entry;
        } else {
          // Add new entry
          updated = [entry, ...prev];
        }

        // Sort newest first
        updated.sort((a, b) => b.timestamp - a.timestamp);
        saveEntries(updated);
        return updated;
      });
    },
    []
  );

  const getEntry = useCallback(
    (date: string, reference: string): JournalEntry | null => {
      return (
        entries.find((e) => e.date === date && e.reference === reference) ??
        null
      );
    },
    [entries]
  );

  const clearAll = useCallback(() => {
    setEntries([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return { entries, saveEntry, getEntry, clearAll };
}
