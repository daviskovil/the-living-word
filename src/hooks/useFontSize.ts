"use client";

import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "tlw-font-size";
const MIN_SIZE = 14;
const MAX_SIZE = 28;
const STEP = 2;
const DEFAULT_SIZE = 18;

function loadFontSize(): number {
  if (typeof window === "undefined") return DEFAULT_SIZE;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const size = parseInt(stored, 10);
      if (size >= MIN_SIZE && size <= MAX_SIZE) return size;
    }
  } catch {
    // ignore
  }
  return DEFAULT_SIZE;
}

export function useFontSize() {
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);

  // Sync from localStorage on mount
  useEffect(() => {
    setFontSize(loadFontSize());
  }, []);

  const increase = useCallback(() => {
    setFontSize((prev) => {
      const next = Math.min(prev + STEP, MAX_SIZE);
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const decrease = useCallback(() => {
    setFontSize((prev) => {
      const next = Math.max(prev - STEP, MIN_SIZE);
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return { fontSize, increase, decrease };
}
