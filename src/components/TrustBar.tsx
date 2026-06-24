const brands = [
  "FinTech Weekly",
  "Wealth Daily",
  "Investor Hub",
  "Money Matters",
  "Capital Insights",
  "Smart Finance",
];

export default function TrustBar() {
  const doubled = [...brands, ...brands];

  return (
    <section className="relative border-y border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-white/25">
          Trusted by finance enthusiasts worldwide
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="marquee-track">
            {doubled.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="whitespace-nowrap text-lg font-semibold text-white/20 transition-colors hover:text-white/40"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
