"use client";

import { useEffect, useRef } from "react";
import { ProductWindow } from "@/components/product/ProductWindow";

const IMAGES = [
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&q=90",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=90",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=700&q=90",
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=700&q=90",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700&q=90",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&q=90",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700&q=90",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=90",
];

export function HeroVisual() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animationFrame: number;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - start) / 1000;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const count = IMAGES.length;

        // One clean continuous orbit
        const angle =
          (index / count) * Math.PI * 2 + elapsed * 0.16;

        // Wider and flatter = cleaner horizontal composition
        const radiusX = 205;
        const radiusY = 78;

        const x = Math.cos(angle) * radiusX;
        const y = Math.sin(angle) * radiusY;

        // Controlled depth
        const depth = Math.sin(angle);
        const z = depth * 150;

        // Small size difference
        const scale =
          0.84 + ((depth + 1) / 2) * 0.16;

        // Different subtle angles
        const rotation =
          Math.cos(angle) * 7;

        // Gentle independent movement
        const floatY =
          Math.sin(elapsed * 0.65 + index * 1.4) * 3;

        const floatRotation =
          Math.sin(elapsed * 0.5 + index) * 1.2;

        card.style.transform = `
          translate3d(
            ${x}px,
            ${y + floatY}px,
            ${z}px
          )
          rotateZ(${rotation + floatRotation}deg)
          scale(${scale})
        `;

        card.style.zIndex = String(
          100 + Math.round(depth * 50)
        );
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <ProductWindow
      title="highh-visual — image orbit"
      toolbar={
        <span className="flex items-center gap-1.5 rounded-pill bg-[#22C55E]/10 px-2.5 py-1 font-mono text-[11px] text-[#16A34A]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
          running
        </span>
      }
    >
      <div
        className="
          relative
          h-[420px]
          overflow-hidden
          rounded-b-[inherit]
          bg-white
          sm:h-[450px]
          md:h-[480px]
        "
      >
        {/* Soft center glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-indigo-100/40
            blur-[100px]
          "
        />

        {/* Very subtle orbit ring */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[175px]
            w-[470px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            border
            border-slate-200/60
          "
        />

        {/* Second subtle orbit ring */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[250px]
            w-[560px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            border
            border-slate-100/80
          "
        />

        {/* 3D perspective */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
          style={{
            perspective: "1400px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          {/* SINGLE ORBIT */}
          <div
            className="
              relative
              h-[330px]
              w-[520px]
            "
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(7deg)",
            }}
          >
            {IMAGES.map((src, index) => (
              <div
                key={index}
                ref={(element) => {
                  cardsRef.current[index] = element;
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[138px]
                  w-[138px]
                  -ml-[69px]
                  -mt-[69px]
                  overflow-hidden
                  rounded-[20px]
                  bg-white
                  border
                  border-white
                  shadow-[0_18px_40px_rgba(15,23,42,0.16)]
                  will-change-transform
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  className="
                    block
                    h-full
                    w-full
                    select-none
                    object-cover
                  "
                />

                {/* clean glass highlight */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[20px]
                    bg-gradient-to-br
                    from-white/20
                    via-transparent
                    to-black/5
                  "
                />

                {/* subtle border */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[20px]
                    border
                    border-black/[0.06]
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProductWindow>
  );
}