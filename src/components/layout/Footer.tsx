import Link from "next/link";
import Image from "next/image";
import {
  GlobeIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/font-awesome-icons";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 py-8 md:py-12 border-t border-gray-100 dark:border-zinc-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link href="https://acta" className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-5 h-5 md:w-6 md:h-6">
                <Image
                  src="/black.png"
                  alt="ACTA Logo"
                  width={24}
                  height={24}
                  className="w-full h-full dark:hidden"
                />
                <Image
                  src="/white.png"
                  alt="ACTA Logo"
                  width={24}
                  height={24}
                  className="w-full h-full hidden dark:block"
                />
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">ACTA</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              The new infrastructure for digital trust.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-4 text-sm md:text-base">
              Resources
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  href="https://trustbridge.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm flex items-center gap-2"
                >
                  <GlobeIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                  Website
                </Link>
              </li>
             
              <li>
                <Link
                  href="https://dapp.acta.build"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm"
                >
                  Start Building
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-4 text-sm md:text-base">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/ACTA-Team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm flex items-center gap-2"
                >
                  <GithubIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/ActaXyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm flex items-center gap-2"
                >
                  <TwitterIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/acta-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm flex items-center gap-2"
                >
                  <LinkedinIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/acta.xyz?igsh=MTF3czdzYTVlemxmMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm flex items-center gap-2"
                >
                  <InstagramIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
