"use client";

import { motion } from "framer-motion";
import { ProductWindow } from "@/components/product/ProductWindow";
import {
  Zap,
  Bot,
  Webhook,
  CheckCircle2,
} from "lucide-react";

const NODES = [
  {
    icon: Webhook,
    label: "Trigger",
    detail: "New Stripe invoice",
  },
  {
    icon: Bot,
    label: "Agent",
    detail: "Reads terms, flags risk",
  },
  {
    icon: Zap,
    label: "Action",
    detail: "Drafts response, files ticket",
  },
  {
    icon: CheckCircle2,
    label: "Result",
    detail: "Logged to workspace",
  },
];

export function HeroVisual() {
  return (
    <ProductWindow
      title="highh-runtime — pipeline: invoice-review"
      toolbar={
        <span className="flex items-center gap-1.5 rounded-pill bg-[#22C55E]/10 px-2.5 py-1 font-mono text-[11px] text-[#16A34A]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
          running
        </span>
      }
    >
      <div className="relative overflow-hidden bg-white px-6 py-10 md:px-10 md:py-14">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-8 md:grid-cols-4 md:gap-0">
          {NODES.map((node, i) => {
            const Icon = node.icon;

            return (
              <div
                key={node.label}
                className="relative flex items-center md:flex-col"
              >
                {/* Connector */}
                {i < NODES.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[36px]
                      top-14
                      hidden
                      h-px
                      w-[calc(100%-36px)]
                      bg-line-strong
                      md:left-1/2
                      md:top-7
                      md:block
                      md:w-full
                    "
                  >
                    <motion.div
                      className="h-full origin-left bg-indigo"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 0.35 + i * 0.22,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                )}

                {/* Node */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-4
                    md:flex-col
                    md:gap-3
                    md:text-center
                  "
                >
                  <span
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-line-strong
                      bg-white
                      shadow-[0_2px_10px_rgba(17,17,20,0.05)]
                    "
                  >
                    <Icon
                      size={21}
                      className="text-indigo"
                      strokeWidth={1.75}
                    />
                  </span>

                  <div className="md:mt-1">
                    <p className="font-mono text-[13px] font-medium text-ink-900">
                      {node.label}
                    </p>

                    <p className="mt-1 text-[14px] leading-5 text-ink-500">
                      {node.detail}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </ProductWindow>
  );
}