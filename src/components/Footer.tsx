// Footer: copyright and links

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-base-border py-8 dark:border-base-border">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm text-text-muted">
          © {currentYear} Lumen. All creators on this page are fictional and generated with AI.
        </p>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm">
          <a
            href="https://t.me/lmn_ai_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-telegram"
          >
            Telegram
          </a>
          <a
            href="mailto:hello@lumen.ai"
            className="text-text-muted transition-colors hover:text-telegram"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}