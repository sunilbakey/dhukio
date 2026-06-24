const features = [
  {
    icon: "💰",
    title: "Savings Tracking",
    description:
      "Set goals, automate deposits, and watch your savings grow with real-time progress and smart reminders.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: "📈",
    title: "Investment Monitoring",
    description:
      "Track stocks, mutual funds, and portfolios in one place. Get performance insights and allocation breakdowns instantly.",
    span: "sm:col-span-2",
    accent: true,
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description:
      "Visualize spending patterns, forecast returns, and make data-driven decisions with intuitive charts.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: "🔒",
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption. We never sell your data — your privacy is our top priority.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: "⚡",
    title: "Real-Time Updates",
    description:
      "Live sync across all connected accounts. Stay on top of market movements instantly.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: "📱",
    title: "Mobile Ready",
    description:
      "Access your finances anywhere — desktop, tablet, or mobile, always in sync.",
    span: "col-span-1",
    accent: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(46,196,182,0.06),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-badge mx-auto mb-5">
            <span className="section-badge-dot" />
            Features
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Everything you need to{" "}
            <span className="text-gradient-teal">manage your money</span>
          </h2>
          <p className="mt-5 text-lg text-white/45">
            From daily savings to long-term investments, Dhukio gives you the
            tools to take full control of your financial future.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`glass-card group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${feature.span} ${
                feature.accent ? "lg:row-span-1" : ""
              }`}
            >
              {feature.accent && (
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl" />
              )}

              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl transition-transform group-hover:scale-110 ${
                  feature.accent
                    ? "bg-teal-400/20 ring-1 ring-teal-400/30"
                    : "bg-white/5 ring-1 ring-white/10"
                }`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/45">
                {feature.description}
              </p>

              {feature.accent && (
                <div className="mt-6 flex items-end gap-1">
                  {[35, 50, 42, 65, 58, 72, 68, 85, 78, 92].map((h, i) => (
                    <div
                      key={i}
                      className="chart-bar flex-1 rounded-sm bg-teal-400/50"
                      style={{
                        height: `${h * 0.5}px`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
              )}

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-teal-400/60 to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
