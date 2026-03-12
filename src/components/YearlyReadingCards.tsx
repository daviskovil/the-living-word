"use client";

import { useMemo } from "react";
import { getReadingIndex } from "@/lib/getDayOfYear";
import { readingPlan } from "@/data/readingPlan";
import { ReadingCard } from "./ReadingCard";

interface YearlyReadingCardsProps {
  activeReference: string | null;
  onSelectReading: (reference: string) => void;
}

export function YearlyReadingCards({ activeReference, onSelectReading }: YearlyReadingCardsProps) {
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
    <div className="mt-3">
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
    </div>
  );
}
