"use client";

import Link from "next/link";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

type Video = {
  id: string;
  title: string;
  category: string;
};

/*
 * Add your real YouTube video IDs here.
 *
 * Example:
 * https://www.youtube.com/watch?v=ABC123XYZ
 *                         ^^^^^^^^^^
 *                         video ID
 */
const videos: Video[] = [
  {
    id: "wokDueURKeM",
    title: "Motion Graphics Showcase",
    category: "Motion",
  },
  {
    id: "QyDL5saNh3s",
    title: "Motion Showcase 02",
    category: "Motion",
  },
];

  // Add your next videos here:
  //
  // {
  //   id: "YOUR_VIDEO_ID",
  //   title: "Product Animation",
  //   category: "Product",
  // },
  //
  // {
  //   id: "YOUR_VIDEO_ID",
  //   title: "Brand Motion",
  //   category: "Brand",
  // },
  //
  // {
  //   id: "YOUR_VIDEO_ID",
  //   title: "Cinematic Visual",
  //   category: "Cinematic",
  // },


export default function MotionGraphicsPage() {
  const [expandedVideo, setExpandedVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (!expandedVideo) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedVideo(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [expandedVideo]);

  return (
    <main className="bg-white text-neutral-950">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="max-w-[1100px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
            Motion Graphics
          </p>

          <h1 className="max-w-[1050px] text-[48px] font-semibold leading-[0.96] tracking-[-0.06em] sm:text-[64px] lg:text-[82px]">
            Motion that makes your product impossible to ignore.
          </h1>

          <p className="mt-7 max-w-[650px] text-lg leading-8 text-neutral-500 lg:text-xl">
            Product animation, motion graphics, brand visuals, and cinematic
            experiences.
          </p>

          <div className="mt-9">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-neutral-800"
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

      {/* =========================================================
          VIDEO SHOWCASE
      ========================================================= */}

      <section
        id="work"
        className="border-y border-neutral-200 bg-neutral-50"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          {/* Section heading */}
          <div className="mb-10 flex items-end justify-between gap-8">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
                Selected Work
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Motion in action.
              </h2>
            </div>

            <p className="hidden max-w-[360px] text-right text-sm leading-6 text-neutral-400 md:block">
              A collection of motion and visual work.
            </p>
          </div>

          {/* =====================================================
              VIDEO GRID

              1 column  -> mobile
              2 columns -> tablet
              3 columns -> desktop
          ===================================================== */}

          {videos.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {videos.map((video) => (
                <article
                  key={video.id}
                  className="group overflow-hidden rounded-[24px] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  {/* Video */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=1&rel=0&playsinline=1&iv_load_policy=3&fs=0`}
                      title={video.title}
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />

                    {/* Expand button */}
                    <button
                      type="button"
                      aria-label={`Expand ${video.title}`}
                      onClick={() => setExpandedVideo(video)}
                      className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-black group-hover:opacity-100"
                    >
                      <Maximize2 size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[24px] border border-dashed border-neutral-300 bg-white px-6 py-20 text-center">
              <p className="text-sm text-neutral-400">
                Add YouTube video IDs to the videos array.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          SHORT SERVICES SECTION
      ========================================================= */}

      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
              What We Create
            </p>

            <h2 className="max-w-[520px] text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
              Designed to move.
            </h2>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            <Service
              number="01"
              title="Product Animation"
              text="Software, products, and interfaces brought to life."
            />

            <Service
              number="02"
              title="Motion Graphics"
              text="Visual systems for launches, campaigns, and digital experiences."
            />

            <Service
              number="03"
              title="Brand Motion"
              text="Expressive motion built around your visual identity."
            />

            <Service
              number="04"
              title="Cinematic Visuals"
              text="High-impact visuals for digital products and campaigns."
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="mx-auto max-w-[1400px] px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="rounded-[32px] bg-neutral-950 px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
            Have a project in mind?
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-[800px] text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Let&apos;s make it move.
            </h2>

            <Link
              href="/#contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-neutral-950 transition-transform hover:-translate-y-0.5"
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

      {/* =========================================================
          EXPANDED VIDEO
      ========================================================= */}

      {expandedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={expandedVideo.title}
          onMouseDown={() => setExpandedVideo(null)}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setExpandedVideo(null)}
            className="absolute right-5 top-5 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <X size={21} />
          </button>

          <div
            className="w-full max-w-[1280px] overflow-hidden rounded-[20px] bg-black shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${expandedVideo.id}?autoplay=1&rel=0&playsinline=1`}
                title={expandedVideo.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* ===============================================================
   SERVICE
================================================================ */

function Service({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr] sm:gap-8">
      <span className="text-xs font-medium text-neutral-400">{number}</span>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <h3 className="text-xl font-semibold tracking-[-0.025em]">
          {title}
        </h3>

        <p className="max-w-[480px] text-sm leading-6 text-neutral-500">
          {text}
        </p>
      </div>
    </div>
  );
}