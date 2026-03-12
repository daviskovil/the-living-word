export interface LectionaryReading {
  label: string;
  reference: string;
  intro?: string;
}

export interface LectionaryEntry {
  season: string;
  week: number;
  dayOfWeek: number;
  title: string;
  readings: LectionaryReading[];
}
