import signInBgImag1 from "../assets/login_1.png";
import signInBgImage2 from "../assets/login_2.png";
import signInBgImag3 from "../assets/login_3.png";
import signInBgImag4 from "../assets/login_4.png";
import signInBgImag5 from "../assets/login_5.png";
import avatarsRow from "../assets/avatarsRow2.png";

const AuthHero = ({ title, description }) => {
    return (
        <div className="hidden md:block mt-10 max-w-118.75">
            <h1 className="text-xl font-semibold text-[#F5F5F6]">{title}</h1>
            <p className="text-[#F5F5F6] font-thin text-sm sm:text-base mt-4">{description}</p>

            <div className="mt-32 relative flex shrink-0 origin-top-left scale-[0.577] min-[420px]:scale-[0.673] sm:scale-[0.846] md:scale-100 lg:h-auto lg:w-full lg:origin-top">
                <div
                    className="w-95 h-97.5 overflow-hidden"
                    style={{
                        backgroundImage: `url(${signInBgImage2})`,
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <div className="absolute left-[25%] top-[-25%]">
                    <img src={signInBgImag1} alt="Sign In Background" className="w-full h-full object-cover" />
                </div>

                <div className="hidden lg:block absolute left-[8%] top-[-18%]">
                    <img src={signInBgImag3} alt="Sign In Background" className="w-full h-full object-cover" />
                </div>

                <div className="hidden lg:block absolute left-[-5%] bottom-[-28%]">
                    <img src={signInBgImag4} alt="Sign In Background" className="w-full h-full object-cover" />
                </div>

                <div className="hidden lg:block absolute right-[-10%] bottom-[0%] z-50">
                    <img src={signInBgImag5} alt="Sign In Background" className="w-full h-full object-cover" />
                </div>

                {/* Badge 3: Happy Students */}
                <div className="absolute right-[0%] bottom-[-10%] h-auto rounded-xl bg-[#D4FB20] p-2.5 sm:p-3.5 md:p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5 w-50 z-20">
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
    );
};

export default AuthHero;