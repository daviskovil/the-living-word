"use client";

export interface SaintOfTheDayEntry {
  name: string;
  feastMonth: number;
  feastDay: number;
  bio: string;
  patronage: string;
  relatedVerse: string;
}

interface SaintOfTheDayProps {
  saint: SaintOfTheDayEntry;
  onOpenVerse: (reference: string) => void;
}

const MONTH_NAMES = [
  "", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function SaintOfTheDay({ saint, onOpenVerse }: SaintOfTheDayProps) {
  return (
    <section className="mt-8">
      <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-surface-900">
                  {saint.name}
                </h3>
                <p className="text-xs text-accent-600 font-medium mt-0.5">
                  Feast: {MONTH_NAMES[saint.feastMonth]} {saint.feastDay}
                </p>
              </div>
              <span className="shrink-0 text-xs font-medium text-surface-400 uppercase tracking-wide">
                Saint
              </span>
            </div>
            <p className="text-sm text-surface-600 mt-3 leading-relaxed">
              {saint.bio}
            </p>
            <p className="text-xs text-surface-400 mt-2">
              {saint.patronage}
            </p>
            <button
              onClick={() => onOpenVerse(saint.relatedVerse)}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read {saint.relatedVerse}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
