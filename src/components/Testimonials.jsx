import { testimonials } from "../lib/data";

const Testimonials = () => {
    return (
       <div className="relative bg-[#FBFDFE] flex items-center justify-center px-4 py-8 overflow-hidden text-slate-900 select-text">
      
      {/* Top-Right Vibrant Lime/Yellow Ambient Glow */}
      <div 
        className="absolute top-[-25%] right-[-20%] w-162.5 h-200 sm:w-225 sm:h-150 rounded-full blur-[110px] opacity-80"
        style={{
          background: 'radial-gradient(circle, rgba(223, 255, 77, 0.75) 0%, rgba(210, 248, 100, 0.45) 45%, rgba(255, 255, 255, 0) 75%)'
        }}
      />

      {/* Top-Right Vibrant Lime/Yellow Ambient Glow */}
      <div 
        className="hidden md:block absolute top-[-20%] right-[30%] w-162.5 h-62.5 sm:w-150 sm:h-100 rounded-full blur-[50px] opacity-90"
        style={{
          background: 'radial-gradient(circle, rgba(223, 255, 77, 0.75) 0%, rgba(210, 248, 100, 0.45) 45%, rgba(255, 255, 255, 0) 75%)'
        }}
      />

      {/* Bottom-Left Soft Periwinkle / Light Blue Ambient Glow (Refined match to image) */}
      <div 
        className="absolute bottom-[-35%] left-[-20%] w-150 h-150 sm:w-212.5 sm:h-200 rounded-full blur-[130px] opacity-95"
        style={{
          background: 'radial-gradient(circle, rgba(180, 202, 255, 0.75) 0%, rgba(200, 215, 255, 0.4) 45%, rgba(255, 255, 255, 0) 75%)'
        }}
      />

      <div className="relative z-10 max-w-300 w-full mx-auto space-y-12 md:space-y-16 md:mt-5 lg:mt-10 md:mb-5">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
          
          <div className="md:col-span-6 lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#000000] tracking-tight leading-[1.15]">
              Discover What Our Community Is Saying
            </h2>
          </div>

          <div className="md:col-span-6 lg:col-span-6 md:pt-1">
            <p className="text-[#4F4F4F] text-sm sm:text-base leading-relaxed font-thin">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.025)] border border-white/80 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              <div>
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-full overflow-hidden flex items-center justify-center ${item.avatarBg}`}>
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="space-y-1 mb-5">
                  <h3 className="text-lg font-bold text-black tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#003BE2]">
                    {item.role}
                  </p>
                </div>

                <p className="text-[#4F4F4F] text-xs sm:text-sm leading-relaxed font-thin">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
    );
};

export default Testimonials;