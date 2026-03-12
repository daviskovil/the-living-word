"use client";

import { useState } from "react";

interface ShareButtonsProps {
  reference: string;
  text: string;
}

function generateShareImage(reference: string, text: string): Promise<Blob | null> {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      resolve(null);
      return;
    }

    // Clean white background
    ctx.fillStyle = "#fafafa";
    ctx.fillRect(0, 0, 1080, 1080);

    // Subtle indigo accent bar at top
    ctx.fillStyle = "#4f46e5";
    ctx.fillRect(0, 0, 1080, 6);

    // Verse text — word wrap
    ctx.fillStyle = "#18181b";
    ctx.font = 'italic 28px Georgia, serif';
    ctx.textAlign = "center";

    const maxWidth = 860;
    const lineHeight = 44;
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);

    const totalHeight = lines.length * lineHeight;
    const startY = Math.max(200, (1080 - totalHeight) / 2 - 40);

    if (lines.length > 0) {
      lines[0] = `\u201C${lines[0]}`;
      lines[lines.length - 1] = `${lines[lines.length - 1]}\u201D`;
    }

    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], 540, startY + i * lineHeight);
    }

    // Reference
    ctx.fillStyle = "#4f46e5";
    ctx.font = "bold 22px system-ui, sans-serif";
    ctx.fillText(`\u2014 ${reference}`, 540, startY + lines.length * lineHeight + 50);

    // Footer
    ctx.fillStyle = "#a1a1aa";
    ctx.font = "16px system-ui, sans-serif";
    ctx.fillText("The Living Word", 540, 1020);

    canvas.toBlob((blob) => resolve(blob), "image/png");
  });
}

export function ShareButtons({ reference, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);

  const shareText = `${reference}\n\n${text}\n\n\u2014 The Living Word`;

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
        await navigator.share({ title: reference, text: shareText });
      } catch {
        // User cancelled
      }
    } else {
      handleCopy();
    }
  }

  async function handleShareImage() {
    setGenerating(true);
    try {
      const shortText = text.length > 500 ? text.substring(0, 497) + "..." : text;
      const blob = await generateShareImage(reference, shortText);
      if (!blob) return;

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${reference.replace(/[^a-zA-Z0-9]/g, "-")}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      // Canvas generation failed
    } finally {
      setGenerating(false);
    }
  }

  function handleWhatsApp() {
    const encoded = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
  }

  const btnClass =
    "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-surface-500 border border-surface-200 rounded-lg transition-colors hover:bg-surface-100 hover:text-surface-700 cursor-pointer";

  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={handleCopy} className={btnClass}>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        {copied ? "Copied!" : "Copy"}
      </button>

      <button onClick={handleShare} className={btnClass}>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        Share
      </button>

      <button onClick={handleShareImage} disabled={generating} className={btnClass}>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {generating ? "..." : "Image"}
      </button>

      <button onClick={handleWhatsApp} className={btnClass}>
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        WhatsApp
      </button>
    </div>
  );
}
