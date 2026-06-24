import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "$2M+", label: "Savings Tracked" },
  { value: "99.9%", label: "Uptime" },
];

export default function Hero() {
  return (
    <section className="mesh-bg noise-overlay relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="grid-pattern pointer-events-none absolute inset-0" />

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-5%] h-[500px] w-[500px] rounded-full bg-navy-500/30 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-12">
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="section-badge animate-fade-up mb-8 opacity-0">
              <span className="section-badge-dot" />
              Your personal finance companion
            </div>

            <h1 className="animate-fade-up delay-100 text-5xl font-extrabold leading-[1.08] tracking-tight opacity-0 md:text-6xl lg:text-7xl">
              Save Smarter.
              <br />
              <span className="text-gradient">Invest Better.</span>
            </h1>

            <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/55 opacity-0 md:text-xl lg:mx-0">
              Track savings, monitor investments, and grow your wealth — all in
              one beautiful dashboard built for clarity and confidence.
            </p>

            <div className="animate-fade-up delay-300 mt-10 flex flex-col items-center gap-3 opacity-0 sm:flex-row lg:justify-start">
              <Link href="#" className="btn-primary w-full px-8 py-4 text-base sm:w-auto">
                <span>Start Tracking Free →</span>
              </Link>
              <Link
                href="#how-it-works"
                className="btn-secondary w-full px-8 py-4 text-center text-base font-medium text-white sm:w-auto"
              >
                See How It Works
              </Link>
            </div>

            {/* Stats */}
            <div className="animate-fade-up delay-400 mt-14 grid grid-cols-3 gap-4 opacity-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl px-4 py-4 text-center lg:text-left"
                >
                  <div className="text-2xl font-extrabold text-gradient-teal md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs text-white/40 md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex-shrink-0">
            {/* Rotating ring */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="animate-spin-slow h-[380px] w-[380px] rounded-full border border-dashed border-teal-400/10" />
            </div>

            {/* Logo */}
            <div className="animate-float relative mx-auto w-fit">
              <div className="glow-ring" />
              <div className="glow-teal relative">
                <Image
                  src="/dhukio.png"
                  alt="Dhukio app"
                  width={280}
                  height={280}
                  className="relative rounded-[2rem] shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating card — portfolio growth */}
            <div className="animate-float-delayed glass absolute -bottom-6 -left-8 rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20">
                  <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-teal-400">+24.5%</div>
                  <div className="text-xs text-white/45">Portfolio growth</div>
                </div>
              </div>
            </div>

            {/* Floating card — savings goal */}
            <div
              className="animate-float glass absolute -top-4 -right-6 rounded-2xl px-4 py-3 shadow-xl"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-teal-400/20 flex items-center justify-center">
                  <span className="text-sm">🎯</span>
                </div>
                <div>
                  <div className="text-xs text-white/45">Emergency Fund</div>
                  <div className="text-sm font-bold">$8,400 / $10K</div>
                  <div className="mt-1.5 h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[84%] rounded-full bg-teal-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card — stock */}
            <div
              className="animate-float-delayed glass absolute -right-10 top-1/2 rounded-2xl px-4 py-2.5 shadow-xl"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-xs text-white/45">AAPL</div>
              <div className="text-sm font-bold text-teal-400">+3.2%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
