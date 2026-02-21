"use client";

import { useState, useCallback } from "react";
import { fetchPassage } from "@/lib/bibleApi";
import type { BiblePassage } from "@/lib/types";

interface VerseLoaderState {
  passage: BiblePassage | null;
  reflection: string | null;
  loading: boolean;
  error: string | null;
}

export function useVerseLoader() {
  const [state, setState] = useState<VerseLoaderState>({
    passage: null,
    reflection: null,
    loading: false,
    error: null,
  });

  const loadVerse = useCallback(async (reference: string, reflection?: string) => {
    setState({ passage: null, reflection: null, loading: true, error: null });
    try {
      const passage = await fetchPassage(reference);
      setState({ passage, reflection: reflection ?? null, loading: false, error: null });
    } catch {
      setState({
        passage: null,
        reflection: null,
        loading: false,
        error: "Could not load this passage. Please try again.",
      });
    }
  }, []);

  const clear = useCallback(() => {
    setState({ passage: null, reflection: null, loading: false, error: null });
  }, []);

  return { ...state, loadVerse, clear };
}
