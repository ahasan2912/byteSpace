import Navbar from "./Navbar";

// Assets imported from src/assets
import heroGreenSpring from "../assets/hero-1.png";
import springWhiteSm from "../assets/Frame (2).png";
import cylinderGreen from "../assets/Cone.png";
import coneWhite from "../assets/Cone (1).png";
import torusWhite from "../assets/Cone (2).png";
import ellipseArc from "../assets/Ellipse 7.png";
import springWhiteLg from "../assets/spring-white-lg.png";
import avatarsRow from "../assets/avatars/avatars_row.png";
import happyMoment from "../assets/happy.png";

// Inner shapes inside the 1174px container
const innerShapes = [
  // Small white spring on mid-left
  { src: springWhiteSm, left: 170, top: 408, width: 104, height: 110 },
  // White torus on bottom-left
  { src: torusWhite, left: 0, top: 600, width: 302, height: 312 },
  // White pyramid/cone on mid-right
  { src: coneWhite, left: 915, top: 390, width: 210, height: 120 },
  // Large white spring on bottom-right
  { src: springWhiteLg, left: 1068, top: 672, width: 165, height: 212 },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0338E3] poppins-font flex justify-center select-text">
      {/* Background blueprint grid — Spans FULL SCREEN */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "97.6px 97.6px",
          backgroundPosition: "center top",
        }}
      />

      {/* 1. Left-0 Side Image (Green Spring) */}
      <img
        src={heroGreenSpring}
        alt=""
        draggable={false}
        className="absolute left-0 top-57 z-20 object-fill hidden xl:block xl:w-45"
      />

      {/* 2. Right-0 Side Image (Green Cylinder) */}
      <img
        src={cylinderGreen}
        alt=""
        draggable={false}
        className="hidden xl:block xl:w-45 absolute right-0 top-55.25 z-20 object-fill"
      />

      {/* 3. Half Circle Arc — Placed BELOW Search Bar & Touch Bottom-0 */}
      <img
        src={ellipseArc}
        alt=""
        draggable={false}
        className="absolute left-1/2 bottom-0 z-10 w-250 -translate-x-1/2 object-fill"
      />

      {/* Main Container — Fixed 1174px size, centered always */}
      <div className="relative w-293.5 h-208 shrink-0 z-20">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Heading */}
        <h1 className="absolute left-1/2 top-[120px] z-30 w-[820px] -translate-x-1/2 text-center text-[60px] font-bold leading-[68px] tracking-tight text-white">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="absolute left-1/2 top-[268px] z-30 -translate-x-1/2 whitespace-nowrap text-center text-[15px] font-normal leading-[22px] text-white/90">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar & Button */}
        <div className="absolute left-1/2 top-80 z-30 flex -translate-x-1/2 items-center gap-3">
          <div className="flex h-13 w-120 items-center gap-3 rounded-full bg-white px-5.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7E7E7E"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-[14px] font-normal text-[#222] outline-none placeholder:text-[#8E8E8E]"
            />
          </div>
          <button className="flex py-3.5 px-8 items-center justify-center rounded-full bg-[#CCFF00] text-[14px] font-medium text-[#111] transition-transform hover:scale-105 active:scale-95 shadow-[0_4px_14px_rgba(204,255,0,0.25)] cursor-pointer">
            Search
          </button>
        </div>

        {/* Inner 3D Shapes */}
        {innerShapes.map(({ src, left, top, width, height }, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            draggable={false}
            className="hidden lg:block absolute z-20 object-contain transition-transform hover:scale-105 duration-300"
            style={{ left, top, width, height }}
          />
        ))}

        {/* Student Image */}
        <div className="">
          <img
            src={happyMoment}
            alt="Smiling student with headset and laptop"
            draggable={false}
            className="absolute -bottom-20 left-70"
          />
        </div>

        {/* Badge 1: UI/UX Design */}
        <div className="absolute left-82 top-130 z-30 h-14.5 w-43 rounded-[13px] bg-white px-3.5 pt-2.75 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5">
          <p className="text-[13px] font-semibold leading-4.5 text-[#111]">
            UI/UX Design
          </p>
          <p className="mt-[2px] text-[10px] font-medium leading-[14px] text-[#8A8A8A]">
            200 Courses <span className="mx-1">•</span> 1000+ Students
          </p>
        </div>

        {/* Badge 2: Learning Progress */}
        <div className="absolute left-[686px] top-[530px] z-30 h-[106px] w-[189px] rounded-[15px] bg-white px-[16px] pt-[14px] shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5">
          <p className="text-[11px] font-medium leading-[14px] text-[#333]">
            Learning Progress
          </p>
          <p className="mt-[4px] text-[38px] font-bold leading-[44px] tracking-tight text-[#111]">
            55%
          </p>
          <div className="mt-[8px] h-[5px] w-full rounded-full bg-[#EBEBEB]">
            <div className="h-full w-[55%] rounded-full bg-[#CCFF00]" />
          </div>
        </div>

        {/* Badge 3: Happy Students */}
        <div className="absolute left-[266px] top-[682px] z-30 h-[96px] w-[210px] rounded-[15px] bg-white px-[14px] pt-[12px] shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5">
          <p className="text-[13px] font-semibold leading-[16px] text-[#111]">
            Happy Students
          </p>
          <div className="mt-[2px] flex items-center gap-1">
            <span className="text-[11px] font-semibold text-[#444]">4.5</span>
            <span className="text-[10px] font-normal text-[#8A8A8A]">(240)</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="#D4FB20"
              className="ml-0.5 inline-block"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="mt-[8px]">
            <img
              src={avatarsRow}
              alt="Student Avatars"
              className="h-[28px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}