"use client";

interface ReadingCardProps {
  label: string;
  reference: string;
  active: boolean;
  onClick: () => void;
}

export function ReadingCard({ label, reference, active, onClick }: ReadingCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-lg p-5 border transition-all duration-200 ease-out cursor-pointer
        ${active
          ? "bg-parchment-200 border-parchment-400 shadow-md"
          : "bg-parchment-100 border-parchment-200 hover:shadow-md hover:border-parchment-300 hover:-translate-y-0.5"
        }`}
    >
      <span className="block text-xs font-sans font-semibold uppercase tracking-wider text-parchment-500 mb-1.5">
        {label}
      </span>
      <span className="block font-serif text-lg text-parchment-800">
        {reference}
      </span>
    </button>
  );
}
