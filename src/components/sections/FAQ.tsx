"use client";

import Image from "next/image";

type ShowcaseCard = {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  width: string;
};

const TOP_ROW: ShowcaseCard[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90",
    eyebrow: "HIGHH / PRODUCT",
    title: "Products built to move.",
    description: "Digital experiences designed around real users.",
    width: "w-[430px] sm:w-[540px] lg:w-[640px]",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=90",
    eyebrow: "AI SYSTEMS",
    title: "Intelligence that works.",
    description: "Agents connected to the systems your team already uses.",
    width: "w-[360px] sm:w-[440px] lg:w-[510px]",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
    eyebrow: "AUTOMATION",
    title: "Less repetitive work.",
    description: "Workflows that keep operations moving.",
    width: "w-[430px] sm:w-[540px] lg:w-[640px]",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=90",
    eyebrow: "ENGINEERING",
    title: "Built for production.",
    description: "Reliable foundations without unnecessary complexity.",
    width: "w-[360px] sm:w-[440px] lg:w-[510px]",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90",
    eyebrow: "STUDIO",
    title: "From idea to launch.",
    description: "A focused team building alongside yours.",
    width: "w-[430px] sm:w-[540px] lg:w-[620px]",
  },
];

const BOTTOM_ROW: ShowcaseCard[] = [
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=90",
    eyebrow: "OPERATIONS",
    title: "Systems that scale.",
    description: "Automation designed around how your team actually works.",
    width: "w-[440px] sm:w-[560px] lg:w-[660px]",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=90",
    eyebrow: "INTERFACES",
    title: "Simple on the surface.",
    description: "Complex systems made easy to use.",
    width: "w-[360px] sm:w-[440px] lg:w-[510px]",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=90",
    eyebrow: "COLLABORATION",
    title: "Built with your team.",
    description: "Clear communication from first idea to final release.",
    width: "w-[430px] sm:w-[540px] lg:w-[630px]",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=90",
    eyebrow: "AI / AUTOMATION",
    title: "Work that runs itself.",
    description: "Practical AI connected to real business processes.",
    width: "w-[360px] sm:w-[450px] lg:w-[520px]",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=90",
    eyebrow: "HIGHH",
    title: "Engineering with intent.",
    description: "Every detail has a reason.",
    width: "w-[430px] sm:w-[540px] lg:w-[620px]",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.2 9.8L9.8 2.2M3.4 2.2H9.8V8.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShowcaseCard({ card }: { card: ShowcaseCard }) {
  return (
    <article
      className={`
        group relative h-[245px] shrink-0 overflow-hidden
        rounded-[24px]
        border border-[#dfe3e8]
        bg-[#eef0f3]
        shadow-[0_16px_50px_rgba(15,23,42,0.10)]
        sm:h-[285px]
        lg:h-[320px]
        ${card.width}
      `}
    >
      <Image
        src={card.image}
        alt={`${card.title} — ${card.description}`}
        fill
        sizes="(max-width: 640px) 430px, (max-width: 1024px) 540px, 640px"
        draggable={false}
        className="
          object-cover
          transition-transform
          duration-[1200ms]
          ease-out
          group-hover:scale-[1.055]
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-black/5
        "
      />

      <div
        className="
          absolute left-5 right-5 top-5
          flex items-center justify-between
          sm:left-6 sm:right-6 sm:top-6
        "
      >
        <div className="flex items-center gap-2.5">
          <span
            className="
              h-[7px] w-[7px]
              rounded-full
              bg-[#6366f1]
              shadow-[0_0_14px_rgba(99,102,241,0.8)]
            "
          />

          <span
            className="
              font-mono
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/90
              sm:text-[10px]
            "
          >
            {card.eyebrow}
          </span>
        </div>

        <span
          className="
            flex h-8 w-8
            items-center justify-center
            rounded-full
            border border-white/25
            bg-black/20
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:bg-white
            group-hover:text-black
          "
        >
          <ArrowIcon />
        </span>
      </div>

      <div
        className="
          absolute bottom-5 left-5 right-5
          sm:bottom-6 sm:left-6 sm:right-6
        "
      >
        <h3
          className="
            max-w-[480px]
            text-[22px]
            font-medium
            leading-[1.05]
            tracking-[-0.035em]
            text-white
            sm:text-[26px]
            lg:text-[29px]
          "
        >
          {card.title}
        </h3>

        <p
          className="
            mt-2
            max-w-[460px]
            text-[12px]
            leading-[1.55]
            text-white/75
            sm:text-[13px]
            lg:text-[14px]
          "
        >
          {card.description}
        </p>
      </div>
    </article>
  );
}

function MovingRow({
  cards,
  reverse = false,
}: {
  cards: ShowcaseCard[];
  reverse?: boolean;
}) {
  const items = [...cards, ...cards];

  return (
    <div className="relative overflow-hidden">
      <div
        className={
          reverse
            ? "highh-row highh-row-reverse"
            : "highh-row highh-row-forward"
        }
      >
        {items.map((card, index) => (
          <ShowcaseCard
            key={`${card.id}-${index}`}
            card={card}
          />
        ))}
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Work showcase"
      className="
        relative
        overflow-hidden
        border-t
        border-[#e5e7eb]
        bg-white
      "
    >
      <style>{`
        .highh-row {
          display: flex;
          width: max-content;
          gap: 20px;
          padding: 10px 0;
          will-change: transform;
        }

        .highh-row-forward {
          animation: highh-forward 44s linear infinite;
        }

        .highh-row-reverse {
          animation: highh-reverse 50s linear infinite;
        }

        @keyframes highh-forward {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes highh-reverse {
          from {
            transform: translate3d(-50%, 0, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (max-width: 640px) {
          .highh-row {
            gap: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .highh-row-forward,
          .highh-row-reverse {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* HEADER */}
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-6
          py-24
          sm:px-8
          sm:py-28
          lg:px-10
          lg:py-32
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            md:grid-cols-[0.7fr_2fr]
            md:gap-16
            lg:gap-24
          "
        >
          <div className="pt-2">
            <div className="flex items-center gap-2.5">
              <span
                className="
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#5b5cf6]
                  shadow-[0_0_14px_rgba(91,92,246,0.6)]
                "
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#5b5cf6]
                "
              >
                HIGHH / WORK
              </span>
            </div>
          </div>

          <div>
            <h2
              className="
                max-w-[850px]
                text-[44px]
                font-medium
                leading-[0.96]
                tracking-[-0.065em]
                text-[#101114]
                sm:text-[54px]
                md:text-[64px]
                lg:text-[74px]
              "
            >
              Ideas become
              <br />
              things worth using.
            </h2>

            <p
              className="
                mt-7
                max-w-[680px]
                text-[16px]
                leading-[1.65]
                text-[#737b89]
                sm:text-[17px]
                lg:text-[18px]
              "
            >
              Products, AI systems, and automations built with the same
              attention to detail from the first idea to production.
            </p>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="relative pb-24 sm:pb-28 lg:pb-32">
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-16
            bg-gradient-to-r
            from-white
            to-transparent
            sm:w-28
            lg:w-44
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-16
            bg-gradient-to-l
            from-white
            to-transparent
            sm:w-28
            lg:w-44
          "
        />

        <MovingRow cards={TOP_ROW} />

        <div className="mt-5 sm:mt-6">
          <MovingRow cards={BOTTOM_ROW} reverse />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-6
          sm:px-8
          lg:px-10
        "
      >
        <div className="border-t border-[#e2e5ea]">
          <div
            className="
              flex
              flex-col
              gap-5
              py-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span
              className="
                font-mono
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#9aa1ae]
              "
            >
              HIGHH / BUILDING IN PUBLIC
            </span>

            <a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[13px]
                font-medium
                text-[#20232a]
              "
            >
              Start a project

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;