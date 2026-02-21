"use client";

import { useState } from "react";

interface ShareButtonsProps {
  reference: string;
  text: string;
}

export function ShareButtons({ reference, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `${reference}\n\n${text}\n\n— The Living Word`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  }

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: reference,
          text: shareText,
        });
      } catch {
        // User cancelled share dialog
      }
    } else {
      handleCopy();
    }
  }

  return (
    <div className="flex gap-3 mt-6">
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-sans font-medium text-parchment-600 border border-parchment-300 rounded-lg transition-colors hover:bg-parchment-100 hover:border-parchment-400 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        {copied ? "Copied!" : "Copy"}
      </button>
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-sans font-medium text-parchment-600 border border-parchment-300 rounded-lg transition-colors hover:bg-parchment-100 hover:border-parchment-400 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        Share
      </button>
    </div>
  );
}
