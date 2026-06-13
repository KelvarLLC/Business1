import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelvar LLC | AI Automation Ecosystems",
  description:
    "Practical AI automation ecosystems for service businesses that need faster follow-up, cleaner handoffs, and less manual admin work."
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
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
            Start review
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
