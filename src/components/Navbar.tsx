import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#testimonials", label: "Reviews" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-5 py-3 shadow-lg shadow-black/20">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative">
            <Image
              src="/dhukio.png"
              alt="Dhukio logo"
              width={36}
              height={36}
              className="rounded-xl transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Dhuk<span className="text-teal-400">io</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm text-white/60 transition-all hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="hidden rounded-lg px-4 py-2 text-sm text-white/60 transition-all hover:text-white sm:block"
          >
            Log in
          </Link>
          <Link href="#" className="btn-primary px-5 py-2 text-sm">
            <span>Get Started</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
