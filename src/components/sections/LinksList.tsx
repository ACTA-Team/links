import Link from "next/link";
import {
  GlobeIcon,
  FileTextIcon,
  CodeIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/font-awesome-icons";

export function LinksList() {
  return (
    <div className="w-full space-y-2">
      <Link
        href="https://acta.build"
        className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
      >
        <GlobeIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
        <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
          Website
        </span>
      </Link>
      <Link
        href="https://docs.acta.build"
        className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
      >
        <FileTextIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
        <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
          Documentation
        </span>
      </Link>
      <Link
        href="https://dapp.acta.build"
        className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
      >
        <CodeIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
        <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
          dApp
        </span>
      </Link>
      <Link
        href="https://github.com/ACTA-Team"
        className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
      >
        <GithubIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
        <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
          GitHub
        </span>
      </Link>
      <Link
        href="https://x.com/ActaXyz"
        className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
      >
        <TwitterIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
        <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
          Twitter
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/company/acta-org"
        className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
      >
        <LinkedinIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
        <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
          LinkedIn
        </span>
      </Link>
      <Link
        href="https://www.instagram.com/acta.xyz?igsh=MTF3czdzYTVlemxmMw=="
        className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
      >
        <InstagramIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
        <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
          Instagram
        </span>
      </Link>
    </div>
  );
}
