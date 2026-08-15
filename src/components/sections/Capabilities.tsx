"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import {
  Boxes,
  Bot,
  Workflow,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  BarChart3,
  CreditCard,
  LayoutDashboard,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
  Database,
  Mail,
  FileText,
  Zap,
} from "lucide-react";

const ITEMS = [
  // PRODUCTS
  {
    icon: Boxes,
    title: "Products",
    description:
      "Full product builds — from first screen to shipped release. We design the interface, build the frontend and backend, and hand over something your team can maintain.",
    points: [
      "Web and internal apps",
      "Design system + UI build",
      "Handoff-ready codebase",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Commerce experiences designed around real customer journeys, from discovery and checkout to payments and post-purchase flows.",
    points: [
      "Custom storefronts",
      "Checkout experiences",
      "Payment integrations",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description:
      "Focused dashboards that turn complex business data into clear, useful interfaces your team can actually work with.",
    points: [
      "Analytics interfaces",
      "Data visualization",
      "Real-time metrics",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Internal tools",
    description:
      "Operational software built around the way your team actually works — faster, simpler, and easier to maintain.",
    points: [
      "Admin platforms",
      "Team workflows",
      "Role-based access",
    ],
  },

  // AI AGENTS
  {
    icon: Bot,
    title: "AI agents",
    description:
      "Agents that read your data, make a decision, and act — inside your existing tools, with the guardrails and logs to trust them in production.",
    points: [
      "Task-specific, not general-purpose",
      "Tool and API integrations",
      "Human review checkpoints",
    ],
  },
  {
    icon: MessageSquare,
    title: "Support agents",
    description:
      "AI agents that understand incoming support requests, resolve repetitive issues, and escalate the cases that need a human.",
    points: [
      "Ticket classification",
      "Knowledge retrieval",
      "Human escalation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Review agents",
    description:
      "Agents that review information against defined rules and surface risks before something reaches production or a customer.",
    points: [
      "Automated reviews",
      "Rule-based guardrails",
      "Audit-friendly logs",
    ],
  },
  {
    icon: Sparkles,
    title: "AI copilots",
    description:
      "Purpose-built copilots that work alongside your team, turning internal knowledge and tools into a faster way to get work done.",
    points: [
      "Context-aware assistance",
      "Internal knowledge",
      "Action-based workflows",
    ],
  },

  // AUTOMATIONS
  {
    icon: Workflow,
    title: "Automations",
    description:
      "The repetitive, cross-tool work your team does by hand — connected, scheduled, and monitored so it just runs.",
    points: [
      "Trigger-based workflows",
      "Cross-tool orchestration",
      "Failure alerts, not silent drops",
    ],
  },
  {
    icon: FileText,
    title: "Document workflows",
    description:
      "Turn incoming documents and files into structured information and automatically route the results to the right systems.",
    points: [
      "Document processing",
      "Data extraction",
      "Automatic routing",
    ],
  },
  {
    icon: Mail,
    title: "Email workflows",
    description:
      "Connect incoming email to the systems and people that need to act, without someone manually sorting every message.",
    points: [
      "Email classification",
      "Automatic ticket creation",
      "Team notifications",
    ],
  },
  {
    icon: Database,
    title: "Data pipelines",
    description:
      "Reliable pipelines that move, transform, and synchronize information across the tools your business depends on.",
    points: [
      "Data synchronization",
      "Scheduled processing",
      "Monitoring + alerts",
    ],
  },
];

const CARD_WIDTH = 400;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

export function Capabilities() {
  const [active, setActive] = useState<number | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  const updateEdges = () => {
    const el = trackRef.current;

    if (!el) return;

    setAtStart(el.scrollLeft <= 4);
    setAtEnd(
      el.scrollLeft >= el.scrollWidth - el.clientWidth - 4
    );
  };

  useEffect(() => {
    updateEdges();

    const el = trackRef.current;

    if (!el) return;

    el.addEventListener("scroll", updateEdges, {
      passive: true,
    });

    window.addEventListener("resize", updateEdges);

    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: dir * STEP,
      behavior: "smooth",
    });
  };

  return (
    <Section id="work">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="font-mono text-[13px] text-indigo">
              What we build
            </p>

            <h2 className="mt-3 max-w-[560px] text-display-md font-semibold text-balance">
              Three ways to move faster, one team to build it.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex gap-2">
            <button
              aria-label="Previous"
              disabled={atStart}
              onClick={() => scrollByCard(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line-strong bg-white text-ink-700 transition-all duration-200 hover:border-ink-900 hover:text-ink-900 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              aria-label="Next"
              disabled={atEnd}
              onClick={() => scrollByCard(1)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line-strong bg-white text-ink-700 transition-all duration-200 hover:border-ink-900 hover:text-ink-900 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          onMouseLeave={() => setActive(null)}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 pr-24 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {ITEMS.map((item, i) => {
            const Icon = item.icon;

            const isActive = active === i;
            const isDimmed = active !== null && !isActive;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setActive(i)}
                className="group flex shrink-0 snap-start flex-col rounded-xl border bg-white p-7 transition-all duration-300 ease-out"
                style={{
                  width: CARD_WIDTH,
                  borderColor: isActive
                    ? "#4B4CF0"
                    : "#D3D6DE",
                  opacity: isDimmed ? 0.6 : 1,
                  transform: isActive
                    ? "translateY(-4px) scale(1.01)"
                    : "translateY(0) scale(1)",
                  boxShadow: isActive
                    ? "0 20px 45px rgba(75,76,240,0.14)"
                    : "0 1px 2px rgba(10,11,14,0.04)",
                }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-300"
                  style={{
                    background: isActive
                      ? "#4B4CF0"
                      : "#ECEBFF",
                  }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.75}
                    style={{
                      color: isActive
                        ? "#FFFFFF"
                        : "#4B4CF0",
                    }}
                  />
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                  {item.description}
                </p>

                <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-[13px] text-ink-700"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                <span
                  className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-indigo transition-opacity duration-200"
                  style={{
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  Learn more <ArrowUpRight size={14} />
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}