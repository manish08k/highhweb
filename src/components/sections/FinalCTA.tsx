import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <Section id="contact" className="border-t border-line">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-ink-900 px-8 py-16 text-center md:px-16 md:py-22">
          <div className="pointer-events-none absolute inset-0 dark-glow opacity-70" />
          <div className="relative">
            <Reveal>
              <h2 className="mx-auto max-w-[600px] text-display-lg font-semibold text-balance text-dark-ink">
                Tell us what needs building.
              </h2>
              <p className="mx-auto mt-5 max-w-[440px] text-[16px] text-dark-muted">
                A 30-minute call is enough for us to tell you if it&rsquo;s a fit — and
                roughly what it&rsquo;ll take to ship.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href="mailto:hello@highh.example" variant="dark" withArrow>
                  Start a project
                </Button>
                <Button
                  href="mailto:hello@highh.example"
                  variant="ghost"
                  className="text-dark-muted hover:text-dark-ink"
                >
                  hello@highh.example
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
