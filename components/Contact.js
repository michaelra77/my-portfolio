export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            함께 일해요
          </h2>
          <span className="mt-4 h-1 w-12 rounded-full bg-accent" />

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-300">
            새로운 프로젝트나 협업 제안이 있으시면 언제든 편하게 연락 주세요.
            브랜드의 다음 성장을 함께 고민하겠습니다.
          </p>

          <a
            href="mailto:yyh@wpic.co"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-neutral-900 transition-colors hover:bg-accent-strong"
          >
            yyh@wpic.co
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
