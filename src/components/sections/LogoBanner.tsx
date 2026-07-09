import Image from "next/image";

export function LogoBanner() {
  return (
    <div className="mb-7 mt-2 flex flex-col items-center gap-3">
      <div className="w-full max-w-[72px]">
        <Image
          src="/black.png"
          alt="ACTA Logo"
          width={280}
          height={80}
          className="h-auto w-full object-contain dark:hidden"
        />
        <Image
          src="/white.png"
          alt="ACTA Logo"
          width={280}
          height={80}
          className="hidden h-auto w-full object-contain dark:block"
        />
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold tracking-tight text-foreground">ACTA</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          The new infrastructure for digital trust.
        </p>
      </div>
    </div>
  );
}
