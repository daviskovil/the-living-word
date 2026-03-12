export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bibleistheanswer.com/#website",
        url: "https://bibleistheanswer.com",
        name: "Bible Is The Answer",
        description:
          "Free Catholic Bible companion with daily Mass readings, liturgical calendar, Saint of the Day, mood-based verse recommendations, and personal reflection journal.",
        inLanguage: "en-US",
      },
      {
        "@type": "WebApplication",
        "@id": "https://bibleistheanswer.com/#app",
        name: "Bible Is The Answer",
        url: "https://bibleistheanswer.com",
        applicationCategory: "ReligiousApp",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Daily Catholic Mass Readings",
          "Liturgical Calendar with Season Tracking",
          "Saint of the Day",
          "Verse of the Day",
          "AI-Powered Mood-Based Bible Verse Recommendations",
          "365-Day Bible Reading Plan",
          "Full Chapter Bible Reader",
          "Personal Reflection Journal",
          "Reading Streak Tracker",
          "Text-to-Speech for Scripture",
          "Social Sharing with Image Generation",
        ],
        description:
          "A free Catholic Bible companion app featuring daily Mass readings from the Catholic Lectionary (Years A, B, C), liturgical calendar, Saint of the Day, and AI-powered verse recommendations based on your mood.",
      },
      {
        "@type": "Organization",
        "@id": "https://bibleistheanswer.com/#organization",
        name: "Bible Is The Answer",
        url: "https://bibleistheanswer.com",
        logo: {
          "@type": "ImageObject",
          url: "https://bibleistheanswer.com/icon.svg",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
