import { BiblePassage, BibleVerse } from "./types";

const BIBLE_API_BASE = "https://bible-api.com";

async function fetchSingleReference(reference: string): Promise<BiblePassage> {
  const encoded = encodeURIComponent(reference).replace(/%20/g, "+");
  const url = `${BIBLE_API_BASE}/${encoded}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch passage: ${response.status}`);
  }

  return response.json();
}

/**
 * Parses references like "Genesis 1-3" into ["Genesis 1", "Genesis 2", "Genesis 3"].
 * Passes through single chapters and verse ranges as-is.
 */
function expandChapterRange(reference: string): string[] {
  // Match "Book Name X-Y" where X and Y are chapter numbers (no colons = no verse range)
  const match = reference.match(/^(.+?)\s+(\d+)-(\d+)$/);
  if (match && !reference.includes(":")) {
    const book = match[1];
    const start = parseInt(match[2], 10);
    const end = parseInt(match[3], 10);
    const chapters: string[] = [];
    for (let i = start; i <= end; i++) {
      chapters.push(`${book} ${i}`);
    }
    return chapters;
  }
  return [reference];
}

export async function fetchPassage(reference: string): Promise<BiblePassage> {
  const refs = expandChapterRange(reference);

  if (refs.length === 1) {
    return fetchSingleReference(refs[0]);
  }

  // Fetch multiple chapters in parallel and merge
  const passages = await Promise.all(refs.map(fetchSingleReference));

  const allVerses: BibleVerse[] = [];
  const allTexts: string[] = [];

  for (const p of passages) {
    allVerses.push(...p.verses);
    allTexts.push(p.text);
  }

  return {
    reference,
    verses: allVerses,
    text: allTexts.join("\n"),
    translation_id: passages[0].translation_id,
    translation_name: passages[0].translation_name,
    translation_note: passages[0].translation_note,
  };
}
