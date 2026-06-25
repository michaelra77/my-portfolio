export default function Section({ id, eyebrow, title, children }) {
  return (
    <section
      id={id}
      className="border-t border-neutral-100 py-20 sm:py-24 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
            {title}
          </h2>
          {/* 제목 아래 가로선 장식 */}
          <span className="mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>
        {children}
      </div>
    </section>
  );
}
