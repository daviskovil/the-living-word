import { LectionaryEntry } from "./types";
import { yearAReadings } from "./year-a";
import { yearBReadings } from "./year-b";
import { yearCReadings } from "./year-c";
import { weekdayReadings } from "./weekday";
import { solemnities } from "./solemnities";

export type LiturgicalCycle = "A" | "B" | "C";

/**
 * Map of fixed-date solemnities: key = "MM-DD", value = solemnity season name(s).
 * When multiple entries share the same date (e.g. Christmas has 3 Mass options),
 * we return the first match from the solemnities array.
 */
const SOLEMNITY_DATE_MAP: Record<string, string[]> = {
  "01-01": ["Mary Mother of God"],
  "01-06": ["Epiphany"],
  "02-02": ["Presentation of the Lord"],
  "03-19": ["Saint Joseph"],
  "03-25": ["Annunciation"],
  "06-24": ["Nativity of John the Baptist"],
  "06-29": ["Saints Peter and Paul"],
  "08-06": ["Transfiguration"],
  "08-15": ["Assumption"],
  "09-14": ["Triumph of the Cross"],
  "11-01": ["All Saints"],
  "11-02": ["All Souls"],
  "12-08": ["Immaculate Conception"],
  "12-25": ["Christmas Day"],
};

/**
 * Get lectionary readings for a given date.
 *
 * Priority order:
 *   1. Fixed-date solemnities (Christmas Dec 25, All Saints Nov 1, etc.)
 *   2. Moveable solemnities passed in via the season parameter
 *      (Holy Thursday, Good Friday, Easter Vigil, Sacred Heart)
 *   3. Sunday cycle-specific readings (Year A / B / C)
 *   4. Weekday commons (shared across all cycles)
 *   5. Return null if nothing found
 *
 * @param date   - The calendar date to look up
 * @param season - Liturgical season name from the liturgical engine:
 *                 "Advent", "Christmas", "Lent", "Holy Week", "Easter", "Ordinary Time"
 *                 Or a moveable-solemnity key like "Holy Thursday", "Good Friday", etc.
 * @param week   - Week number within the season (from getLiturgicalWeek)
 * @param cycle  - The liturgical year cycle A/B/C (from getLiturgicalYear)
 * @returns LectionaryEntry or null if not found
 */
export function getLectionaryReadings(
  date: Date,
  season: string,
  week: number,
  cycle: LiturgicalCycle
): LectionaryEntry | null {
  const dayOfWeek = date.getDay(); // 0 = Sunday
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // ---------------------------------------------------------------
  // 1. Check for fixed-date solemnities first
  // ---------------------------------------------------------------
  const dateKey = `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const solemnitySeasons = SOLEMNITY_DATE_MAP[dateKey];

  if (solemnitySeasons) {
    for (const solSeason of solemnitySeasons) {
      const match = solemnities.find(
        (s) => s.season.toLowerCase() === solSeason.toLowerCase()
      );
      if (match) {
        return match;
      }
    }
  }

  // ---------------------------------------------------------------
  // 2. Check for moveable solemnities passed via the season parameter
  //    (Holy Thursday, Good Friday, Easter Vigil, Sacred Heart, etc.)
  // ---------------------------------------------------------------
  const moveableSolemnity = solemnities.find(
    (s) => s.season.toLowerCase() === season.toLowerCase()
  );
  if (moveableSolemnity) {
    return moveableSolemnity;
  }

  // ---------------------------------------------------------------
  // 3. If Sunday, look up the correct cycle (A/B/C) year readings
  // ---------------------------------------------------------------
  if (dayOfWeek === 0) {
    const yearReadings =
      cycle === "A"
        ? yearAReadings
        : cycle === "B"
          ? yearBReadings
          : yearCReadings;

    const sundayEntry = yearReadings.find(
      (e) =>
        e.season.toLowerCase() === season.toLowerCase() &&
        e.week === week &&
        e.dayOfWeek === 0
    );

    if (sundayEntry) {
      return sundayEntry;
    }
  }

  // ---------------------------------------------------------------
  // 4. If weekday, look up weekday commons by season + week + dayOfWeek
  // ---------------------------------------------------------------
  if (dayOfWeek >= 1 && dayOfWeek <= 6) {
    // Exact match first
    const exactWeekday = weekdayReadings.find(
      (e) =>
        e.season.toLowerCase() === season.toLowerCase() &&
        e.week === week &&
        e.dayOfWeek === dayOfWeek
    );

    if (exactWeekday) {
      return exactWeekday;
    }

    // If no exact week match, try to find the closest available week
    // for the same season and dayOfWeek (handles gaps in data coverage)
    const sameDaySameSeason = weekdayReadings
      .filter(
        (e) =>
          e.season.toLowerCase() === season.toLowerCase() &&
          e.dayOfWeek === dayOfWeek
      )
      .sort((a, b) => Math.abs(a.week - week) - Math.abs(b.week - week));

    if (sameDaySameSeason.length > 0) {
      return sameDaySameSeason[0];
    }

    // Last resort: find any weekday entry for the same season and week
    const anyDaySameWeek = weekdayReadings.find(
      (e) =>
        e.season.toLowerCase() === season.toLowerCase() &&
        e.week === week
    );

    if (anyDaySameWeek) {
      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return {
        ...anyDaySameWeek,
        dayOfWeek,
        title: `${dayNames[dayOfWeek]} of Week ${week} of ${season}`,
      };
    }
  }

  // ---------------------------------------------------------------
  // 5. Return null if nothing found
  // ---------------------------------------------------------------
  return null;
}

// Re-export types
export type { LectionaryEntry, LectionaryReading } from "./types";

// Re-export data arrays for direct access if needed
export { yearAReadings, yearBReadings, yearCReadings, solemnities, weekdayReadings };
