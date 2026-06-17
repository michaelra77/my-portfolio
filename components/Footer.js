export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-10 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white">양예희 (Ye Hee Yang)</span>
        </p>
        <a
          href="mailto:yyh@wpic.co"
          className="transition-colors hover:text-accent"
        >
          yyh@wpic.co
        </a>
      </div>
    </footer>
  );
}
