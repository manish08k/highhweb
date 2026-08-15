"use client";

import { motion } from "framer-motion";
import {
  Target,
  Hammer,
  Eye,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Scope",
    description:
      "A short working session to define exactly what gets built, and what it doesn't cover. You leave with a fixed scope, not a proposal.",
    icon: Target,
  },
  {
    number: "02",
    title: "Build",
    description:
      "We build in weekly increments against a staging environment you can open and click through at any time.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Review",
    description:
      "You review working software, not slides. Changes get scoped into the next increment, not bolted on ad hoc.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Ship",
    description:
      "We deploy, hand over the codebase and documentation, and stay on for an agreed support window.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="border-t border-black/[0.08] bg-[#f8f8fa]"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-28 sm:px-8 md:py-32 lg:px-10 lg:py-36">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[760px]"
        >
          <p className="mb-6 font-mono text-[13px] font-semibold uppercase tracking-[0.24em] text-[#635bff]">
            How it works
          </p>

          <h2 className="text-[42px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#111114] sm:text-[50px] md:text-[58px] lg:text-[62px]">
            Four steps.
            <br />
            <span className="text-[#9aa0ad]">
              No discovery phase that goes nowhere.
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 border-y border-black/[0.09]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    "group relative min-h-[300px] px-6 py-8",
                    "border-black/[0.09]",
                    index > 0 ? "md:border-l" : "",
                    index === 2 ? "lg:border-l" : "",
                    index === 1 ? "lg:border-l" : "",
                    index === 3 ? "lg:border-l" : "",
                    "transition-colors duration-300 hover:bg-white",
                    "sm:px-8 sm:py-10",
                    "lg:min-h-[330px] lg:px-8 lg:py-10",
                  ].join(" ")}
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[13px] font-medium tracking-[0.14em] text-[#a3a8b3]">
                      {step.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center text-[#6b7280] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-[#635bff]">
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-14">
                    <h3 className="text-[21px] font-semibold tracking-[-0.025em] text-[#17171a]">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-[270px] text-[16px] leading-[1.55] tracking-[-0.01em] text-[#747b89]">
                      {step.description}
                    </p>
                  </div>

                  {/* Very subtle hover line */}
                  <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#635bff]/30 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}