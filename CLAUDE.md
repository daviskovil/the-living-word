# CLAUDE.md — The Living Word

This file provides guidance to Claude Code when working with this repository.

## Project Overview

**The Living Word** is a Catholic spiritual reading web application that provides daily Bible verses, Mass readings, saint information, and mood-based verse recommendations powered by AI.

**Production URL:** Deployed on Railway
**Repository:** the-living-word

## Tech Stack

- **Framework:** Next.js 16.1.6 with React 19.2.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/postcss`)
- **AI Integration:** Google Gemini 2.5 Flash-Lite (free tier) for mood-based verse recommendations
- **Bible API:** bible-api.com (free, no auth required)
- **Deployment:** Railway
- **Node Requirement:** >=20.9.0

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server on port 3100
npm run build        # Production build
npm start            # Start production server
```

## Project Structure

```
src/
├── app/
│   ├── api/mood/route.ts         # Gemini API route for mood-based verses
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main single-page app
├── components/
│   ├── DailyReadingCards.tsx     # Daily reading plan cards
│   ├── Footer.tsx                # App footer
│   ├── Header.tsx                # App header with navigation
│   ├── HolyDayStrip.tsx         # Holy day/solemnity banner
│   ├── LiturgicalBanner.tsx     # Liturgical season display
│   ├── MassReadingCards.tsx      # Sunday/weekday Mass readings
│   ├── MoodInput.tsx            # AI mood-based verse finder
│   ├── ReadingCard.tsx          # Reusable reading card component
│   ├── ReflectionJournal.tsx    # Personal reflection journal (localStorage)
│   ├── SaintOfTheDay.tsx        # Daily saint information
│   ├── ShareButtons.tsx         # Social sharing buttons
│   ├── VerseOfTheDay.tsx        # Daily verse display
│   ├── VerseReaderPanel.tsx     # Full chapter verse reader
│   └── YearlyReadingCards.tsx   # Yearly reading plan cards
├── data/
│   ├── lectionary/              # Catholic lectionary data
│   │   ├── index.ts             # Lectionary lookup logic
│   │   ├── solemnities.ts       # Fixed-date solemnities
│   │   ├── types.ts             # Lectionary types
│   │   ├── weekday.ts           # Weekday readings
│   │   ├── year-a.ts            # Sunday Year A readings
│   │   ├── year-b.ts            # Sunday Year B readings
│   │   └── year-c.ts            # Sunday Year C readings
│   ├── readingPlan.ts           # Yearly Bible reading plan
│   ├── saints.ts                # Saint of the day data
│   └── verseOfTheDay.ts        # Curated daily verses
├── hooks/
│   ├── useFontSize.ts           # Adjustable font size hook
│   ├── useReadingStreak.ts      # Reading streak tracker
│   ├── useReflectionJournal.ts  # Journal with localStorage
│   ├── useTextToSpeech.ts       # Browser TTS support
│   └── useVerseLoader.ts        # Bible API verse fetcher
└── lib/
    ├── bibleApi.ts              # bible-api.com integration
    ├── getDayOfYear.ts          # Day-of-year utility
    ├── liturgical.ts            # Liturgical calendar engine
    └── types.ts                 # Shared type definitions
```

## Key Features

1. **Verse of the Day** — Curated daily verse with text-to-speech
2. **Mood-Based Recommendations** — User describes feelings → Gemini AI suggests a relevant Bible verse with Catholic reflection and saint connection
3. **Mass Readings** — Full Catholic lectionary (Years A, B, C) with weekday and Sunday readings
4. **Liturgical Calendar** — Detects current liturgical season, solemnities, holy days
5. **Saint of the Day** — Daily saint information
6. **Reflection Journal** — Personal notes saved in localStorage
7. **Reading Streak** — Tracks consecutive days of reading
8. **Yearly Reading Plan** — Structured Bible reading schedule
9. **Full Chapter Reader** — Read complete Bible chapters in-app
10. **Share Buttons** — Share verses on social media

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `GEMINI_API_KEY` | Google Gemini API key for mood-based verse recommendations |

## AI Integration (Mood API)

- **Endpoint:** `POST /api/mood` with `{ mood: string }`
- **Model:** Gemini 2.5 Flash-Lite (free tier)
- **System prompt:** Catholic spiritual director persona
- **Returns:** `{ reference, verseRange, reflection, saintConnection }`
- **Previously used Anthropic Claude** — switched to Gemini for cost ($0)

## External APIs

- **bible-api.com** — Free Bible verse API (no auth). Used by `useVerseLoader` hook and `bibleApi.ts`
- **Google Gemini** — Mood-based verse recommendations via `src/app/api/mood/route.ts`

## Data Sources

- Lectionary data is hardcoded in `src/data/lectionary/` (not fetched from API)
- Saints data in `src/data/saints.ts`
- Verse of the Day curated list in `src/data/verseOfTheDay.ts`
- Reading plan in `src/data/readingPlan.ts`

## Deployment

- **Platform:** Railway (auto-deploys from main/master)
- Node.js >=20.9.0 required (set in `engines` field of package.json)
