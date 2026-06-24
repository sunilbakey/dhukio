const steps = [
  {
    number: "01",
    icon: "✉️",
    title: "Create Your Account",
    description:
      "Sign up in seconds with your email. No credit card required to get started.",
  },
  {
    number: "02",
    icon: "🔗",
    title: "Connect Your Accounts",
    description:
      "Securely link bank accounts, investment portfolios, and savings goals in one click.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Track & Grow",
    description:
      "Monitor progress, set targets, and watch your wealth grow with actionable insights.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-white/5 bg-navy-900/60 py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-badge mx-auto mb-5">
            <span className="section-badge-dot" />
            How It Works
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Up and running in{" "}
            <span className="text-gradient-teal">3 simple steps</span>
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Connector line */}
          <div className="absolute top-10 hidden h-px w-full bg-gradient-to-r from-transparent via-teal-400/30 to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="group relative text-center">
                {/* Step circle */}
                <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-teal-400/10 ring-1 ring-teal-400/20 transition-all group-hover:bg-teal-400/20 group-hover:ring-teal-400/40" />
                  <span className="relative text-3xl">{step.icon}</span>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-400 text-[10px] font-bold text-navy-950">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
