import growthBgImage from "../assets/backgroundCard.png";
import happymoment from "../assets/happy.png";
import growthImage_1 from "../assets/growth_1.png";
import happyStudent from "../assets/growth_2.png";
import { Check } from "lucide-react";
import avatarsRow from "../assets/avatars/avatars_row.png";
import growthImage_3 from "../assets/growth_3.png";

const ProfessionalGrowth = () => {

    const features = [
        "Share Your Expertise",
        "Monetize Your Passion",
        "Flexibility and Autonomy",
        "Build a Community"
    ];
    return (
        <div className="relative bg-[#FBFDFE] px-4 overflow-hidden text-slate-900 select-text">
            {/* Top-left Vibrant Lime/Yellow Ambient Glow */}
            <div
                className="absolute top-[-25%] left-[0%] w-162.5 h-200 sm:w-225 sm:h-150 rounded-full blur-[110px] opacity-80"
                style={{
                    background: 'radial-gradient(circle, rgba(223, 255, 77, 0.75) 0%, rgba(210, 248, 100, 0.45) 45%, rgba(255, 255, 255, 0) 75%)'
                }}
            />

            {/* Top-Rigth Soft Periwinkle / Light Blue Ambient Glow */}
            <div
                className="absolute top-[-20%] right-[-10%] w-150 h-150 sm:w-212.5 sm:h-200 rounded-full blur-[80px] opacity-95"
                style={{
                    background: 'radial-gradient(circle, rgba(180, 202, 255, 0.75) 0%, rgba(200, 215, 255, 0.4) 45%, rgba(255, 255, 255, 0) 75%)'
                }}
            />

            {/* Bottom-Left Vibrant Lime/Yellow Ambient Glow */}
            <div
                className="absolute bottom-[-25%] left-[-10%] w-162.5 h-200 sm:w-225 sm:h-150 rounded-full blur-[110px] opacity-80"
                style={{
                    background: 'radial-gradient(circle, rgba(223, 255, 77, 0.75) 0%, rgba(210, 248, 100, 0.45) 45%, rgba(255, 255, 255, 0) 75%)'
                }}
            />

            {/* Bottom-Right Soft Periwinkle / Light Blue Ambient Glow */}
            <div
                className="absolute bottom-0 right-[-10%] w-150 h-150 sm:w-212.5 sm:h-200 rounded-full blur-[130px] opacity-85"
                style={{
                    background: 'radial-gradient(circle, rgba(180, 202, 255, 0.75) 0%, rgba(200, 215, 255, 0.4) 45%, rgba(255, 255, 255, 0) 75%)'
                }}
            />

            {/* Professional Growth Section */}
            <div className="relative z-10 max-w-7xl w-full mx-auto sm:px-6 lg:px-8 pt-15 sm:pt-12 lg:pt-20">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center  gap-6 md:gap-12 lg:gap-16">
                    {/* Left Side Content */}
                    <div className="max-w-xl w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-gray-900 tracking-tight leading-[1.15]">
                            Your Path to Professional Growth Starts Here!
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal my-6 md:my-8">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>

                        <div className="flex flex-wrap items-center justify-start gap-8 sm:gap-12 pt-2">
                            <div>
                                <h3 className="text-[#003BE2] text-3xl sm:text-4xl font-bold">12K</h3>
                                <span className="text-gray-500 text-sm sm:text-base font-normal">Students</span>
                            </div>
                            <div>
                                <h3 className="text-[#003BE2] text-3xl sm:text-4xl font-bold">70+</h3>
                                <span className="text-gray-500 text-sm sm:text-base font-normal">Courses</span>
                            </div>
                            <div>
                                <h3 className="text-[#003BE2] text-3xl sm:text-4xl font-bold">16</h3>
                                <span className="text-gray-500 text-sm sm:text-base font-normal">Creators</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Visual Stack */}
                    <div className="w-full flex justify-center lg:mt-0 mt-4">
                        {/* Sized wrapper: reserves the scaled space, since transform doesn't affect layout */}
                        <div className="relative mx-auto lg:mx-0 w-75 h-65 min-[420px]:w-87.5 min-[420px]:h-75 sm:w-110 sm:h-95 md:w-130 md:h-110 lg:w-full lg:h-auto">
                            {/* Stage */}
                            <div className="relative flex justify-center shrink-0 w-130 h-110 origin-top-left scale-[0.577] min-[420px]:scale-[0.673] sm:scale-[0.846] md:scale-100 lg:h-auto lg:w-full lg:origin-top">
                                <div
                                    className="w-95 h-97.5 overflow-hidden"
                                    style={{
                                        backgroundImage: `url(${growthBgImage})`,
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />

                                {/* Happy Moment Image */}
                                <div className="absolute -translate-x-1/2 w-107.5 pointer-events-none drop-shadow-2xl z-10 bottom-14 lg:-bottom-37 lg:-translate-y-1/2 lg:translate-x-0 left-3/4 lg:left-35 lg:w-full xl:-bottom-65">
                                    <img src={happymoment} alt="Happy Learner" className="w-full h-auto object-contain" />
                                </div>

                                {/* Green spring image */}
                                <div className="hidden xl:block absolute bottom-10 -translate-y-1/2 -right-28 max-w-100 pointer-events-none drop-shadow-2xl z-50">
                                    <img src={growthImage_1} alt="Growth Card" className="w-full h-auto object-contain" />
                                </div>

                                {/* Badge */}
                                <div className="absolute top-[40%] md:top-[40%] z-30 w-47.25 rounded-xl bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5 right-[-15%] 
                            lg:right-[-10%] lg:w-auto lg:p-2 xl:top-[50%] xl:w-47.25 xl:p-4">
                                    <p className="text-[11px] font-medium text-[#333]">Learning Progress</p>
                                    <p className="mt-0.5 text-3xl xl:text-[38px] font-bold leading-none tracking-tight text-[#111]">55%</p>
                                    <div className="mt-2 h-1.25 w-full rounded-full bg-[#EBEBEB]">
                                        <div className="h-full w-[55%] rounded-full bg-[#CCFF00]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create & Manage Course Easily */}
            <div className="relative z-10 max-w-7xl w-full mx-auto sm:px-6 lg:px-8 pt-15 sm:pt-20">
                <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center lg:gap-16">
                    <div className="relative w-full max-w-150 mx-auto min-h-125 sm:min-h-150 flex items-center justify-center">
                        {/* Main Student Image */}
                        <div className="relative z-30 w-full h-auto left-20 sm:left-0">
                            <img
                                src={happyStudent}
                                alt="Happy Student"
                                className="w-full h-auto object-contain mx-auto"
                            />
                        </div>

                        {/* Top Left Card: Total Revenue */}
                        <div className="absolute top-[8%] left-[20%] sm:left-[-2%] -z-50 w-40 sm:w-48 md:w-52 rounded-2xl bg-[#003BE2] p-3 sm:p-4 shadow-xl space-y-1 transition-transform hover:-translate-y-1">
                            <p className="text-xs sm:text-sm font-medium text-white">Total Revenue</p>
                            <p className="text-[10px] sm:text-xs text-white/80">July 1-28</p>
                            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
                                $120.29
                            </p>
                            <div className="mt-2 h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                                <div className="h-full w-[65%] rounded-full bg-[#CCFF00]" />
                            </div>
                        </div>

                        {/* Middle Left Card: Year to Date */}
                        <div className="absolute top-[32%] sm:top-[38%] left-[5%] sm:left-[-3%] z-20 w-36 sm:w-48 md:w-fit rounded-2xl bg-[#003BE2] p-3 sm:p-4 shadow-xl space-y-1 transition-transform hover:-translate-y-1">
                            <p className="text-xs sm:text-sm font-medium text-white">Year to Date</p>
                            <p className="text-[10px] sm:text-xs text-white/80">2023</p>
                            <p className="text-xl sm:text-xl font-bold tracking-tight text-white">
                                $1,200.38
                            </p>
                            <div className="mt-2 inline-flex items-center justify-center rounded-full bg-[#CCFF00] px-3 py-1">
                                <span className="text-xs text-black">+12$</span>
                            </div>
                        </div>

                        {/* Right Side: Green Spring Shape */}
                        <div className="hidden lg:block absolute top-[20%] right-[0%] sm:right-[5%] z-50 w-20 sm:w-28 md:w-56 pointer-events-none drop-shadow-xl">
                            <img
                                src={growthImage_3}
                                alt="Growth Element"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Bottom Right Card: Happy Students */}
                        <div className="absolute bottom-[40%] sm:bottom-[25%] right-[-3%] sm:right-[15%] z-50 w-fit sm:w-56 rounded-xl bg-white p-3 sm:p-4 shadow-2xl transition-transform hover:-translate-y-1">
                            <p className="text-xs sm:text-sm font-bold text-gray-900">Happy Students</p>
                            <div className="mt-0.5 flex items-center gap-1">
                                <span className="text-xs font-semibold text-gray-700">4.5</span>
                                <span className="text-[10px] text-gray-400">(240)</span>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="#CCFF00"
                                    className="ml-0.5 inline-block"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <div className="mt-2">
                                <img
                                    src={avatarsRow}
                                    alt="Student Avatars"
                                    className="h-6 sm:h-8 w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-145">
                        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-gray-900 tracking-tight leading-[1.15]">
                            Create & Manage Your Courses with Ease!
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal my-6 md:my-8"><span className="font-semibold">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses. </p>
                        <div className="space-y-3.5">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 group">
                                    <div className="w-5 h-5 rounded-full bg-[#003BE2] text-white flex items-center justify-center shadow-sm shadow-blue-600/30 group-hover:scale-110 transition-transform">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-[#242528] text-base">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalGrowth;