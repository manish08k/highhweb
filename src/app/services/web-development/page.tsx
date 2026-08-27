import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Code2,
  Gauge,
  Layers3,
  Monitor,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Marketing Websites",
    description:
      "High-converting websites designed around your brand, product, and business goals.",
  },
  {
    icon: Layers3,
    title: "Custom Web Experiences",
    description:
      "Interactive, polished web experiences built specifically around your product and users.",
  },
  {
    icon: Code2,
    title: "Production Development",
    description:
      "Clean, scalable frontend development with the architecture needed to grow.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Fast-loading experiences optimized for real users, search, and modern devices.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your product, audience, goals, and what the website needs to accomplish.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We establish the visual direction, interaction patterns, structure, and responsive experience.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the approved direction into a fast, responsive, production-ready website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, refine, optimize, and help get the final experience live.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="mx-auto max-w-[1280px] px-6 pb-24 pt-12 lg:px-8 lg:pb-32 lg:pt-16">

          <Link
            href="/"
            className="mb-16 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950"
          >
            <ArrowLeft size={15} />
            Back to HIGHH
          </Link>

          <div className="max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-600">
              <Sparkles size={14} />
              Web Development
            </div>

            <h1 className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-8xl lg:leading-[0.95]">
              Websites that look
              <br />
              <span className="text-neutral-400">as good as they work.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500 lg:text-xl">
              We design and build modern websites that communicate clearly,
              feel premium, load fast, and give your business a strong digital
              presence.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#4F46E5] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(79,70,229,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#4338CA]"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/process"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
              >
                See our process
              </Link>
            </div>
          </div>

          {/* VISUAL */}
          <div className="mt-20 overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-950 shadow-[0_30px_100px_rgba(0,0,0,0.12)] lg:mt-28">
            <div className="flex h-12 items-center border-b border-white/10 px-5">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>

              <div className="mx-auto rounded-full bg-white/5 px-5 py-1.5 text-[11px] text-white/40">
                highh.studio
              </div>

              <div className="w-12" />
            </div>

            <div className="grid min-h-[420px] place-items-center px-8 py-20 text-center lg:min-h-[540px]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                  Digital experiences
                </p>

                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                  Built to make
                  <br />
                  <span className="text-white/35">an impression.</span>
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45">
                  A responsive, performance-focused experience designed around
                  your product and your users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                What we build
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                More than just a pretty website.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-neutral-200 p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                  >
                    <Icon size={22} strokeWidth={1.7} />

                    <h3 className="mt-7 text-lg font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              Built properly
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Everything your website needs to perform.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 border-t border-neutral-200 pt-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Responsive across every screen",
              "Fast page loads",
              "SEO-ready architecture",
              "Accessible interactions",
              "CMS integration",
              "Analytics integration",
              "Custom animations",
              "API integrations",
              "Production deployment",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-neutral-700"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-neutral-200">
                  <Check size={14} />
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              Our process
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              From idea to launch.
            </h2>
          </div>

          <div className="mt-16 grid border-t border-neutral-200 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="border-b border-neutral-200 py-8 md:border-r md:px-7 lg:border-b-0"
              >
                <span className="text-xs font-semibold text-neutral-400">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section>
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                Technology
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Modern stack.
                <br />
                <span className="text-neutral-400">
                  Production ready.
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-8 lg:px-8">
        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-[#090a0d] px-8 py-20 text-white sm:px-12 lg:px-20 lg:py-28">

          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/35">
              Have a project?
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              Let&apos;s build something
              <br />
              worth shipping.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/45">
              Tell us what you&apos;re building and we&apos;ll figure out the
              right way to bring it to life.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Start a project

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}