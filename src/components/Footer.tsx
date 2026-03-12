export function Footer() {
  return (
    <footer className="mt-16 pt-6 border-t border-surface-200 text-center pb-8">
      <p className="text-xs text-surface-400">
        Scripture from the World English Bible via{" "}
        <a
          href="https://bible-api.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 transition-colors"
        >
          bible-api.com
        </a>
      </p>
    </footer>
  );
}
