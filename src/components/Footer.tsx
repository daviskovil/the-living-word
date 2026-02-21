export function Footer() {
  return (
    <footer className="mt-16 pt-6 border-t border-parchment-200 text-center">
      <p className="font-sans text-xs text-parchment-400">
        Scripture from the World English Bible via{" "}
        <a
          href="https://bible-api.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-parchment-500 transition-colors"
        >
          bible-api.com
        </a>
      </p>
    </footer>
  );
}
