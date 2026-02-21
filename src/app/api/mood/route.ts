import { NextRequest, NextResponse } from "next/server";

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-haiku-4-5-20251001";

const SYSTEM_PROMPT = `You are a warm, compassionate Bible guide. The user will describe how they are feeling. Your job is to select a single Bible verse or short passage (no more than 5 verses) that speaks directly to their emotional state, and write a brief, comforting reflection.

Respond ONLY with valid JSON in this exact format, no markdown, no extra text:
{
  "reference": "Book Chapter:Verse",
  "verseRange": "Book Chapter:Verse-Verse",
  "reflection": "A 2-3 sentence warm, pastoral reflection connecting the verse to their feelings."
}

Rules:
- "reference" is the human-readable citation (e.g., "Isaiah 41:10")
- "verseRange" is the exact range to fetch from an API (e.g., "Isaiah 41:10" for a single verse, or "Romans 8:28-30" for a range). Use the full book name, not abbreviations.
- Keep the passage short: 1-5 verses maximum.
- The reflection should be warm, personal, and grounded in the verse's meaning. Avoid generic platitudes.
- Do not include any text outside the JSON object.`;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const mood = body.mood?.trim();

  if (!mood || mood.length > 500) {
    return NextResponse.json(
      { error: "Please describe how you're feeling (under 500 characters)." },
      { status: 400 }
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY is not set");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  try {
    const anthropicResponse = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: mood }],
      }),
    });

    if (!anthropicResponse.ok) {
      console.error("Anthropic API error:", anthropicResponse.status);
      return NextResponse.json(
        { error: "Failed to get a response. Please try again." },
        { status: 502 }
      );
    }

    const data = await anthropicResponse.json();
    const text = data.content[0].text;

    const parsed = JSON.parse(text);
    if (!parsed.reference || !parsed.verseRange || !parsed.reflection) {
      throw new Error("Missing fields in Claude response");
    }

    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Mood API error:", err);
    return NextResponse.json(
      { error: "Could not find a verse. Please try again." },
      { status: 502 }
    );
  }
}
