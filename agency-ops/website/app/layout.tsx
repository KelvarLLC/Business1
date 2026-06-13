import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./armada.css";

export const metadata: Metadata = {
  title: "Kelvar LLC | AI Ecosystem Armada",
  description:
    "A connected fleet of practical AI automation systems for lead intake, follow-up, onboarding, reminders, reporting, and delivery operations."
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/start", label: "Start" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header" aria-label="Primary navigation">
          <Link className="brand" href="/">
            <span className="brand-mark">K</span>
            <span>Kelvar LLC</span>
          </Link>
          <nav className="nav-links">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="header-cta" href="/start">
            Map a workflow
          </Link>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <strong>Kelvar LLC</strong>
            <p>AI automation ecosystems for cleaner intake, follow-up, and delivery operations.</p>
          </div>
          <Link href="/start">Start an automation review</Link>
        </footer>
      </body>
    </html>
  );
}
