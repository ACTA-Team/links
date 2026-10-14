import React from "react";

/** Entrance delay for the CSS `.enter` animation. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function LogoBanner() {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow enter">Official links</p>
      <h1
        className="enter text-balance mt-5 text-[2.2rem] font-bold leading-[1.05] [--enter-blur:8px] [--enter-y:0.45em] sm:mt-6 sm:text-[3.4rem] sm:leading-[1.04]"
        style={delay(100)}
      >
        Everything ACTA, <span className="text-primary">in one place.</span>
      </h1>
      <p
        className="enter mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg"
        style={delay(300)}
      >
        The new infrastructure for digital trust. Product, packages, developer tools, stats and
        community, all verified as official.
      </p>
    </div>
  );
}
