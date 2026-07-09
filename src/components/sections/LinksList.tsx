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
  ExternalLink,
  Package,
  Network,
  IdCard,
  BarChart3,
} from "lucide-react";
import { DiscordIcon } from "@/components/ui/discord-icon";

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
    heading: null,
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
    heading: "For developers",
    items: [
      {
        href: "https://www.npmjs.com/package/@acta-team/credentials",
        label: "npm package",
        hint: "@acta-team/credentials",
        Icon: Package,
      },
      {
        href: "https://api.testnet.acta.build/docs",
        label: "API Playground",
        hint: "api.testnet.acta.build/docs",
        Icon: Network,
      },
      {
        href: "https://did.acta.build",
        label: "DID Resolver",
        hint: "did.acta.build",
        Icon: IdCard,
      },
      {
        href: "https://stats.acta.build",
        label: "Stats",
        hint: "stats.acta.build",
        Icon: BarChart3,
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

export function LinksList() {
  return (
    <div className="w-full space-y-5">
      {GROUPS.map(group => (
        <div key={group.heading ?? "main"}>
          {group.heading ? (
            <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              {group.heading}
            </p>
          ) : null}
          <div className="space-y-2.5">
            {group.items.map(({ href, label, hint, Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 transition-all duration-200 hover:border-primary/40 hover:bg-card"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground transition-colors group-hover:text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-sm font-medium leading-tight text-foreground sm:text-[15px]">
                    {label}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {hint}
                  </span>
                </span>
                <ExternalLink
                  className="h-4 w-4 shrink-0 text-muted-foreground opacity-60 transition-all group-hover:text-primary group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
