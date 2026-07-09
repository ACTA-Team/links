import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { DiscordIcon } from "@/components/ui/discord-icon";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const SOCIALS = [
  { href: "https://github.com/ACTA-Team", label: "GitHub", Icon: Github },
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
  {
    href: "https://discord.gg/DsUSE3aMDZ",
    label: "Discord",
    Icon: DiscordIcon,
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-12 items-center border-b border-border/50 bg-background/70 backdrop-blur-xl transition-colors">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-1.5">
          <div className="h-5 w-5">
            <Image
              src="/black.png"
              alt="ACTA"
              width={20}
              height={20}
              className="h-full w-full dark:hidden"
            />
            <Image
              src="/white.png"
              alt="ACTA"
              width={20}
              height={20}
              className="hidden h-full w-full dark:block"
            />
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground">
            ACTA
            <span className="ml-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60">
              Links
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1 md:gap-1.5">
          <div className="hidden items-center gap-1.5 md:flex">
            {SOCIALS.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
          <AnimatedThemeToggler className="h-8 w-8 rounded-lg p-0 [&>svg]:h-4 [&>svg]:w-4" />
        </div>
      </div>
    </header>
  );
}
