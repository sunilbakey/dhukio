const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    avatar: "SC",
    rating: 5,
    quote:
      "Dhukio completely changed how I manage my finances. I hit my emergency fund goal 3 months early!",
  },
  {
    name: "Marcus Johnson",
    role: "Freelance Designer",
    avatar: "MJ",
    rating: 5,
    quote:
      "The investment tracking is incredible. I can see all my portfolios in one place without jumping between apps.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    avatar: "PS",
    rating: 5,
    quote:
      "Clean, intuitive, and actually beautiful. Finally a finance app that doesn't feel overwhelming.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative border-y border-white/5 bg-navy-900/40 py-28 md:py-36">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-badge mx-auto mb-5">
            <span className="section-badge-dot" />
            Reviews
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Loved by{" "}
            <span className="text-gradient-teal">thousands of users</span>
          </h2>
          <p className="mt-5 text-lg text-white/45">
            Real stories from people who transformed their financial habits with Dhukio.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card group flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <Stars count={t.rating} />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-white/60">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-400/15 text-xs font-bold text-teal-400 ring-1 ring-teal-400/25">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
