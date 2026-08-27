import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { TrustBar } from "@/components/sections/TrustBar";

export function Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white pb-24 pt-28 sm:pt-32 md:pb-32 md:pt-36 lg:pb-36 lg:pt-40">
        {/* Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-white"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(700px 420px at 50% 35%, rgba(75,76,240,0.025), transparent 72%)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(420px 280px at 18% 20%, rgba(255,138,61,0.018), transparent 72%)",
            }}
          />
        </div>

        <Container className="relative">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse-soft" />

              <span className="text-[11px] font-medium tracking-[-0.01em]">
                Now building — products, agents, automations
              </span>
            </Badge>

            <h1
              className="
                mt-8
                max-w-[1100px]
                text-[52px]
                font-semibold
                leading-[0.96]
                tracking-[-0.055em]
                text-ink-900
                sm:text-[60px]
                md:text-[70px]
                lg:text-[78px]
                xl:text-[82px]
              "
            >
              We build the software
              <br />
              your team stops waiting on.
            </h1>

            <p
              className="
                mt-7
                max-w-[760px]
                text-[17px]
                leading-[1.5]
                tracking-[-0.012em]
                text-ink-500
                sm:text-[18px]
                md:text-[19px]
              "
            >
              HIGHH is a build studio for product teams. We design and ship
              production software, AI agents that do real work, and automations
              that remove the parts of your process nobody wants to own.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="#contact" size="md" withArrow>
                Start a project
              </Button>

              <Button href="#work" variant="secondary" size="md">
                See what we build
              </Button>
            </div>

            <p className="mt-5 max-w-[680px] text-[12px] font-medium leading-5 text-ink-400">
              Fixed-scope builds and embedded engagements — no discovery decks,
              no vaporware.
            </p>
          </div>
        </Container>

        <Container className="relative mt-20 sm:mt-22 md:mt-24 lg:mt-28">
          <HeroVisual />
        </Container>
      </section>

      <TrustBar />
    </>
  );
}