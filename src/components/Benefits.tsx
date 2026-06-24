const benefits = [
  {
    title: "Unified Dashboard",
    description:
      "See all savings accounts, investments, and goals in one clean, organized view.",
  },
  {
    title: "Goal-Based Planning",
    description:
      "Create custom savings goals — emergency fund, vacation, retirement — and track progress automatically.",
  },
  {
    title: "Performance Insights",
    description:
      "Detailed analytics, trends, and projections so you always know where you stand.",
  },
  {
    title: "Smart Notifications",
    description:
      "Alerts for milestones, market changes, and spending patterns — never miss an opportunity.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Copy */}
          <div className="flex-1">
            <div className="section-badge mb-5">
              <span className="section-badge-dot" />
              Why Dhukio
            </div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Built for people who want their{" "}
              <span className="text-gradient-teal">money to work harder</span>
            </h2>
            <p className="mt-5 text-lg text-white/45">
              Whether you&apos;re just starting to save or managing a diverse
              portfolio, Dhukio adapts to your financial journey.
            </p>

            <div className="mt-10 space-y-5">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="glass group flex gap-4 rounded-2xl p-4 transition-all hover:border-teal-400/20"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-teal-400/15 text-sm font-bold text-teal-400 transition-colors group-hover:bg-teal-400/25">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-white/45">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="w-full max-w-sm flex-shrink-0 lg:max-w-md">
            <div className="glass-card glow-teal relative overflow-hidden rounded-3xl p-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl" />

              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/40">Total Net Worth</div>
                  <div className="mt-1 text-4xl font-extrabold tracking-tight">
                    $48,250
                  </div>
                </div>
                <div className="rounded-full bg-teal-400/15 px-3 py-1.5 text-xs font-bold text-teal-400 ring-1 ring-teal-400/25">
                  ↑ 12.8%
                </div>
              </div>

              {/* Allocation bars */}
              <div className="space-y-4">
                {[
                  { label: "Savings", amount: "$18,500", pct: 38, color: "bg-teal-400" },
                  { label: "Investments", amount: "$24,750", pct: 51, color: "bg-navy-500" },
                  { label: "Cash", amount: "$5,000", pct: 11, color: "bg-white/25" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-white/55">{item.label}</span>
                      <span className="font-semibold">{item.amount}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`chart-bar h-full rounded-full ${item.color}`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* SVG line chart */}
              <div className="mt-8">
                <div className="mb-2 text-xs text-white/35">12-month performance</div>
                <svg viewBox="0 0 280 80" className="w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2ec4b6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#2ec4b6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,60 L30,55 L60,48 L90,52 L120,38 L150,42 L180,28 L210,32 L240,18 L270,12 L280,8 L280,80 L0,80 Z"
                    fill="url(#chartGrad)"
                  />
                  <path
                    d="M0,60 L30,55 L60,48 L90,52 L120,38 L150,42 L180,28 L210,32 L240,18 L270,12 L280,8"
                    fill="none"
                    stroke="#2ec4b6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Mini transactions */}
              <div className="mt-6 space-y-2.5 border-t border-white/5 pt-5">
                {[
                  { name: "Savings deposit", amount: "+$500", positive: true },
                  { name: "AAPL dividend", amount: "+$42", positive: true },
                  { name: "Monthly budget", amount: "-$120", positive: false },
                ].map((tx) => (
                  <div key={tx.name} className="flex items-center justify-between text-sm">
                    <span className="text-white/50">{tx.name}</span>
                    <span className={tx.positive ? "font-semibold text-teal-400" : "text-white/60"}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
