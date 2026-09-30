import { customStyles, logos } from "../lib/data";

const LogoSlider = () => {
    const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="bg-gray-200 flex flex-col justify-center items-center px-4 h-30 sm:h-40 md:h-50">
            <style>{customStyles}</style>

            <div className="w-full max-w-300 bg-gray-200 overflow-hidden relative group">
                <div className="overflow-hidden w-full">
                    <div className="animate-marquee flex items-center space-x-6 sm:space-x-18">
                        {marqueeLogos.map((logo, index) => (
                            <div
                                key={`${logo.id}-${index}`}
                                className="flex items-center space-x-3 text-[#646e7a] hover:text-slate-900 transition-colors duration-300 cursor-pointer select-none shrink-0"
                            >
                                <img src={logo.icon} alt={logo.name} className="flex items-center justify-center"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoSlider;