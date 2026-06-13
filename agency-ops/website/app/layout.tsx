import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelvar LLC | Automation Systems for Service Businesses",
  description:
    "Practical automation systems for lead intake, follow-up, onboarding, reminders, reporting, and operational handoffs."
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
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
          <Link className="header-cta" href="/contact">
            Start discovery
          </Link>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <strong>Kelvar LLC</strong>
            <p>Automation systems for cleaner intake, follow-up, and delivery operations.</p>
          </div>
          <Link href="/contact">Book a practical automation review</Link>
        </footer>
      </body>
    </html>
  );
}
