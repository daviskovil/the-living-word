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
      className={`w-full text-left rounded-xl p-4 border transition-all duration-200 ease-out cursor-pointer
        ${active
          ? "bg-primary-50 border-primary-300 shadow-sm ring-1 ring-primary-200"
          : "bg-white border-surface-200 hover:shadow-sm hover:border-surface-300 hover:-translate-y-0.5"
        }`}
    >
      <span className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-surface-400 mb-1">
        {label}
      </span>
      <span className={`block text-base font-medium ${active ? "text-primary-700" : "text-surface-800"}`}>
        {reference}
      </span>
    </button>
  );
}
