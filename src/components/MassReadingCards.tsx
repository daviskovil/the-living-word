"use client";

import { ReadingCard } from "./ReadingCard";

export interface MassReading {
  label: string;
  reference: string;
}

interface MassReadingCardsProps {
  readings: MassReading[];
  cycleNote: string;
  activeReference: string | null;
  onSelectReading: (reference: string, label: string) => void;
}

export function MassReadingCards({
  readings,
  cycleNote,
  activeReference,
  onSelectReading,
}: MassReadingCardsProps) {
  if (readings.length === 0) return null;

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="section-label">Today&rsquo;s Mass Readings</h2>
        <span className="text-xs text-surface-400">
          {cycleNote}
        </span>
      </div>
      <div className={`grid gap-3 ${
        readings.length <= 2
          ? "grid-cols-1 sm:grid-cols-2"
          : "grid-cols-1 sm:grid-cols-2"
      }`}>
        {readings.map((reading) => (
          <ReadingCard
            key={reading.label}
            label={reading.label}
            reference={reading.reference}
            active={activeReference === reading.reference}
            onClick={() => onSelectReading(reading.reference, reading.label)}
          />
        ))}
      </div>
    </section>
  );
}
