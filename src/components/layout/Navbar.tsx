"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type MenuType = "build" | "process" | "stack";

type MenuItem = [label: string, href: string];

type MenuColumn = {
  title: string;
  items: MenuItem[];
};

const BUILD_COLUMNS: MenuColumn[] = [
  {
    title: "BUILD",
    items: [
      ["Products", "#work"],
      ["Web applications", "#work"],
      ["Mobile applications", "#work"],
      ["Internal tools", "#work"],
    ],
  },
  {
    title: "AI & AUTOMATION",
    items: [
      ["AI agents", "#work"],
      ["Automations", "#work"],
      ["AI workflows", "#work"],
      ["Tool integrations", "#work"],
    ],
  },
  {
    title: "STUDIO",
    items: [
      ["Design systems", "#work"],
      ["Product strategy", "#work"],
      ["Production builds", "#work"],
      ["Custom software", "#work"],
    ],
  },
  {
    title: "MORE",
    items: [
      ["Case studies", "#work"],
      ["Customer stories", "#work"],
      ["Documentation", "#stack"],
      ["Contact", "#contact"],
    ],
  },
];

const PROCESS_COLUMNS: MenuColumn[] = [
  {
    title: "STUDIO",
    items: [
      ["How we work", "#process"],
      ["Process", "#process"],
      ["Technology", "#stack"],
    ],
  },
  {
    title: "DELIVERY",
    items: [
      ["Fixed-scope builds", "#process"],
      ["Embedded engagements", "#process"],
      ["Production handoff", "#process"],
    ],
  },
  {
    title: "RESOURCES",
    items: [
      ["Engineering", "#stack"],
      ["Product insights", "#work"],
      ["Customer stories", "#work"],
    ],
  },
];

const STACK_COLUMNS: MenuColumn[] = [
  {
    title: "FRONTEND",
    items: [
      ["Next.js", "#stack"],
      ["React", "#stack"],
      ["TypeScript", "#stack"],
      ["Tailwind CSS", "#stack"],
    ],
  },
  {
    title: "BACKEND",
    items: [
      ["Node.js", "#stack"],
      ["Python", "#stack"],
      ["APIs", "#stack"],
      ["Databases", "#stack"],
    ],
  },
  {
    title: "AI",
    items: [
      ["LLM applications", "#stack"],
      ["AI agents", "#stack"],
      ["RAG", "#stack"],
      ["Automation", "#stack"],
    ],
  },
];

const MENUS: Record<MenuType, MenuColumn[]> = {
  build: BUILD_COLUMNS,
  process: PROCESS_COLUMNS,
  stack: STACK_COLUMNS,
};

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuType | null>(null);
  const [closeTimer, setCloseTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const cancelClose = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
  };

  const open = (menu: MenuType) => {
    cancelClose();
    setOpenMenu(menu);
  };

  const scheduleClose = () => {
    cancelClose();

    const timer = setTimeout(() => {
      setOpenMenu(null);
    }, 120);

    setCloseTimer(timer);
  };

  const closeImmediately = () => {
    cancelClose();
    setOpenMenu(null);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      onMouseLeave={scheduleClose}
    >
      {/* NAVBAR */}
      <div className="border-b border-line/80 bg-white/96 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center px-6 md:px-10 lg:px-12">
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeImmediately}
            className="flex shrink-0 items-center gap-2.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#0A0B0E]">
              <span className="h-2 w-2 rounded-full bg-[#FF6B00]" />
            </span>

            <span className="text-[20px] font-semibold tracking-[-0.045em] text-ink-900">
              HIGHH
            </span>
          </Link>

          {/* CENTER NAVIGATION */}
          <nav className="mx-auto hidden h-full items-center lg:flex">
            <NavMenuButton
              label="What we build"
              menu="build"
              openMenu={openMenu}
              onOpen={open}
            />

            <NavMenuButton
              label="How it works"
              menu="process"
              openMenu={openMenu}
              onOpen={open}
            />

            <NavMenuButton
              label="Stack"
              menu="stack"
              openMenu={openMenu}
              onOpen={open}
            />

            <Link
              href="#faq"
              onClick={closeImmediately}
              className="flex h-10 items-center rounded-lg px-4 text-[15px] font-medium tracking-[-0.015em] text-ink-700 transition-colors duration-150 hover:bg-ink-50 hover:text-ink-900"
            >
              FAQ
            </Link>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="ml-auto hidden items-center gap-6 lg:flex">
            <Link
              href="#contact"
              onClick={closeImmediately}
              className="text-[15px] font-medium tracking-[-0.015em] text-ink-700 transition-colors duration-150 hover:text-ink-900"
            >
              Book a call
            </Link>

            <Link
              href="#contact"
              onClick={closeImmediately}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#4B4CF0] px-5 text-[15px] font-medium tracking-[-0.015em] text-white shadow-[0_8px_24px_rgba(75,76,240,0.18)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#4243DD]"
            >
              Start a project
              <ArrowUpRight size={17} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>

      {/* MEGA MENU */}
      <div
        className={`overflow-hidden border-b border-line/80 bg-white shadow-[0_18px_45px_rgba(10,11,14,0.08)] transition-[max-height,opacity,transform] duration-200 ease-out ${
          openMenu
            ? "max-h-[520px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-1 opacity-0"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {openMenu && (
          <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-10 lg:px-12">
            {/* COLUMNS */}
            <div
              className={`grid gap-x-10 ${
                MENUS[openMenu].length === 3
                  ? "grid-cols-3"
                  : "grid-cols-4"
              }`}
            >
              {MENUS[openMenu].map((column) => (
                <div key={column.title}>
                  <p className="mb-5 font-mono text-[11px] font-semibold tracking-[0.22em] text-ink-400">
                    {column.title}
                  </p>

                  <div className="flex flex-col">
                    {column.items.map(([label, href]) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={closeImmediately}
                        className="group flex min-h-[42px] items-center justify-between rounded-lg px-2 text-[15px] font-medium tracking-[-0.015em] text-ink-700 transition-all duration-150 hover:bg-ink-50 hover:text-ink-900"
                      >
                        <span>{label}</span>

                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.8}
                          className="translate-x-[-3px] opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-50"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM FEATURE */}
            <div className="mt-7 border-t border-line pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[14px] font-semibold tracking-[-0.01em] text-ink-900">
                    Need something custom?
                  </p>

                  <p className="mt-1 text-[13px] leading-5 text-ink-400">
                    Tell us what you&apos;re building and we&apos;ll figure out
                    the fastest path to production.
                  </p>
                </div>

                <Link
                  href="#contact"
                  onClick={closeImmediately}
                  className="group flex items-center gap-2 text-[14px] font-semibold text-[#4B4CF0]"
                >
                  Start a project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavMenuButton({
  label,
  menu,
  openMenu,
  onOpen,
}: {
  label: string;
  menu: MenuType;
  openMenu: MenuType | null;
  onOpen: (menu: MenuType) => void;
}) {
  const active = openMenu === menu;

  return (
    <button
      type="button"
      onMouseEnter={() => onOpen(menu)}
      onFocus={() => onOpen(menu)}
      onClick={() => onOpen(menu)}
      className={`flex h-10 items-center gap-1.5 rounded-lg px-4 text-[15px] font-medium tracking-[-0.015em] transition-colors duration-150 ${
        active
          ? "bg-ink-50 text-ink-900"
          : "text-ink-700 hover:bg-ink-50 hover:text-ink-900"
      }`}
    >
      {label}

      <ChevronDown
        size={15}
        strokeWidth={1.8}
        className={`transition-transform duration-200 ${
          active ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}