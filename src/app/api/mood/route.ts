import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

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

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  try {
    const geminiResponse = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: mood }],
          },
        ],
        generationConfig: {
          maxOutputTokens: 300,
          temperature: 0.7,
        },
      }),
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.text();
      console.error("Gemini API error:", geminiResponse.status, errorData);
      return NextResponse.json(
        { error: "Failed to get a response. Please try again." },
        { status: 502 }
      );
    }

    const data = await geminiResponse.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("No text in Gemini response");
    }

    // Strip markdown code fences if present
    const cleanText = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();

    const parsed = JSON.parse(cleanText);
    if (!parsed.reference || !parsed.verseRange || !parsed.reflection) {
      throw new Error("Missing fields in Gemini response");
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
