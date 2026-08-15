import { Container } from "@/components/ui/Container";

const FOOTER_COLUMNS = [
  {
    title: "BUILD",
    links: [
      "Products",
      "AI agents",
      "Automations",
      "Web applications",
      "Mobile applications",
      "Internal tools",
    ],
  },
  {
    title: "STUDIO",
    links: [
      "How we work",
      "Process",
      "Technology",
      "Case studies",
      "FAQ",
      "Start a project",
    ],
  },
  {
    title: "RESOURCES",
    links: [
      "Engineering",
      "AI & automation",
      "Product insights",
      "Customer stories",
      "Documentation",
      "Contact",
    ],
  },
  {
    title: "COMPANY",
    links: [
      "About HIGHH",
      "Careers",
      "Blog",
      "Privacy",
      "Terms",
      "Book a call",
    ],
  },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#111216]">
        <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
      </span>

      <span className="text-[19px] font-semibold tracking-[-0.045em] text-[#111216]">
        HIGHH
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <Container>
        {/* Main footer */}
        <div className="py-20 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_2.85fr] lg:gap-20">
            {/* Brand / description */}

            <div className="max-w-[360px]">
              <BrandMark />

              <h2 className="mt-8 max-w-[340px] text-[30px] font-medium leading-[1.08] tracking-[-0.045em] text-[#111216]">
                Software that moves your business forward.
              </h2>

              <p className="mt-6 max-w-[320px] text-[15px] leading-[1.7] text-[#697181]">
                HIGHH builds products, AI agents, and automations for teams
                that want to move faster without adding unnecessary
                complexity.
              </p>

              <a
                href="#contact"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#5756F5]
                  px-5
                  py-3
                  text-[14px]
                  font-medium
                  text-white
                  shadow-[0_8px_25px_rgba(87,86,245,0.16)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#4C4BE8]
                  hover:shadow-[0_12px_30px_rgba(87,86,245,0.22)]
                "
              >
                Start a project

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Navigation */}

            <div
              className="
                grid
                grid-cols-2
                gap-x-8
                gap-y-12
                border-t
                border-[#E5E7EB]
                pt-10
                sm:grid-cols-4
                sm:border-t-0
                sm:pt-0
              "
            >
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title}>
                  <p
                    className="
                      font-mono
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#8C94A3]
                    "
                  >
                    {column.title}
                  </p>

                  <ul className="mt-5 space-y-3.5">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="
                            group
                            inline-flex
                            items-center
                            text-[14px]
                            leading-5
                            text-[#596171]
                            transition-colors
                            duration-200
                            hover:text-[#111216]
                          "
                        >
                          <span>{link}</span>

                          <span
                            className="
                              ml-1.5
                              translate-x-[-4px]
                              opacity-0
                              transition-all
                              duration-200
                              group-hover:translate-x-0
                              group-hover:opacity-100
                            "
                          >
                            →
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-[#E5E7EB]" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <BrandMark />

            <span className="hidden h-4 w-px bg-[#E1E4E9] sm:block" />

            <span className="text-[12px] text-[#9299A6]">
              © 2026 HIGHH. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[12px] text-[#858D9B] transition-colors hover:text-[#111216]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[12px] text-[#858D9B] transition-colors hover:text-[#111216]"
            >
              Terms
            </a>

            <a
              href="mailto:hello@highh.example"
              className="
                text-[12px]
                font-medium
                text-[#5756F5]
                transition-colors
                hover:text-[#4140D8]
              "
            >
              hello@highh.example
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}