export interface BibleVerse {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BiblePassage {
  reference: string;
  verses: BibleVerse[];
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

export interface DailyReading {
  ot: string;
  psalm: string;
  nt: string;
}

export interface MoodResult {
  reference: string;
  verseRange: string;
  reflection: string;
  saintConnection?: string;
}

// Metadata for the verse reader to know what it's displaying
export type VerseSource = "mass-reading" | "mood" | "verse-of-day" | "yearly-plan" | "saint";

export interface VerseContext {
  source: VerseSource;
  liturgicalLabel?: string; // "First Reading", "Gospel", etc.
  saintConnection?: string;
}

// Journal entry
export interface JournalEntry {
  date: string; // ISO date string "2026-02-21"
  reference: string;
  text: string;
  timestamp: number; // Unix ms for sorting
}

// Reading streak
export interface StreakData {
  currentStreak: number;
  lastReadDate: string; // ISO date "2026-02-21"
  longestStreak: number;
}
