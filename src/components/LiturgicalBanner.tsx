"use client";

import type { LiturgicalSeason, HolyDay } from "@/lib/liturgical";

interface LiturgicalBannerProps {
  season: LiturgicalSeason;
  holyDay: HolyDay | null;
}

const SEASON_STYLES: Record<string, { bg: string; dot: string; text: string; sub: string }> = {
  purple: {
    bg: "bg-gradient-to-r from-violet-600 to-purple-700",
    dot: "bg-violet-300",
    text: "text-white",
    sub: "text-violet-200",
  },
  white: {
    bg: "bg-gradient-to-r from-amber-50 to-yellow-100",
    dot: "bg-amber-400",
    text: "text-surface-900",
    sub: "text-amber-700",
  },
  green: {
    bg: "bg-gradient-to-r from-emerald-600 to-teal-700",
    dot: "bg-emerald-300",
    text: "text-white",
    sub: "text-emerald-200",
  },
  red: {
    bg: "bg-gradient-to-r from-red-600 to-rose-700",
    dot: "bg-red-300",
    text: "text-white",
    sub: "text-red-200",
  },
  rose: {
    bg: "bg-gradient-to-r from-pink-500 to-rose-600",
    dot: "bg-pink-300",
    text: "text-white",
    sub: "text-pink-200",
  },
};

export function LiturgicalBanner({ season, holyDay }: LiturgicalBannerProps) {
  const isHolyDay = holyDay !== null;
  const styles = isHolyDay
    ? SEASON_STYLES.red
    : SEASON_STYLES[season.color] ?? SEASON_STYLES.green;

  return (
    <div className={`${styles.bg} w-full`}>
      <div className="max-w-3xl mx-auto px-5 py-3.5 flex items-center justify-center gap-3">
        <span className={`w-2 h-2 rounded-full ${styles.dot} shrink-0`} />
        {isHolyDay ? (
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className={`text-sm font-semibold ${styles.text}`}>
              {holyDay.name}
            </span>
            <span className={`text-xs ${styles.sub}`}>
              Holy Day of Obligation
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className={`text-sm font-semibold ${styles.text}`}>
              {season.name}
            </span>
            <span className={`text-xs ${styles.sub} hidden sm:inline`}>
              {season.description}
            </span>
          </div>
        )}
        <span className={`w-2 h-2 rounded-full ${styles.dot} shrink-0`} />
      </div>
    </div>
  );
}
