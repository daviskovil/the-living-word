"use client";

import { useMemo } from "react";
import { getReadingIndex } from "@/lib/getDayOfYear";
import { readingPlan } from "@/data/readingPlan";
import { ReadingCard } from "./ReadingCard";

interface DailyReadingCardsProps {
  activeReference: string | null;
  onSelectReading: (reference: string) => void;
}

export function DailyReadingCards({ activeReference, onSelectReading }: DailyReadingCardsProps) {
  const todaysReading = useMemo(() => {
    const index = getReadingIndex();
    return readingPlan[index];
  }, []);

  const cards = [
    { label: "Old Testament", reference: todaysReading.ot },
    { label: "Psalm", reference: todaysReading.psalm },
    { label: "New Testament", reference: todaysReading.nt },
  ];

  return (
    <section>
      <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-parchment-500 mb-4">
        Today&apos;s Readings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {cards.map((card) => (
          <ReadingCard
            key={card.label}
            label={card.label}
            reference={card.reference}
            active={activeReference === card.reference}
            onClick={() => onSelectReading(card.reference)}
          />
        ))}
      </div>
    </section>
  );
}
