import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import hero1 from "../assets/hero-1.png";

/**
 * Design stage = 1174 x 832 px (Figma frame). Every element is absolutely
 * positioned with the exact x/y/size from the design, and the whole stage is
 * scaled down on smaller screens so proportions never break.
 *
 * Put each asset in /public/hero/ (export individually from Figma, transparent PNG/WebP):
 *  person.png, spring-green.png, spring-white-sm.png, cylinder.png,
 *  cone.png, torus.png, spring-white-lg.png, avatar-1..6.png
 */
const W = 1174, H = 832;

const shapes = [
  // [src, left, top, width, height]
  [hero1,    -4,  228, 165, 225],
  ["/hero/spring-white-sm.png", 173, 408,  98, 104],
  ["/hero/cylinder.png",       1038, 205, 140, 250],
  ["/hero/cone.png",            920, 393, 106, 116],
  ["/hero/torus.png",            50, 600, 202, 212],
  ["/hero/spring-white-lg.png", 972, 576, 162, 208],
];

export default function Hero() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => setScale(Math.min(1, window.innerWidth / W));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0338E3] poppins-font"
      style={{ height: H * scale }}
    >
      {/* grid background — spans full width */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.10) 1px, transparent 1px)",
          backgroundSize: "97.6px 97.6px",
          backgroundPosition: `calc(50% - ${W / 2 - 97}px) 95px`,
        }}
      />

      <div
        className="absolute left-1/2 top-0 origin-top"
        style={{ width: W, height: H, transform: `translateX(-50%) scale(${scale})` }}
      >
        <Navbar />

        {/* Heading — 60/69, centered at x:586 */}
        <h1 className="absolute left-1/2 top-[137px] w-[760px] -translate-x-1/2 text-center text-[60px] font-semibold leading-[69px] tracking-[-0.6px] text-white">
          Get Access to Hundreds<br />Courses Available
        </h1>

        <p className="absolute left-1/2 top-[304px] -translate-x-1/2 whitespace-nowrap text-[15px] leading-[22px] text-white">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search input x:349 y:375 376x42 */}
        <div className="absolute left-[349px] top-[375px] flex h-[42px] w-[376px] items-center gap-2 rounded-full bg-white px-[22px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="7" cy="7" r="5" /><path d="m11 11 3.500 3.500" />
          </svg>
          <input
            placeholder="Course, topic, creator"
            className="w-full bg-transparent text-[14px] text-[#222] outline-none placeholder:text-[#8A8A8A]"
          />
        </div>
        <button className="absolute left-[739px] top-[375px] h-[38px] w-[84px] rounded-full bg-[#CCFF00] text-[14px] font-medium text-[#111]">
          Search
        </button>

        {/* Lime circle — r≈469, top at y:477 */}
        <div className="absolute left-[116px] top-[477px] h-[938px] w-[938px] rounded-full bg-[#CCFF00]" />

        {/* 3D shapes */}
        {shapes.map(([src, l, t, w, h]) => (
          <img key={src} src={src} alt="" draggable={false}
            className="absolute z-10 select-none object-contain"
            style={{ left: l, top: t, width: w, height: h }} />
        ))}

        {/* Person */}
        <img src="/hero/person.png" alt="Smiling student with headset and laptop"
          className="absolute left-[408px] top-[446px] z-20 h-[386px] w-[420px] select-none object-contain object-bottom" />

        {/* Card: UI/UX Design — x:328 y:520 170x57 */}
        <div className="absolute left-[328px] top-[520px] z-30 h-[57px] w-[170px] rounded-[12px] bg-white px-[13px] pt-[13px]">
          <p className="text-[14px] font-medium leading-[18px] text-[#111]">UI/UX Design</p>
          <p className="mt-[3px] text-[10px] leading-[14px] text-[#8A8A8A]">
            200 Courses <span className="mx-1">•</span> 1000+ Students
          </p>
        </div>

        {/* Card: Learning Progress — x:686 y:530 189x106 */}
        <div className="absolute left-[686px] top-[530px] z-30 h-[106px] w-[189px] rounded-[12px] bg-white px-[13px] pt-[13px]">
          <p className="text-[11px] leading-[14px] text-[#222]">Learning Progress</p>
          <p className="mt-[4px] text-[40px] font-semibold leading-[48px] text-[#222]">55%</p>
          <div className="mt-[6px] h-[5px] w-[163px] rounded-full bg-[#EBEBEB]">
            <div className="h-full w-[55%] rounded-full bg-[#CCFF00]" />
          </div>
        </div>

        {/* Card: Happy Students — x:266 y:682 210x98 */}
        <div className="absolute left-[266px] top-[682px] z-30 h-[98px] w-[210px] rounded-[12px] bg-white px-[13px] pt-[12px]">
          <p className="text-[14px] font-medium leading-[18px] text-[#111]">Happy Students</p>
          <p className="text-[11px] leading-[14px] text-[#555]">
            4.5 <span className="text-[#8A8A8A]">(240)</span> <span className="text-[#CCFF00]">★</span>
          </p>
          <div className="mt-[7px] flex items-center">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img key={n} src={`/hero/avatar-${n}.png`} alt=""
                className="-mr-[6px] h-[36px] w-[36px] rounded-full border-2 border-white bg-[#ddd] object-cover" />
            ))}
            <span className="z-10 -ml-[0px] flex h-[36px] w-[36px] items-center justify-center rounded-full border-2 border-white bg-[#CCFF00] text-[11px] font-semibold text-[#111]">
              2K+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
