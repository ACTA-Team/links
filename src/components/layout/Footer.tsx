import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Website", href: "https://acta.build" },
      { label: "dApp", href: "https://dapp.acta.build" },
      { label: "Documentation", href: "https://docs.acta.build" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Playground", href: "https://sandbox-api.acta.build/docs" },
      { label: "did:stellar", href: "https://stellar.acta.build" },
      { label: "DID Resolver", href: "https://did.acta.build" },
      { label: "GitHub", href: "https://github.com/ACTA-Team" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/acta-org" },
      { label: "X", href: "https://x.com/ActaXyz" },
      { label: "Instagram", href: "https://www.instagram.com/acta.xyz" },
      { label: "Discord", href: "https://discord.gg/DsUSE3aMDZ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-band">
      {/* A hairline of burgundy: the one red the page closes on. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,var(--burgundy)_30%,var(--cherry)_50%,var(--burgundy)_70%,transparent)] opacity-70"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Verifiable credentials for organizations. Issue once, verify anywhere.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow">{col.title}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/75 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/80 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} ACTA. All rights reserved.</p>
          <p>Issue once. Verify anywhere.</p>
        </div>
      </div>
    </footer>
  );
}
