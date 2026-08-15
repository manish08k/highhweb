"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ProductWindow } from "@/components/product/ProductWindow";
import {
  Boxes,
  Bot,
  Workflow,
  Circle,
  CheckCircle2,
  Loader2,
  BarChart3,
  ShoppingCart,
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

const TABS = [
  { id: "products", label: "Products", icon: Boxes },
  { id: "agents", label: "AI agents", icon: Bot },
  { id: "automations", label: "Automations", icon: Workflow },
] as const;

type TabId = (typeof TABS)[number]["id"];

const panelMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: {
    duration: 0.35,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export function InteractiveDemo() {
  const [active, setActive] = useState<TabId>("products");

  return (
    <Section className="border-y border-line bg-surface-soft/60">
      <Container>
        <Reveal>
          <p className="font-mono text-[13px] text-indigo">Inside a build</p>

          <h2 className="mt-3 max-w-[560px] text-display-md font-semibold text-balance">
            What each engagement actually looks like.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {TABS.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                aria-pressed={active === tab.id}
                className={clsx(
                  "flex items-center gap-2 rounded-pill border px-4 py-2 text-[14px] font-medium transition-colors duration-200",
                  active === tab.id
                    ? "border-ink-900 bg-ink-900 text-white"
                    : "border-line-strong bg-white text-ink-700 hover:border-ink-900"
                )}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </Reveal>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {active === "products" && (
              <motion.div key="products" {...panelMotion}>
                <ProductsPanel />
              </motion.div>
            )}

            {active === "agents" && (
              <motion.div key="agents" {...panelMotion}>
                <AgentsPanel />
              </motion.div>
            )}

            {active === "automations" && (
              <motion.div key="automations" {...panelMotion}>
                <AutomationsPanel />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   PRODUCTS — 4 CARDS
========================================================= */

function ProductsPanel() {
  const products = [
    {
      title: "checkout-revamp",
      icon: ShoppingCart,
      status: "In progress",
      description: "A faster checkout experience built around real customer flows.",
      milestones: ["Scope & flows", "UI build", "API integration", "QA & handoff"],
      active: 2,
    },
    {
      title: "analytics-dashboard",
      icon: BarChart3,
      status: "Live",
      description: "A focused dashboard for understanding product performance.",
      milestones: ["Data model", "Dashboard UI", "Charts & filters", "Launch"],
      active: 3,
    },
    {
      title: "billing-portal",
      icon: CreditCard,
      status: "In progress",
      description: "A clean self-service billing experience for customers.",
      milestones: ["Requirements", "UI build", "Payments", "QA"],
      active: 1,
    },
    {
      title: "admin-platform",
      icon: LayoutDashboard,
      status: "Staging",
      description: "Internal tooling that keeps operations fast and predictable.",
      milestones: ["Architecture", "Core screens", "Permissions", "Handoff"],
      active: 2,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {products.map((product) => {
        const Icon = product.icon;

        return (
          <ProductWindow
            key={product.title}
            title={`highh-build — ${product.title}`}
          >
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-line-strong bg-surface-soft">
                    <Icon size={17} className="text-ink-700" />
                  </div>

                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink-400">
                      Product build
                    </p>
                    <p className="mt-1 text-[14px] font-medium text-ink-900">
                      {product.title}
                    </p>
                  </div>
                </div>

                <span className="rounded-pill border border-line bg-surface-soft px-2.5 py-1 font-mono text-[10px] text-ink-500">
                  {product.status}
                </span>
              </div>

              <p className="mt-5 text-[13px] leading-5 text-ink-500">
                {product.description}
              </p>

              <div className="mt-5 rounded-lg border border-line bg-surface-soft/60 p-3">
                <p className="px-1 font-mono text-[10px] uppercase tracking-wide text-ink-400">
                  Milestones
                </p>

                <div className="mt-2 grid grid-cols-2 gap-1">
                  {product.milestones.map((milestone, index) => {
                    const done = index < product.active;
                    const current = index === product.active;

                    return (
                      <div
                        key={milestone}
                        className={clsx(
                          "flex items-center gap-2 rounded-md px-2 py-2 text-[11px]",
                          current && "bg-white shadow-sm"
                        )}
                      >
                        {done ? (
                          <CheckCircle2
                            size={13}
                            className="shrink-0 text-indigo"
                          />
                        ) : current ? (
                          <Loader2
                            size={13}
                            className="shrink-0 animate-spin text-amber"
                          />
                        ) : (
                          <Circle
                            size={13}
                            className="shrink-0 text-ink-400"
                          />
                        )}

                        <span
                          className={
                            done
                              ? "truncate text-ink-500 line-through"
                              : "truncate text-ink-900"
                          }
                        >
                          {milestone}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="mt-4 text-[12px] leading-5 text-ink-500">
                Weekly builds land in staging so the team can click through
                the real product.
              </p>
            </div>
          </ProductWindow>
        );
      })}
    </div>
  );
}

/* =========================================================
   AI AGENTS — 4 CARDS
========================================================= */

function AgentsPanel() {
  const agents = [
    {
      title: "support-triage",
      icon: MessageSquare,
      status: "Running",
      description: "Handles repetitive support issues and escalates uncertain cases.",
      action: "Resolved 84% automatically",
    },
    {
      title: "security-reviewer",
      icon: ShieldCheck,
      status: "Running",
      description: "Reviews incoming changes and flags potential security risks.",
      action: "142 reviews completed",
    },
    {
      title: "sales-assistant",
      icon: Sparkles,
      status: "Running",
      description: "Qualifies leads, summarizes conversations, and prepares follow-ups.",
      action: "67 leads processed",
    },
    {
      title: "customer-success",
      icon: Users,
      status: "Learning",
      description: "Monitors customer signals and surfaces accounts that need attention.",
      action: "31 accounts monitored",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {agents.map((agent) => {
        const Icon = agent.icon;

        return (
          <ProductWindow
            key={agent.title}
            title={`highh-agent — ${agent.title}`}
          >
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-line-strong bg-surface-soft">
                    <Icon size={17} className="text-ink-700" />
                  </div>

                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink-400">
                      AI agent
                    </p>

                    <p className="mt-1 text-[14px] font-medium text-ink-900">
                      {agent.title}
                    </p>
                  </div>
                </div>

                <span className="flex items-center gap-1.5 rounded-pill border border-line bg-surface-soft px-2.5 py-1 font-mono text-[10px] text-ink-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo" />
                  {agent.status}
                </span>
              </div>

              <p className="mt-5 text-[13px] leading-5 text-ink-500">
                {agent.description}
              </p>

              <div className="mt-5 space-y-2">
                <AgentRow
                  from="Inbound"
                  text="New request received and classified."
                  tone="muted"
                />

                <AgentRow
                  from="Agent"
                  text="Analyzed context and selected the next action."
                  tone="indigo"
                />

                <AgentRow
                  from="Agent"
                  text={agent.action}
                  tone="indigo"
                />

                <AgentRow
                  from="Reviewer"
                  text="Human escalation available when confidence is low."
                  tone="amber"
                />
              </div>

              <p className="mt-4 text-[12px] leading-5 text-ink-500">
                Every action is logged with the reasoning behind it.
              </p>
            </div>
          </ProductWindow>
        );
      })}
    </div>
  );
}

function AgentRow({
  from,
  text,
  tone,
}: {
  from: string;
  text: string;
  tone: "muted" | "indigo" | "amber";
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-line bg-surface-soft/60 p-3">
      <span
        className={clsx(
          "mt-1 h-2 w-2 shrink-0 rounded-full",
          tone === "indigo" && "bg-indigo",
          tone === "amber" && "bg-amber",
          tone === "muted" && "bg-ink-400"
        )}
      />

      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-wide text-ink-400">
          {from}
        </p>

        <p className="mt-1 text-[12px] leading-5 text-ink-900">{text}</p>
      </div>
    </div>
  );
}

/* =========================================================
   AUTOMATIONS — 4 CARDS
========================================================= */

function AutomationsPanel() {
  const automations = [
    {
      title: "invoice-to-ledger",
      icon: FileText,
      steps: ["Stripe", "Parser", "Ledger", "Slack"],
      runs: "12,403",
      success: "99.4%",
    },
    {
      title: "lead-to-crm",
      icon: Users,
      steps: ["Form", "Enrich", "CRM", "Sales"],
      runs: "8,721",
      success: "98.9%",
    },
    {
      title: "email-to-ticket",
      icon: Mail,
      steps: ["Gmail", "Classify", "Ticket", "Team"],
      runs: "19,842",
      success: "99.7%",
    },
    {
      title: "data-sync",
      icon: Database,
      steps: ["Source", "Transform", "Database", "Report"],
      runs: "27,116",
      success: "99.8%",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {automations.map((automation) => {
        const Icon = automation.icon;

        return (
          <ProductWindow
            key={automation.title}
            title={`highh-flow — ${automation.title}`}
          >
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-line-strong bg-surface-soft">
                  <Icon size={17} className="text-ink-700" />
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-400">
                    Automation
                  </p>

                  <p className="mt-1 text-[14px] font-medium text-ink-900">
                    {automation.title}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {automation.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-2"
                  >
                    <div className="rounded-md border border-line-strong bg-surface-soft px-3 py-2 font-mono text-[11px] text-ink-900">
                      {step}
                    </div>

                    {index < automation.steps.length - 1 && (
                      <div className="h-px w-4 bg-line-strong md:w-6" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-line bg-surface-soft/60 p-4 font-mono text-[12px]">
                <div className="flex items-center gap-2">
                  <Zap size={13} className="text-indigo" />

                  <p className="text-ink-500">
                    <span className="text-indigo">{automation.runs}</span>{" "}
                    runs this month
                  </p>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-indigo" />

                  <p className="text-ink-500">
                    <span className="text-indigo">
                      {automation.success}
                    </span>{" "}
                    completed without intervention
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[12px] leading-5 text-ink-500">
                Failures notify the owning team instead of failing silently.
              </p>
            </div>
          </ProductWindow>
        );
      })}
    </div>
  );
}