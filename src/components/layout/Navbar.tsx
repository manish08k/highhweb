"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const calLink =
    "https://cal.com/nalumachu-manish-jwiix3/highh-introductory-call";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="HIGHH Home"
        >
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-black shadow-sm">
            <img
              src="/highh-logo.png"
              alt="HIGHH"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="text-[20px] font-semibold tracking-[-0.03em] text-neutral-950">
            HIGHH
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">

          {/* WHAT WE BUILD */}
          <NavMenu
            label="What we build"
            items={[
              {
                label: "Web Development",
                href: "/services/web-development",
              },
              {
                label: "Web Applications",
                href: "/services/web-applications",
              },
              {
                label: "Mobile Apps",
                href: "/services/mobile-apps",
              },
              {
                label: "AI Agents",
                href: "/services/ai-agents",
              },
              {
                label: "Automation",
                href: "/services/automation",
              },
              {
                label: "Backend & APIs",
                href: "/services/backend-apis",
              },
              {
                label: "Motion Graphics",
                href: "/services/motion-graphics",
              },
            ]}
          />

          {/* HOW IT WORKS */}
          <NavMenu
            label="How it works"
            items={[
              {
                label: "Our Process",
                href: "/process",
              },
              {
                label: "How We Work",
                href: "/process",
              },
              {
                label: "Start a Project",
                href: "/contact",
              },
            ]}
          />

          {/* STACK */}
          <NavMenu
            label="Stack"
            items={[
              {
                label: "Frontend",
                href: "/stack#frontend",
              },
              {
                label: "Backend",
                href: "/stack#backend",
              },
              {
                label: "AI & Automation",
                href: "/stack#ai",
              },
              {
                label: "Infrastructure",
                href: "/stack#infrastructure",
              },
            ]}
          />

          {/* FAQ */}
          <Link
            href="/faq"
            className="text-[15px] font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950"
          >
            FAQ
          </Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-7 lg:flex">

          {/* BOOK A CALL */}
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950"
          >
            Book a call
          </a>

          {/* START A PROJECT */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#4F46E5] px-5 py-3 text-[15px] font-medium text-white shadow-[0_8px_30px_rgba(79,70,229,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4338CA] hover:shadow-[0_12px_35px_rgba(79,70,229,0.25)]"
          >
            <span>Start a project</span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* MOBILE MENU */}
        <MobileMenu calLink={calLink} />
      </div>
    </header>
  );
}

/* ============================================================
   DESKTOP NAV MENU
============================================================ */

type NavItem = {
  label: string;
  href: string;
};

type NavMenuProps = {
  label: string;
  items: NavItem[];
};

function NavMenu({ label, items }: NavMenuProps) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1.5 text-[15px] font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950"
      >
        {label}

        <ArrowDown
          size={14}
          strokeWidth={1.8}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      {/* DROPDOWN */}
      <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[250px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
        <div className="rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">

          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-colors duration-150 hover:bg-neutral-100 hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MOBILE MENU
============================================================ */

function MobileMenu({ calLink }: { calLink: string }) {
  return (
    <details className="relative lg:hidden">

      <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open menu</span>

        <div className="flex w-5 flex-col gap-1.5">
          <span className="h-[1.5px] w-full bg-neutral-900" />
          <span className="h-[1.5px] w-full bg-neutral-900" />
          <span className="h-[1.5px] w-full bg-neutral-900" />
        </div>
      </summary>

      <div className="absolute right-0 top-[54px] w-[300px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

        <div className="flex flex-col">

          {/* WHAT WE BUILD */}
          <MobileSection title="What we build">
            <Link href="/services/web-development">
              Web Development
            </Link>

            <Link href="/services/web-applications">
              Web Applications
            </Link>

            <Link href="/services/mobile-apps">
              Mobile Apps
            </Link>

            <Link href="/services/ai-agents">
              AI Agents
            </Link>

            <Link href="/services/automation">
              Automation
            </Link>

            <Link href="/services/backend-apis">
              Backend & APIs
            </Link>

            <Link href="/services/motion-graphics">
              Motion Graphics
            </Link>
          </MobileSection>

          {/* HOW IT WORKS */}
          <MobileSection title="How it works">
            <Link href="/process">
              Our Process
            </Link>

            <Link href="/process">
              How We Work
            </Link>

            <Link href="/contact">
              Start a Project
            </Link>
          </MobileSection>

          {/* STACK */}
          <MobileSection title="Stack">
            <Link href="/stack#frontend">
              Frontend
            </Link>

            <Link href="/stack#backend">
              Backend
            </Link>

            <Link href="/stack#ai">
              AI & Automation
            </Link>

            <Link href="/stack#infrastructure">
              Infrastructure
            </Link>
          </MobileSection>

          {/* FAQ */}
          <Link
            href="/faq"
            className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
          >
            FAQ
          </Link>

          <div className="my-2 h-px bg-neutral-200" />

          {/* BOOK A CALL */}
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
          >
            Book a call
          </a>

          {/* START A PROJECT */}
          <Link
            href="/contact"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-4 py-3 text-sm font-medium text-white"
          >
            Start a project
            <ArrowUpRight size={16} />
          </Link>

        </div>
      </div>
    </details>
  );
}

/* ============================================================
   MOBILE SECTION
============================================================ */

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group">

      <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100 [&::-webkit-details-marker]:hidden">
        {title}

        <ArrowDown
          size={14}
          className="transition-transform duration-200 group-open:rotate-180"
        />
      </summary>

      <div className="flex flex-col px-2 pb-2">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;

          return React.cloneElement(
            child as React.ReactElement<any>,
            {
              className:
                "rounded-lg px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950",
            }
          );
        })}
      </div>

    </details>
  );
}