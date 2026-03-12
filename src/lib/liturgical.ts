// ============================================================
// Catholic Liturgical Calendar Calculation Engine
// ============================================================

export interface LiturgicalSeason {
  name: string;
  color: "purple" | "white" | "green" | "red" | "rose";
  cssColor: string;
  description: string;
}

export interface HolyDay {
  name: string;
  month: number; // 1-12
  day: number; // 1-31
  moveable: boolean;
}

export interface UpcomingHolyDay extends HolyDay {
  date: Date;
  daysUntil: number;
  isToday: boolean;
}

export type LiturgicalYearCycle = "A" | "B" | "C";

// ============================================================
// Easter Computation — Meeus/Jones/Butcher Algorithm
// ============================================================

export function computeEaster(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // 3=March, 4=April
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

// ============================================================
// Helper: Date arithmetic
// ============================================================

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isOnOrAfter(date: Date, ref: Date): boolean {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const r = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate());
  return d >= r;
}

function isBefore(date: Date, ref: Date): boolean {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const r = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate());
  return d < r;
}

function daysBetween(a: Date, b: Date): number {
  const msPerDay = 86400000;
  const dateA = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const dateB = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((dateB.getTime() - dateA.getTime()) / msPerDay);
}

// ============================================================
// Get the Sunday on or before a date
// ============================================================

function sundayOnOrBefore(date: Date): Date {
  const result = new Date(date);
  result.setDate(result.getDate() - result.getDay());
  return result;
}

// ============================================================
// Key Liturgical Dates for a Given Year
// ============================================================

interface LiturgicalDates {
  // Advent starts 4 Sundays before Christmas
  adventStart: Date;
  christmas: Date;
  // Baptism of the Lord: Sunday after Jan 6 (Epiphany)
  baptismOfLord: Date;
  // Ash Wednesday: Easter - 46 days
  ashWednesday: Date;
  // Easter
  easter: Date;
  // Pentecost: Easter + 49 days
  pentecost: Date;
  // Ascension: Easter + 39 days
  ascension: Date;
  // Christ the King: last Sunday before Advent
  christTheKing: Date;
}

function getLiturgicalDates(year: number): LiturgicalDates {
  const easter = computeEaster(year);

  // Christmas is Dec 25
  const christmas = new Date(year, 11, 25);

  // Advent: 4th Sunday before Christmas
  // Christmas can fall on any day. Find the Sunday on or before Dec 24,
  // then go back 3 more weeks.
  const dec24 = new Date(year, 11, 24);
  const fourthAdventSunday = sundayOnOrBefore(dec24);
  const adventStart = addDays(fourthAdventSunday, -21); // 3 weeks before 4th Sunday

  // Epiphany is Jan 6; Baptism of the Lord is the Sunday after
  const epiphany = new Date(year, 0, 6);
  let baptismOfLord: Date;
  if (epiphany.getDay() === 0) {
    // If Epiphany falls on Sunday, Baptism is the next day (Monday)
    // Actually, the common practice: Baptism is the Sunday after Jan 6
    baptismOfLord = addDays(epiphany, 7);
  } else {
    // Next Sunday after Jan 6
    baptismOfLord = addDays(epiphany, 7 - epiphany.getDay());
  }

  const ashWednesday = addDays(easter, -46);
  const pentecost = addDays(easter, 49);
  const ascension = addDays(easter, 39);

  // Christ the King: Sunday before Advent starts
  const christTheKing = addDays(adventStart, -7);

  return {
    adventStart,
    christmas,
    baptismOfLord,
    ashWednesday,
    easter,
    pentecost,
    ascension,
    christTheKing,
  };
}

// ============================================================
// Liturgical Season Detection
// ============================================================

const SEASONS: Record<string, Omit<LiturgicalSeason, "name">> = {
  Advent: {
    color: "purple",
    cssColor: "var(--color-liturgical-purple)",
    description: "A season of joyful preparation for the coming of Christ.",
  },
  Christmas: {
    color: "white",
    cssColor: "var(--color-liturgical-white)",
    description:
      "Celebrating the birth of Jesus Christ, the Light of the World.",
  },
  "Ordinary Time": {
    color: "green",
    cssColor: "var(--color-liturgical-green)",
    description:
      "A season of growth in faith, walking with Christ in daily life.",
  },
  Lent: {
    color: "purple",
    cssColor: "var(--color-liturgical-purple)",
    description:
      "Forty days of prayer, fasting, and almsgiving in preparation for Easter.",
  },
  Easter: {
    color: "white",
    cssColor: "var(--color-liturgical-white)",
    description:
      "The most joyful season — celebrating the Resurrection of the Lord.",
  },
  "Holy Week": {
    color: "red",
    cssColor: "var(--color-liturgical-red)",
    description:
      "The most sacred week, commemorating the Passion and Death of Christ.",
  },
};

export function getLiturgicalSeason(date: Date): LiturgicalSeason {
  const year = date.getFullYear();

  // We need to check dates from two years since Advent/Christmas spans the year boundary
  const dates = getLiturgicalDates(year);
  const prevDates = getLiturgicalDates(year - 1);

  // Check if we're in Advent of current year
  if (isOnOrAfter(date, dates.adventStart)) {
    if (isBefore(date, dates.christmas)) {
      return { name: "Advent", ...SEASONS["Advent"] };
    }
    // Dec 25 onwards = Christmas
    return { name: "Christmas", ...SEASONS["Christmas"] };
  }

  // Jan 1 to Baptism of Lord = still Christmas season (from previous year's Advent)
  if (isBefore(date, dates.baptismOfLord) || isSameDay(date, dates.baptismOfLord)) {
    return { name: "Christmas", ...SEASONS["Christmas"] };
  }

  // After Baptism of Lord to Ash Wednesday = Ordinary Time (early)
  if (isBefore(date, dates.ashWednesday)) {
    return { name: "Ordinary Time", ...SEASONS["Ordinary Time"] };
  }

  // Ash Wednesday to Holy Thursday (Easter - 3) = Lent
  const holyThursday = addDays(dates.easter, -3);
  if (isBefore(date, holyThursday)) {
    return { name: "Lent", ...SEASONS["Lent"] };
  }

  // Good Friday to Holy Saturday = Holy Week / Triduum
  if (isBefore(date, dates.easter)) {
    return { name: "Holy Week", ...SEASONS["Holy Week"] };
  }

  // Easter Sunday to Pentecost = Easter season
  if (isOnOrAfter(date, dates.easter) && (isBefore(date, addDays(dates.pentecost, 1)) || isSameDay(date, dates.pentecost))) {
    return { name: "Easter", ...SEASONS["Easter"] };
  }

  // After Pentecost to start of Advent = Ordinary Time (late)
  return { name: "Ordinary Time", ...SEASONS["Ordinary Time"] };
}

// ============================================================
// Liturgical Year Cycle (A, B, C)
// ============================================================

export function getLiturgicalYear(date: Date): LiturgicalYearCycle {
  const year = date.getFullYear();
  const dates = getLiturgicalDates(year);

  // The liturgical year starts at Advent.
  // If we're in Advent or later, use the NEXT civil year to determine cycle.
  // Otherwise use the current civil year.
  let liturgicalYear: number;
  if (isOnOrAfter(date, dates.adventStart)) {
    liturgicalYear = year + 1;
  } else {
    liturgicalYear = year;
  }

  const mod = liturgicalYear % 3;
  if (mod === 1) return "A";
  if (mod === 2) return "B";
  return "C"; // mod === 0
}

// ============================================================
// Liturgical Week
// ============================================================

export interface LiturgicalWeekInfo {
  season: string;
  week: number;
}

export function getLiturgicalWeek(date: Date): LiturgicalWeekInfo {
  const season = getLiturgicalSeason(date);
  const year = date.getFullYear();
  const dates = getLiturgicalDates(year);

  let week = 1;

  switch (season.name) {
    case "Advent": {
      const daysSinceAdvent = daysBetween(dates.adventStart, date);
      week = Math.floor(daysSinceAdvent / 7) + 1;
      break;
    }
    case "Christmas": {
      // Christmas is a shorter season, just use week 1 or 2
      if (date.getMonth() === 11) {
        // December
        week = 1;
      } else {
        week = 2;
      }
      break;
    }
    case "Lent": {
      const daysSinceAsh = daysBetween(dates.ashWednesday, date);
      week = Math.floor(daysSinceAsh / 7) + 1;
      break;
    }
    case "Easter": {
      const daysSinceEaster = daysBetween(dates.easter, date);
      week = Math.floor(daysSinceEaster / 7) + 1;
      break;
    }
    case "Ordinary Time": {
      // Two spans of Ordinary Time
      if (isBefore(date, dates.ashWednesday)) {
        // Early OT: after Baptism of Lord
        const daysSinceBaptism = daysBetween(dates.baptismOfLord, date);
        week = Math.floor(daysSinceBaptism / 7) + 1;
      } else {
        // Late OT: after Pentecost
        // Week numbering continues from where early OT left off
        // Ordinary Time has 34 weeks total, ending at Christ the King
        const daysSincePentecost = daysBetween(addDays(dates.pentecost, 1), date);
        // Early OT ended around week 5-9 depending on Easter date
        // Late OT picks up from there. Simplification: count backwards from week 34
        const daysBeforeAdvent = daysBetween(date, dates.adventStart);
        const weeksBeforeAdvent = Math.floor(daysBeforeAdvent / 7);
        week = 34 - weeksBeforeAdvent;
        if (week < 1) week = 1;
      }
      break;
    }
    default:
      week = 1;
  }

  return { season: season.name, week };
}

// ============================================================
// Holy Days of Obligation
// ============================================================

const FIXED_HOLY_DAYS: HolyDay[] = [
  { name: "Mary, Mother of God", month: 1, day: 1, moveable: false },
  { name: "Assumption of Mary", month: 8, day: 15, moveable: false },
  { name: "All Saints' Day", month: 11, day: 1, moveable: false },
  { name: "Immaculate Conception", month: 12, day: 8, moveable: false },
  { name: "Christmas", month: 12, day: 25, moveable: false },
];

// Ascension is moveable: Easter + 39 days
const ASCENSION_HOLY_DAY: HolyDay = {
  name: "Ascension of the Lord",
  month: 0,
  day: 0,
  moveable: true,
};

function getAscensionDate(year: number): Date {
  const easter = computeEaster(year);
  return addDays(easter, 39);
}

export function isHolyDayOfObligation(date: Date): HolyDay | null {
  const year = date.getFullYear();

  // Check Ascension
  const ascension = getAscensionDate(year);
  if (isSameDay(date, ascension)) {
    return ASCENSION_HOLY_DAY;
  }

  // Check fixed holy days
  const m = date.getMonth() + 1;
  const d = date.getDate();
  for (const hd of FIXED_HOLY_DAYS) {
    if (hd.month === m && hd.day === d) {
      return hd;
    }
  }

  return null;
}

export function getNextHolyDays(date: Date, count: number): UpcomingHolyDay[] {
  const year = date.getFullYear();
  const upcoming: UpcomingHolyDay[] = [];

  // Collect all holy days for current and next year
  for (const y of [year, year + 1]) {
    // Fixed holy days
    for (const hd of FIXED_HOLY_DAYS) {
      const hdDate = new Date(y, hd.month - 1, hd.day);
      const diff = daysBetween(date, hdDate);
      if (diff >= 0) {
        upcoming.push({
          ...hd,
          date: hdDate,
          daysUntil: diff,
          isToday: diff === 0,
        });
      }
    }

    // Ascension
    const asc = getAscensionDate(y);
    const ascDiff = daysBetween(date, asc);
    if (ascDiff >= 0) {
      upcoming.push({
        ...ASCENSION_HOLY_DAY,
        month: asc.getMonth() + 1,
        day: asc.getDate(),
        date: asc,
        daysUntil: ascDiff,
        isToday: ascDiff === 0,
      });
    }
  }

  // Sort by date and return first `count`
  upcoming.sort((a, b) => a.daysUntil - b.daysUntil);
  return upcoming.slice(0, count);
}
