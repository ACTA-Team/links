import Link from "next/link";
import Image from "next/image";
import { Globe, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { DiscordIcon } from "@/components/ui/discord-icon";

const RESOURCES = [
  { href: "https://acta.build", label: "Website", Icon: Globe },
  { href: "https://docs.acta.build", label: "Start Building", Icon: null },
];

const CONNECT = [
  { href: "https://github.com/ACTA-Team", label: "GitHub", Icon: Github },
  { href: "https://discord.gg/DsUSE3aMDZ", label: "Discord", Icon: DiscordIcon },
  { href: "https://x.com/ActaXyz", label: "Twitter", Icon: Twitter },
  {
    href: "https://www.linkedin.com/company/acta-org",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/acta.xyz?igsh=MTF3czdzYTVlemxmMw==",
    label: "Instagram",
    Icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link
              href="https://acta.build"
              className="mb-3 flex items-center gap-2 md:mb-4"
            >
              <div className="h-6 w-6">
                <Image
                  src="/black.png"
                  alt="ACTA Logo"
                  width={24}
                  height={24}
                  className="h-full w-full dark:hidden"
                />
                <Image
                  src="/white.png"
                  alt="ACTA Logo"
                  width={24}
                  height={24}
                  className="hidden h-full w-full dark:block"
                />
              </div>
              <span className="text-sm font-semibold tracking-wide text-foreground">
                ACTA
              </span>
            </Link>
            <p className="text-xs text-muted-foreground sm:text-sm">
              The new infrastructure for digital trust.
            </p>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              Resources
            </p>
            <ul className="flex flex-col gap-2.5">
              {RESOURCES.map(({ href, label, Icon }) => (
                <li key={href + label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              Connect
            </p>
            <ul className="flex flex-col gap-2.5">
              {CONNECT.map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/50 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} ACTA</p>
          <p>
            <Link
              className="text-foreground/80 hover:text-foreground hover:underline"
              href="https://github.com/ACTA-Team"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source &amp; community
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
