"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Maximize2,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Video = {
  id: string;
  title: string;
  category: string;
  description?: string;
};

const videos: Video[] = [
  {
    id: "fsuQV10bFQo",
    title: "Edit 2",
    category: "Motion",
    description: "A curated motion and visual design showcase.",
  },
  {
    id: "wokDueURKeM",
    title: "Edit 3",
    category: "Motion",
    description: "Another motion and visual design showcase.",
  },
];

  // Add more videos here — just copy this block and fill in a real YouTube ID
  // {
  //   id: "YOUR_VIDEO_ID",
  //   title: "Product Animation",
  //   category: "Product",
  //   description: "Product-focused motion design.",
  // },


export default function MotionGraphicsPage() {
  const [expandedVideo, setExpandedVideo] = useState<Video | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(videos.map((v) => v.category)));
    return ["All", ...unique];
  }, []);

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All") return videos;
    return videos.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

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
    <main className="min-h-screen bg-white text-neutral-950 selection:bg-neutral-950 selection:text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[18%] h-px w-[84%] bg-neutral-200" />
          <div className="absolute left-[8%] top-[18%] h-[500px] w-px bg-neutral-200" />
          <div className="absolute right-[8%] top-[18%] h-[500px] w-px bg-neutral-200" />

          <div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-neutral-950" />
          <div className="absolute right-[8%] top-[18%] h-2 w-2 rounded-full bg-neutral-950" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1500px] flex-col justify-between px-6 pb-12 pt-10 sm:px-8 lg:px-12 lg:pb-16 lg:pt-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-neutral-950" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500 sm:text-xs">
                Motion Graphics
              </p>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-neutral-400 sm:block">
              Selected Work / 2026
            </span>
          </div>

          <div className="relative z-10 mt-24">
            <p className="mb-6 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base">
              Motion design for products, brands, launches, and digital
              experiences.
            </p>

            <h1 className="max-w-[1250px] text-[52px] font-semibold leading-[0.9] tracking-[-0.075em] sm:text-[76px] md:text-[94px] lg:text-[118px] xl:text-[132px]">
              Motion that
              <br />
              <span className="text-neutral-300">demands attention.</span>
            </h1>

            <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/#contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200">
                  <ArrowDown size={14} />
                </span>
                <span>Explore work</span>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-8 border-t border-neutral-200 pt-6 sm:grid-cols-3">
            <HeroStat number="01" text="Product Animation" />
            <HeroStat number="02" text="Motion Systems" />
            <HeroStat number="03" text="Cinematic Visuals" />
          </div>
        </div>
      </section>

      {/* =========================================================
          VIDEO SHOWCASE
      ========================================================= */}

      <section id="work" className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-10 grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400 sm:text-xs">
                Selected Work
              </p>

              <h2 className="text-[48px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[68px] lg:text-[84px]">
                Motion
                <br />
                <span className="text-neutral-300">in action.</span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-md text-sm leading-7 text-neutral-500 lg:ml-auto lg:text-right">
                A collection of motion experiments, product animations,
                cinematic visuals, and brand-driven movement.
              </p>
            </div>
          </div>

          {/* Category filter */}
          {categories.length > 2 && (
            <div className="mb-10 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-all duration-300 ${
                    activeCategory === cat
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-300 bg-white text-neutral-500 hover:border-neutral-950 hover:text-neutral-950"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Video grid */}
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {filteredVideos.map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  index={index}
                  activeVideo={activeVideo}
                  setActiveVideo={setActiveVideo}
                  onExpand={() => setExpandedVideo(video)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[32px] border border-dashed border-neutral-300 bg-white px-6 py-24 text-center">
              <p className="text-sm text-neutral-400">
                Add YouTube video IDs to the videos array.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400 sm:text-xs">
              What I Create
            </p>

            <h2 className="max-w-xl text-[48px] font-semibold leading-[0.94] tracking-[-0.065em] sm:text-[68px]">
              Designed
              <br />
              <span className="text-neutral-300">to move.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-neutral-500">
              Motion isn&apos;t decoration. It gives products personality,
              communicates ideas faster, and creates memorable experiences.
            </p>
          </div>

          <div className="border-y border-neutral-200">
            <Service
              number="01"
              title="Product Animation"
              text="Software, products, interfaces, and digital experiences brought to life through precise motion."
            />
            <Service
              number="02"
              title="Motion Graphics"
              text="Visual systems for launches, campaigns, presentations, social content, and digital experiences."
            />
            <Service
              number="03"
              title="Brand Motion"
              text="Expressive motion systems built around your visual identity, typography, logo, and brand language."
            />
            <Service
              number="04"
              title="Cinematic Visuals"
              text="High-impact visuals designed for products, campaigns, announcements, and premium digital experiences."
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="border-y border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                Process
              </p>

              <h2 className="text-[48px] font-semibold leading-[0.94] tracking-[-0.065em] sm:text-[68px]">
                From idea
                <br />
                <span className="text-white/30">to motion.</span>
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              <ProcessStep
                number="01"
                title="Understand"
                text="We define the idea, objective, audience, and visual direction."
              />
              <ProcessStep
                number="02"
                title="Design"
                text="Frames, compositions, typography, and visual language are developed before motion."
              />
              <ProcessStep
                number="03"
                title="Animate"
                text="Every movement is carefully timed, layered, and refined to communicate clearly."
              />
              <ProcessStep
                number="04"
                title="Deliver"
                text="Final motion is polished and prepared for the platforms where it needs to perform."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BIG STATEMENT
      ========================================================= */}

      <section className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="border-b border-neutral-200 pb-20">
          <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400 sm:text-xs">
            The Philosophy
          </p>

          <h2 className="max-w-[1200px] text-[42px] font-semibold leading-[0.98] tracking-[-0.06em] sm:text-[62px] lg:text-[82px]">
            Good motion explains.
            <br />
            Great motion
            <span className="text-neutral-300"> makes people feel.</span>
          </h2>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="mx-auto max-w-[1500px] px-6 pb-10 sm:px-8 lg:px-12 lg:pb-14">
        <div className="relative overflow-hidden rounded-[32px] bg-neutral-950 px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[45%] opacity-10">
            <div className="absolute right-[15%] top-[-20%] h-[140%] w-px rotate-[25deg] bg-white" />
            <div className="absolute right-[30%] top-[-20%] h-[140%] w-px rotate-[25deg] bg-white" />
            <div className="absolute right-[45%] top-[-20%] h-[140%] w-px rotate-[25deg] bg-white" />
          </div>

          <div className="relative z-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 sm:text-xs">
              Have a project in mind?
            </p>

            <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
              <h2 className="max-w-[950px] text-[48px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[68px] lg:text-[88px]">
                Let&apos;s make
                <br />
                <span className="text-white/30">something move.</span>
              </h2>

              <Link
                href="/#contact"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-neutral-950 transition-all duration-300 hover:-translate-y-1"
              >
                Start a project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPANDED VIDEO MODAL
      ========================================================= */}

      {expandedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={expandedVideo.title}
          onMouseDown={() => setExpandedVideo(null)}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setExpandedVideo(null)}
            className="absolute right-5 top-5 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white/20"
          >
            <X size={21} />
          </button>

          <div
            className="w-full max-w-[1400px]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between px-1 text-white">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {expandedVideo.category}
                </p>
                <h3 className="mt-1 text-lg font-medium">
                  {expandedVideo.title}
                </h3>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-black shadow-2xl">
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
   HERO STAT
================================================================ */

function HeroStat({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[10px] font-medium tracking-[0.2em] text-neutral-400">
        {number}
      </span>
      <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
        {text}
      </span>
    </div>
  );
}

/* ===============================================================
   VIDEO CARD
================================================================ */

function VideoCard({
  video,
  index,
  activeVideo,
  setActiveVideo,
  onExpand,
}: {
  video: Video;
  index: number;
  activeVideo: string | null;
  setActiveVideo: (id: string | null) => void;
  onExpand: () => void;
}) {
  const isActive = activeVideo === video.id;

  return (
    <article
      className="group"
      onMouseEnter={() => setActiveVideo(video.id)}
      onMouseLeave={() => setActiveVideo(null)}
    >
      <div className="relative aspect-video overflow-hidden rounded-[28px] bg-black shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&rel=0&playsinline=1&iv_load_policy=3&fs=0`}
          title={video.title}
          className={`absolute inset-0 h-full w-full scale-[1.01] border-0 transition-transform duration-700 ${
            isActive ? "scale-[1.04]" : ""
          }`}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>

        <button
          type="button"
          aria-label={`Expand ${video.title}`}
          onClick={onExpand}
          className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-950 opacity-100 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Maximize2 size={17} />
        </button>

        <div className="absolute bottom-5 left-5">
          <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
            {video.category}
          </p>
          <p className="text-sm font-medium text-white">{video.title}</p>
        </div>
      </div>

      <div className="flex items-start justify-between gap-6 px-1 pt-5">
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.03em]">
            {video.title}
          </h3>

          {video.description && (
            <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
              {video.description}
            </p>
          )}
        </div>

        <span className="mt-1 shrink-0 text-xs text-neutral-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </article>
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
    <div className="group grid gap-5 py-9 sm:grid-cols-[60px_1fr] sm:gap-8">
      <span className="text-xs font-medium text-neutral-400">{number}</span>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <h3 className="text-2xl font-semibold tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-2">
          {title}
        </h3>

        <p className="max-w-[500px] text-sm leading-7 text-neutral-500">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ===============================================================
   PROCESS STEP
================================================================ */

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-5 py-9 sm:grid-cols-[60px_180px_1fr] sm:gap-8">
      <span className="text-xs text-white/30">{number}</span>
      <h3 className="text-xl font-medium tracking-[-0.02em]">{title}</h3>
      <p className="max-w-lg text-sm leading-7 text-white/40">{text}</p>
    </div>
  );
}