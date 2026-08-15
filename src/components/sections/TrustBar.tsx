"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LOGO_SETS = [
  [
    "/logos/browserbase.svg",
    "/logos/braintrust.svg",
    "/logos/higgsfield.svg",
    "/logos/cartesia.svg",
  ],
  [
    "/logos/david-ai.svg",
    "/logos/openrouter.svg",
    "/logos/samaya.svg",
    "/logos/consensus.svg",
  ],
  [
    "/logos/inngest.svg",
    "/logos/durable.svg",
    "/logos/upstash.svg",
    "/logos/cartesia.svg",
  ],
  [
    "/logos/braintrust.svg",
    "/logos/browserbase.svg",
    "/logos/david-ai.svg",
    "/logos/higgsfield.svg",
  ],
];

const CHANGE_INTERVAL = 3600;

function LogoSlot({
  logos,
  delay,
}: {
  logos: string[];
  delay: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const startTimer = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % logos.length);
      }, CHANGE_INTERVAL);

      return () => window.clearInterval(interval);
    }, delay);

    return () => window.clearTimeout(startTimer);
  }, [logos.length, delay]);

  return (
    <div className="relative flex h-14 w-full items-center justify-center overflow-hidden">
      <motion.div
        key={activeIndex}
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={logos[activeIndex]}
          alt=""
          aria-hidden="true"
          className="block max-h-[44px] w-auto max-w-[200px] object-contain"
        />
      </motion.div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto grid min-h-[154px] max-w-[1440px] grid-cols-1 lg:grid-cols-[360px_1fr]">
        {/* Trust statement */}
        <div className="flex min-h-[154px] items-center border-b border-line px-8 py-8 lg:border-b-0 lg:border-r lg:px-12">
          <p className="max-w-[285px] text-[18px] font-semibold leading-[1.35] tracking-[-0.025em] text-ink-800">
            Trusted by fast-growing
            <br />
            companies around the world.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid min-h-[154px] grid-cols-2 md:grid-cols-4">
          {LOGO_SETS.map((logos, index) => (
            <div
              key={index}
              className="flex min-h-[154px] items-center justify-center border-b border-line px-8 md:border-b-0 md:border-l"
            >
              <LogoSlot
                logos={logos}
                delay={index * 220}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}