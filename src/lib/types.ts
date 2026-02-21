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
}
