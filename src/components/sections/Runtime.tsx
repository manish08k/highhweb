"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const REVIEW_ONE: Testimonial = {
  id: "review-one",
  quote:
    "HIGHH helped us turn an idea into something our team could actually use.",
  name: "Alex Morgan",
  role: "Founder",
  initials: "AM",
};

const REVIEW_TWO: Testimonial = {
  id: "review-two",
  quote:
    "The team moved incredibly quickly while still paying attention to the details that matter.",
  name: "Sarah Chen",
  role: "Product Lead",
  initials: "SC",
};

const REVIEW_THREE: Testimonial = {
  id: "review-three",
  quote:
    "We needed something production-ready, not another prototype. HIGHH understood that immediately.",
  name: "Daniel Reed",
  role: "Founder",
  initials: "DR",
};

const REVIEW_FOUR: Testimonial = {
  id: "review-four",
  quote:
    "The automation removed a huge amount of repetitive work and gave our team more time to focus on important decisions.",
  name: "Priya Shah",
  role: "Operations",
  initials: "PS",
};

const REVIEW_FIVE: Testimonial = {
  id: "review-five",
  quote:
    "Every part of the product felt intentional. The result was simple, fast, and ready for real users.",
  name: "Michael Carter",
  role: "Product Manager",
  initials: "MC",
};

const REVIEW_SIX: Testimonial = {
  id: "review-six",
  quote:
    "HIGHH gave us the engineering speed of a larger team without adding unnecessary process.",
  name: "Emma Wilson",
  role: "Co-founder",
  initials: "EW",
};

const LEFT_REVIEWS: Testimonial[] = [
  REVIEW_ONE,
  REVIEW_THREE,
  REVIEW_FIVE,
];

const RIGHT_REVIEWS: Testimonial[] = [
  REVIEW_TWO,
  REVIEW_FOUR,
  REVIEW_SIX,
];

function Avatar({
  initials,
  small = false,
}: {
  initials: string;
  small?: boolean;
}) {
  return (
    <div
      className={[
        "flex shrink-0 items-center justify-center rounded-full",
        "border border-slate-200 bg-slate-100",
        "font-semibold text-slate-500",
        small ? "h-9 w-9 text-[10px]" : "h-10 w-10 text-[11px]",
      ].join(" ")}
    >
      {initials}
    </div>
  );
}

function ReviewCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <article
      className="
        w-full
        shrink-0
        rounded-[18px]
        border
        border-slate-200
        bg-white
        p-5
        shadow-[0_8px_30px_rgba(15,23,42,0.045)]
      "
    >
      <p
        className="
          text-[14px]
          leading-[1.65]
          tracking-[-0.012em]
          text-slate-800
        "
      >
        {testimonial.quote}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Avatar initials={testimonial.initials} small />

        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-slate-900">
            {testimonial.name}
          </p>

          <p className="mt-0.5 truncate text-[11px] text-slate-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

/*
 * Continuous marquee.
 *
 * The list is duplicated exactly once.
 * We animate by 50%, meaning the second copy takes
 * the exact position of the first copy.
 *
 * No array indexing is used.
 */
function MovingColumn({
  testimonials,
  direction,
}: {
  testimonials: Testimonial[];
  direction: "up" | "down";
}) {
  const items = testimonials.concat(testimonials);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <motion.div
        className="flex flex-col gap-4"
        initial={{
          y: direction === "up" ? "0%" : "-50%",
        }}
        animate={{
          y: direction === "up" ? "-50%" : "0%",
        }}
        transition={{
          duration: 24,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {items.map((testimonial, index) => (
          <ReviewCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
}

function FeaturedTestimonial() {
  const [active, setActive] = useState<Testimonial>(REVIEW_ONE);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => {
        if (current.id === REVIEW_ONE.id) {
          return REVIEW_TWO;
        }

        if (current.id === REVIEW_TWO.id) {
          return REVIEW_THREE;
        }

        if (current.id === REVIEW_THREE.id) {
          return REVIEW_FOUR;
        }

        if (current.id === REVIEW_FOUR.id) {
          return REVIEW_FIVE;
        }

        if (current.id === REVIEW_FIVE.id) {
          return REVIEW_SIX;
        }

        return REVIEW_ONE;
      });
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="mt-14 border-t border-slate-200 pt-10">
      <div
        className="
          select-none
          font-serif
          text-[70px]
          leading-[0.65]
          tracking-[-0.08em]
          text-slate-200
        "
      >
        “
      </div>

      <div className="relative mt-7 min-h-[165px]">
        <motion.div
          key={active.id}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <blockquote
            className="
              max-w-[500px]
              text-[17px]
              leading-[1.65]
              tracking-[-0.015em]
              text-slate-800
            "
          >
            {active.quote}
          </blockquote>

          <div className="mt-7 flex items-center gap-3">
            <Avatar initials={active.initials} />

            <div>
              <p className="text-[14px] font-semibold text-slate-900">
                {active.name}
              </p>

              <p className="mt-0.5 text-[12px] text-slate-500">
                {active.role}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Runtime() {
  return (
    <Section
      id="trust"
      className="relative overflow-hidden bg-white py-28 md:py-36"
    >
      <Container>
        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-[0.78fr_1.22fr]
            lg:items-center
          "
        >
          {/* LEFT CONTENT */}

          <div className="relative z-10 lg:pr-10">
            <Reveal>
              <p
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#F08A3C]
                "
              >
                Trusted by builders
              </p>

              <h2
                className="
                  mt-5
                  max-w-[520px]
                  font-display
                  text-[clamp(3rem,4.8vw,5rem)]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.06em]
                  text-[#0A0B0E]
                "
              >
                Trusted around the world.
              </h2>

              <p
                className="
                  mt-6
                  max-w-[470px]
                  text-[16px]
                  leading-[1.7]
                  tracking-[-0.012em]
                  text-slate-500
                "
              >
                Join the teams and builders using HIGHH to ship products,
                automate operations, and put AI to work.
              </p>

              <a
                href="#contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  rounded-xl
                  bg-[#5556E8]
                  px-5
                  py-3
                  text-[14px]
                  font-medium
                  text-white
                  shadow-[0_8px_25px_rgba(85,86,232,0.18)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#4D4EDB]
                "
              >
                Start a project
                <span className="ml-2 text-[16px]">→</span>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <FeaturedTestimonial />
            </Reveal>
          </div>

          {/* RIGHT MOVING REVIEWS */}

          <Reveal delay={0.1}>
            <div className="relative">
              {/* subtle dotted field */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[-35px]
                  opacity-45
                "
                style={{
                  backgroundImage:
                    "radial-gradient(#CBD5E1 0.75px, transparent 0.75px)",
                  backgroundSize: "7px 7px",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}
              />

              <div className="relative">
                {/* section label */}

                <div className="mb-5 flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                    <span
                      className="
                        font-mono
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-slate-400
                      "
                    >
                      HIGHH · CUSTOMER STORIES
                    </span>
                  </div>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.1em]
                      text-slate-300
                    "
                  >
                    live
                  </span>
                </div>

                {/* EXACTLY TWO OPPOSING COLUMNS */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                  "
                >
                  {/* LEFT → UP */}

                  <MovingColumn
                    testimonials={LEFT_REVIEWS}
                    direction="up"
                  />

                  {/* RIGHT → DOWN */}

                  <MovingColumn
                    testimonials={RIGHT_REVIEWS}
                    direction="down"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}