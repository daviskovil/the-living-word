"use client";

import type { UpcomingHolyDay } from "@/lib/liturgical";

interface HolyDayStripProps {
  upcomingDays: UpcomingHolyDay[];
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function HolyDayStrip({ upcomingDays }: HolyDayStripProps) {
  if (upcomingDays.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="section-label mb-3">Upcoming Holy Days</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {upcomingDays.map((hd, i) => (
          <div
            key={`${hd.name}-${i}`}
            className={`rounded-xl border px-4 py-3.5 transition-shadow ${
              hd.isToday
                ? "border-red-300 bg-red-50 shadow-sm"
                : "border-surface-200 bg-white hover:shadow-sm"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-surface-800">
                  {hd.name}
                </p>
                <p className="text-xs text-surface-400 mt-0.5">
                  {formatDate(hd.date)}
                </p>
              </div>
              <span
                className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${
                  hd.isToday
                    ? "bg-red-100 text-red-700"
                    : "bg-primary-50 text-primary-600"
                }`}
              >
                {hd.isToday ? "Today" : `${hd.daysUntil}d`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
