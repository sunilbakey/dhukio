import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#" },
    { label: "Security", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-950 pt-16 pb-10">
      <div className="gradient-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/dhukio.png"
                alt="Dhukio logo"
                width={40}
                height={40}
                className="rounded-xl transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-bold">
                Dhuk<span className="text-teal-400">io</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/35">
              The smart way to track savings, monitor investments, and build
              lasting wealth — all in one place.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {["X", "in", "gh"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-xs font-bold text-white/40 transition-all hover:border-teal-400/30 hover:text-teal-400"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-white/60">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/35 transition-colors hover:text-teal-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-white/25">
            &copy; {new Date().getFullYear()} Dhukio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-white/25 transition-colors hover:text-teal-400">
              Terms
            </Link>
            <Link href="#" className="text-sm text-white/25 transition-colors hover:text-teal-400">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-white/25 transition-colors hover:text-teal-400">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
