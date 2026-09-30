import { learningCategories } from "../lib/data";

const LearningPathSection = () => {
  
    return (
        <div className=" bg-white flex flex-col justify-center items-center pb-10 sm:pb-18 px-4 sm:px-6 lg:px-8 select-text">
            <div className="max-w-300 w-full mx-auto space-y-12">
                {/* Header Section */}
                <header className="text-center max-w-240 mx-auto space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#000000] tracking-tight leading-[1.15]">
                        Explore Diverse Learning Paths at Bytespace
                    </h2>
                    <p className="text-[#82868E] text-sm sm:text-base leading-relaxed font-thin">
                        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
                    </p>
                </header>

                {/* Category Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 sm:mt-16 select-text">
                    {learningCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col items-center justify-center space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group aspect-square"
                        >
                            {/* Lime Yellow Circular Icon Container */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#CCFF00] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                                <img src={category.icon} alt={category.title} className="w-7 h-7 sm:w-8 sm:h-8" />
                            </div>

                            {/* Title */}
                            <span className="text-slate-800 font-medium text-sm sm:text-base  md:text-lg text-center group-hover:text-slate-950 transition-colors">
                                {category.title}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default LearningPathSection;