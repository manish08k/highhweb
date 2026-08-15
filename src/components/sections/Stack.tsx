"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  FileCode2,
  Boxes,
  Smartphone,
  Bot,
  Wrench,
  Search,
  Webhook,
  ListOrdered,
  Clock,
  Database,
  Box,
  GitBranch
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

type Accent = "indigo" | "amber" | "sky" | "emerald";

type Tool = {
  name: string;
  short: string;
  icon: LucideIcon;
  accent: Accent;
};

const ACCENTS: Record<Accent, { main: string; soft: string }> = {
  indigo: { main: "#4B4CF0", soft: "rgba(75,76,240,0.10)" },
  amber: { main: "#FF8A3D", soft: "rgba(255,138,61,0.10)" },
  sky: { main: "#3B82F6", soft: "rgba(59,130,246,0.10)" },
  emerald: { main: "#22C55E", soft: "rgba(34,197,94,0.10)" }
};

const TOOLS: Tool[] = [
  { name: "TypeScript", short: "TS", icon: FileCode2, accent: "indigo" },
  { name: "Next.js", short: "Next", icon: Boxes, accent: "indigo" },
  { name: "React Native", short: "RN", icon: Smartphone, accent: "indigo" },
  { name: "Claude", short: "Claude", icon: Bot, accent: "amber" },
  { name: "Tool use", short: "Tools", icon: Wrench, accent: "amber" },
  { name: "Vector search", short: "Vector", icon: Search, accent: "amber" },
  { name: "Webhooks", short: "Hooks", icon: Webhook, accent: "sky" },
  { name: "Queues", short: "Queue", icon: ListOrdered, accent: "sky" },
  { name: "Cron triggers", short: "Cron", icon: Clock, accent: "sky" },
  { name: "Postgres", short: "SQL", icon: Database, accent: "emerald" },
  { name: "Docker", short: "Docker", icon: Box, accent: "emerald" },
  { name: "CI/CD", short: "CI/CD", icon: GitBranch, accent: "emerald" }
];

function ToolCard({
  tool,
  active,
  anyActive,
  onEnter,
  onLeave
}: {
  tool: Tool;
  active: boolean;
  anyActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = tool.icon;
  const color = ACCENTS[tool.accent];

  return (
    <div
      className={`
        group
        relative
        min-h-[178px]
        overflow-hidden
        border-r
        border-t
        border-[#E3E6EC]
        bg-white
        transition-all
        duration-300
        ${active ? "z-20" : "z-0"}
        ${anyActive && !active ? "opacity-[0.58]" : "opacity-100"}
      `}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          transition-all
          duration-500
          ${active ? "opacity-100" : "opacity-0"}
        `}
        style={{
          background: `
            radial-gradient(
              circle at 50% 48%,
              ${color.soft.replace("0.10", "0.18")} 0%,
              ${color.soft.replace("0.10", "0.08")} 32%,
              transparent 72%
            )
          `
        }}
      />

      <div
        className={`
          pointer-events-none
          absolute
          -inset-10
          transition-all
          duration-500
          ${active ? "opacity-100 scale-100" : "opacity-0 scale-[0.94]"}
        `}
        style={{
          backgroundImage: `radial-gradient(
            ${color.main} 0.85px,
            transparent 0.85px
          )`,
          backgroundSize: "6px 6px",
          maskImage:
            "radial-gradient(ellipse 58% 58% at 50% 50%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 58% 58% at 50% 50%, black 0%, transparent 72%)"
        }}
      />

      <div
        className={`
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-[2px]
          transition-all
          duration-300
          ${active ? "opacity-100" : "opacity-0"}
        `}
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${color.main},
            transparent
          )`
        }}
      />

      <div
        className={`
          absolute
          right-5
          top-5
          rounded-full
          transition-all
          duration-300
          ${
            active
              ? "h-2.5 w-2.5 scale-100"
              : "h-1.5 w-1.5 scale-100 opacity-30"
          }
        `}
        style={{
          backgroundColor: color.main,
          boxShadow: active
            ? `0 0 0 4px ${color.soft}, 0 0 14px ${color.main}55`
            : "none"
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className={`
            relative
            flex
            h-[66px]
            w-[66px]
            items-center
            justify-center
            rounded-full
            bg-white
            transition-all
            duration-300
            ${active ? "scale-[1.08] border-[1.5px]" : "border"}
          `}
          style={{
            borderColor: active ? color.main : "#DDE1E8",
            boxShadow: active
              ? `
                0 0 0 7px ${color.soft},
                0 12px 35px rgba(20,24,35,0.10)
              `
              : "0 8px 26px rgba(20,24,35,0.045)"
          }}
        >
          <Icon
            size={29}
            strokeWidth={active ? 1.55 : 1.35}
            className="transition-all duration-300"
            style={{
              color: active ? color.main : "#9EA5B1"
            }}
          />
        </div>

        <div
          className={`
            mt-3
            flex
            flex-col
            items-center
            transition-all
            duration-300
            ${active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}
          `}
        >
          <span
            className="
              font-mono
              text-[10px]
              font-semibold
              tracking-[0.04em]
              text-[#343942]
            "
          >
            {tool.name}
          </span>

          <span
            className="
              mt-1
              font-mono
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.13em]
            "
            style={{
              color: color.main
            }}
          >
            {tool.short}
          </span>
        </div>
      </div>
    </div>
  );
}

function ToolGrid({
  tools,
  className = ""
}: {
  tools: Tool[];
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className={`
        relative
        overflow-hidden
        border-l
        border-b
        border-[#E3E6EC]
        bg-white
        ${className}
      `}
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-100
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(25,30,45,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(25,30,45,0.025) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px"
        }}
      />

      <div className="relative grid grid-cols-3">
        {tools.map((tool, index) => (
          <ToolCard
            key={tool.name}
            tool={tool}
            active={active === index}
            anyActive={active !== null}
            onEnter={() => setActive(index)}
            onLeave={() => setActive(null)}
          />
        ))}
      </div>
    </div>
  );
}

export function Stack() {
  return (
    <Section id="stack" className="border-t border-line">
      <Container>
        <Reveal>
          <p className="font-mono text-[13px] text-indigo">Built with</p>
          <h2 className="mt-3 max-w-[560px] text-display-md font-semibold text-balance">
            Ordinary tools, used well.
          </h2>
          <p className="mt-5 max-w-text text-[16px] leading-relaxed text-ink-500">
            We don&rsquo;t reach for a new framework to look modern. We pick
            tools your team can keep maintaining after we&rsquo;re gone.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ToolGrid tools={TOOLS} />
        </Reveal>
      </Container>
    </Section>
  );
}