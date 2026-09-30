import Navbar from "./Navbar";
import heroGreenSpring from "../assets/hero-1.png";
import springWhiteSm from "../assets/Frame (2).png";
import cylinderGreen from "../assets/Cone.png";
import coneWhite from "../assets/Cone (1).png";
import torusWhite from "../assets/Cone (2).png";
import ellipseArc from "../assets/Ellipse 7.png";
import springWhiteLg from "../assets/spring-white-lg.png";
import avatarsRow from "../assets/avatars/avatars_row.png";
import happyMoment from "../assets/happy.png";

const innerShapes = [
  { src: springWhiteSm, left: "5%", top: "36%", width: "170px", height: "170px" },
  { src: torusWhite, left: "1%", top: "68%", width: "220px", height: "230px" },
  { src: coneWhite, right: "5%", top: "33%", width: "280px", height: "180px" },
  { src: springWhiteLg, right: "2%", top: "70%", width: "140px", height: "180px" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0338E3] poppins-font flex flex-col justify-between items-center select-text overflow-hidden pt-6 pb-0">
      {/* Background blueprint grid */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
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
        className="absolute left-0 top-40 z-10 object-contain hidden xl:block w-36 2xl:w-44 pointer-events-none"
      />

      {/* 2. Right-0 Side Image (Green Cylinder) */}
      <img
        src={cylinderGreen}
        alt=""
        draggable={false}
        className="hidden xl:block w-36 2xl:w-44 absolute right-0 top-40 z-10 object-contain pointer-events-none"
      />

      {/* 3. Half Circle Arc — Placed AT BOTTOM */}
      <img
        src={ellipseArc}
        alt=""
        draggable={false}
        className="absolute left-1/2 bottom-0 z-10 w-full max-w-275 h-70 sm:h-auto -translate-x-1/2 object-fill pointer-events-none opacity-90"
      />

      <div className="w-full max-w-7xl mx-auto px-4 z-30">
        <Navbar />
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center z-20 my-auto px-4 pt-6">
        <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-17 tracking-tight text-white text-center mb-4 max-w-4xl">
          Get Access to Hundreds
          <br className="hidden sm:block" />
          {" "}Courses Available
        </h1>
        <p className="text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed text-white/90 text-center max-w-4xl">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <div className="w-full max-w-md md:max-w-xl flex flex-col sm:flex-row items-center justify-center gap-3 mt-16">
          <div className="flex h-12 sm:h-13 w-full items-center gap-3 rounded-full bg-white px-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7E7E7E"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-sm font-normal text-[#222] outline-none placeholder:text-[#8E8E8E]"
            />
          </div>
          <button className="w-full sm:w-auto sm:h-auto py-4 px-8 items-center justify-center rounded-full bg-[#CCFF00] text-sm font-semibold text-[#111] transition-transform hover:scale-105 active:scale-95 shadow-[0_4px_14px_rgba(204,255,0,0.25)] cursor-pointer shrink-0">
            Search
          </button>
        </div>

        {innerShapes.map(({ src, left, right, top, width, height }, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            draggable={false}
            className="hidden lg:block absolute z-10 object-contain pointer-events-none transition-transform hover:scale-105 duration-300"
            style={{ left, right, top, width, height }}
          />
        ))}

        <div className="relative w-full max-w-125 md:max-w-162.5 lg:max-w-195 mx-auto flex justify-center md:items-end min-h-105 z-20">

          <img
            src={happyMoment}
            alt="Smiling student with headset and laptop"
            draggable={false}
            className="w-full relative z-20 pointer-events-none ml-12"
          />

          {/* Badge 1: UI/UX Design */}
          <div className="absolute left-[-4%] sm:left-[5%] md:left-[8%] top-[40%] sm:top-[28%] z-30 h-auto rounded-xl bg-white p-2.5 sm:p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5">
            <p className="text-[11px] sm:text-[13px] font-semibold leading-tight text-[#111]">
              UI/UX Design
            </p>
            <p className="mt-0.5 text-[9px] sm:text-[10px] font-medium leading-3.5 text-[#8A8A8A]">
              200 Courses <span className="mx-0.5 sm:mx-1">•</span> 1000+ Students
            </p>
          </div>

          {/* Badge 2: Learning Progress */}
          <div className="absolute right-[-4%] sm:right-[5%] md:right-[8%] top-[28%] sm:top-[30%] z-30 h-auto w-35 sm:w-42.5 md:w-47.25 rounded-xl bg-white p-2.5 sm:p-3.5 md:p-4 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5">
            <p className="text-[10px] sm:text-[11px] font-medium text-[#333]">
              Learning Progress
            </p>
            <p className="mt-0.5 text-2xl sm:text-[32px] md:text-[38px] font-bold leading-none tracking-tight text-[#111]">
              55%
            </p>
            <div className="mt-2 h-1.25 w-full rounded-full bg-[#EBEBEB]">
              <div className="h-full w-[55%] rounded-full bg-[#CCFF00]" />
            </div>
          </div>

          {/* Badge 3: Happy Students */}
          <div className="absolute left-[-4%] sm:left-[8%] md:left-[12%] bottom-[4%] sm:bottom-[8%] z-30 h-auto rounded-xl bg-white p-2.5 sm:p-3.5 md:p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5 w-50">
            <p className="text-[11px] sm:text-[13px] font-semibold leading-tight text-[#111]">
              Happy Students
            </p>
            <div className="mt-0.5 flex items-center gap-1">
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#444]">4.5</span>
              <span className="text-[9px] sm:text-[10px] font-normal text-[#8A8A8A]">(240)</span>
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
            <div className="mt-1.5">
              <img
                src={avatarsRow}
                alt="Student Avatars"
                className="h-5 sm:h-7 md:h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}