import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Globe,
  AppWindow,
  BookOpen,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Package,
  Network,
  IdCard,
  Fingerprint,
  ChartColumn,
} from "lucide-react";
import { DiscordIcon } from "@/components/ui/discord-icon";
import { Reveal } from "@/components/ui/reveal";

type LinkEntry = {
  href: string;
  label: string;
  hint: string;
  Icon: LucideIcon | typeof DiscordIcon;
};

type LinkGroup = {
  heading: string | null;
  items: LinkEntry[];
};

const GROUPS: LinkGroup[] = [
  {
    heading: "Product",
    items: [
      {
        href: "https://acta.build",
        label: "Website",
        hint: "acta.build",
        Icon: Globe,
      },
      {
        href: "https://dapp.acta.build",
        label: "dApp",
        hint: "dapp.acta.build",
        Icon: AppWindow,
      },
      {
        href: "https://docs.acta.build",
        label: "Documentation",
        hint: "docs.acta.build",
        Icon: BookOpen,
      },
    ],
  },
  {
    heading: "Packages",
    items: [
      {
        href: "https://www.npmjs.com/package/@acta-team/credentials",
        label: "@acta-team/credentials",
        hint: "Credentials SDK",
        Icon: Package,
      },
      {
        href: "https://www.npmjs.com/package/@acta-team/docs-mcp",
        label: "@acta-team/docs-mcp",
        hint: "Docs MCP server",
        Icon: Package,
      },
    ],
  },
  {
    heading: "For developers",
    items: [
      {
        href: "https://production-api.acta.build/docs",
        label: "API · Mainnet",
        hint: "production-api.acta.build/docs",
        Icon: Network,
      },
      {
        href: "https://sandbox-api.acta.build/docs",
        label: "API · Sandbox",
        hint: "sandbox-api.acta.build/docs",
        Icon: Network,
      },
    ],
  },
  {
    heading: "did:stellar",
    items: [
      {
        href: "https://stellar.acta.build",
        label: "did:stellar",
        hint: "stellar.acta.build",
        Icon: Fingerprint,
      },
      {
        href: "https://did.acta.build",
        label: "DID Resolver",
        hint: "did.acta.build",
        Icon: IdCard,
      },
      {
        href: "https://www.npmjs.com/package/@acta-team/did-stellar",
        label: "@acta-team/did-stellar",
        hint: "did:stellar SDK",
        Icon: Package,
      },
      {
        href: "https://did.stats.acta.build",
        label: "Stats",
        hint: "did.stats.acta.build",
        Icon: ChartColumn,
      },
    ],
  },
  {
    heading: "Stats",
    items: [
      {
        href: "https://stats.acta.build",
        label: "Website",
        hint: "stats.acta.build",
        Icon: Globe,
      },
      {
        href: "https://dapp.stats.acta.build",
        label: "dApp",
        hint: "dapp.stats.acta.build",
        Icon: AppWindow,
      },
      {
        href: "https://docs.stats.acta.build",
        label: "Docs",
        hint: "docs.stats.acta.build",
        Icon: BookOpen,
      },
    ],
  },
  {
    heading: "Community",
    items: [
      {
        href: "https://github.com/ACTA-Team",
        label: "GitHub",
        hint: "github.com/ACTA-Team",
        Icon: Github,
      },
      {
        href: "https://discord.gg/DsUSE3aMDZ",
        label: "Discord",
        hint: "discord.gg/DsUSE3aMDZ",
        Icon: DiscordIcon,
      },
      {
        href: "https://x.com/ActaXyz",
        label: "Twitter",
        hint: "x.com/ActaXyz",
        Icon: Twitter,
      },
      {
        href: "https://www.linkedin.com/company/acta-org",
        label: "LinkedIn",
        hint: "linkedin.com/company/acta-org",
        Icon: Linkedin,
      },
      {
        href: "https://www.instagram.com/acta.xyz?igsh=MTF3czdzYTVlemxmMw==",
        label: "Instagram",
        hint: "instagram.com/acta.xyz",
        Icon: Instagram,
      },
    ],
  },
];

function LinkCard({ href, label, hint, Icon }: LinkEntry) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="lift group flex items-center gap-3.5 rounded-2xl border border-border bg-surface p-4 hover:border-primary/40"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border-strong bg-surface-sunken text-foreground/80 transition-colors group-hover:border-primary/60 group-hover:text-primary">
        <Icon className="size-4" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="text-[15px] font-semibold leading-tight">{label}</span>
        <span className="truncate font-mono text-[11px] text-muted-foreground">{hint}</span>
      </span>
      <ArrowUpRight
        className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        aria-hidden
      />
    </Link>
  );
}

export function LinksList() {
  return (
    <div className="mt-12 grid w-full grid-cols-1 items-start gap-x-6 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
      {GROUPS.map((group, i) => (
        <Reveal key={group.heading ?? "main"} delay={(i % 3) * 60}>
          {group.heading ? (
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="text-foreground/80">{String(i + 1).padStart(2, "0")}</span>
              <span
                className="grow-line h-px w-6 rounded-full bg-border-strong"
                aria-hidden="true"
              />
              <span>{group.heading}</span>
            </p>
          ) : null}
          <div className="space-y-3">
            {group.items.map((item) => (
              <LinkCard key={item.href} {...item} />
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
