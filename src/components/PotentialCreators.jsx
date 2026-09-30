import potentialCreator1 from "../assets/potentialCreator_1.png";
import potentialCreator2 from "../assets/potentialCreator_2.png";
import potentialCreator3 from "../assets/potentialCreator_3.png";
import potentialCreator4 from "../assets/potentialCreator_4.png";
import potentialCreator5 from "../assets/potentialCreator_5.png";
import potentialCreator6 from "../assets/potentialCreator_6.png";
import potentialCreator7 from "../assets/potentialCreator_7.png";

const PotentialCreators = () => {
  return (
    <section className="relative w-full min-h-[50vh] bg-[#0338E3] poppins-font flex flex-col justify-between items-center select-text overflow-hidden pt-10 sm:pt-6 pb-10 sm:pb-0 px-4">
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

      {/* 1. Left-0 Top-0 Side Image */}
      <img
        src={potentialCreator1}
        alt="potentialCreator1"
        draggable={false}
        className="absolute left-0 top-0 z-10 object-contain hidden xl:block w-46 2xl:w-64 pointer-events-none"
      />

      {/* 2. Right-0 Top-5 Side Image */}
      <img
        src={potentialCreator6}
        alt="potentialCreator6"
        draggable={false}
        className="hidden xl:block w-36 2xl:w-44 absolute right-0 top-5 z-10 object-contain pointer-events-none"
      />

      {/* 3. Left-0 bottom-0 Side Image */}
      <img
        src={potentialCreator4}
        alt="potentialCreator4"
        draggable={false}
        className="absolute left-0 bottom-0 z-10 object-contain hidden xl:block w-46 2xl:w-64 pointer-events-none"
      />

      {/* 4. Right-5 bottom-0 Side Image */}
      <img
        src={potentialCreator7}
        alt="potentialCreator7"
        draggable={false}
        className="hidden xl:block w-46 2xl:w-64 absolute right-0 bottom-0 z-10 object-contain pointer-events-none"
      />

      {/* 5. Left-0 bottom-0 Side Image */}
      <img
        src={potentialCreator2}
        alt="potentialCreator2"
        draggable={false}
        className="absolute left-40 top-5 z-10 object-contain hidden xl:block w-36 pointer-events-none"
      />

      {/* 6. Right-5 bottom-0 Side Image */}
      <img
        src={potentialCreator3}
        alt="potentialCreator3"
        draggable={false}
        className="hidden xl:block w-32 absolute left-0 bottom-18 z-10 object-contain pointer-events-none"
      />

      {/* 7. Right-0 Top-5 Side Image */}
      <img
        src={potentialCreator5}
        alt="potentialCreator5"
        draggable={false}
        className="hidden xl:block w-36 2xl:w-44 absolute right-40 top-0 z-10 object-contain pointer-events-none"
      />

      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-start z-20 my-auto">
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-white tracking-tight leading-[1.15] max-w-177.5 mx-auto text-center">
          Unlock Your Potential as a Creator with ByteSpace
        </h1>
        <p className="max-w-240 mx-auto text-center py-5 text-white text-sm sm:text-base leading-relaxed font-thin">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <button
          type="submit"
          className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#CCFF00] hover:bg-[#b8e600] text-slate-950 font-medium text-sm transition-all duration-200 shadow-2xs shrink-0 cursor-pointer text-center"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}

export default PotentialCreators;