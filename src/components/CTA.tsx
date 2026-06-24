import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mesh-bg relative overflow-hidden rounded-[2rem] border border-white/10 px-8 py-20 text-center md:px-20">
          <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-teal-500/15 blur-3xl" />

          <div className="relative">
            <div className="section-badge mx-auto mb-6">
              <span className="section-badge-dot" />
              Get Started Today
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Ready to take control of{" "}
              <span className="text-gradient-teal">your finances?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-white/45">
              Join thousands who trust Dhukio to track savings and grow
              investments. Free forever — no credit card required.
            </p>

            {/* Email capture */}
            <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-teal-400/40 focus:ring-2 focus:ring-teal-400/15"
              />
              <Link href="#" className="btn-primary shrink-0 px-8 py-3.5 text-sm">
                <span>Get Started Free</span>
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/25">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
