const Testimonials = () => {
    const TESTIMONIALS = [
        {
            id: 1,
            name: 'Sarah M.',
            role: 'Enthusiastic Learner',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
            avatarBg: 'bg-[#EAB308]', // Vibrant yellow background for Sarah
            quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
        },
        {
            id: 2,
            name: 'James L.',
            role: 'Lifelong Learner',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
            avatarBg: 'bg-slate-300',
            quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
        },
        {
            id: 3,
            name: 'Alex B.',
            role: 'Inspired Creator',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
            avatarBg: 'bg-slate-200',
            quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
        }
    ];
    return (
       <div className="relative bg-[#FBFDFE] flex items-center justify-center px-4 py-8 overflow-hidden font-sans text-slate-900">
      
      {/* Top-Right Vibrant Lime/Yellow Ambient Glow */}
      <div 
        className="absolute top-[-15%] right-[-10%] w-[650px] h-[650px] sm:w-[900px] sm:h-[900px] rounded-full blur-[110px] opacity-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(223, 255, 77, 0.75) 0%, rgba(210, 248, 100, 0.45) 45%, rgba(255, 255, 255, 0) 75%)'
        }}
      />

      {/* Bottom-Left Soft Periwinkle / Light Blue Ambient Glow (Refined match to image) */}
      <div 
        className="absolute bottom-[-15%] left-[-12%] w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full blur-[130px] opacity-85 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(180, 202, 255, 0.75) 0%, rgba(200, 215, 255, 0.4) 45%, rgba(255, 255, 255, 0) 75%)'
        }}
      />

      {/* Main Layout Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-12 md:space-y-16">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
          
          {/* Left Column: Heading */}
          <div className="md:col-span-6 lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-slate-950 tracking-tight leading-[1.15]">
              Discover What Our Community Is Saying
            </h2>
          </div>

          {/* Right Column: Paragraph Description */}
          <div className="md:col-span-6 lg:col-span-6 md:pt-1">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </header>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.025)] border border-white/80 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              <div>
                {/* User Avatar */}
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

                {/* Name & Role */}
                <div className="space-y-1 mb-6">
                  <h3 className="text-lg font-bold text-slate-950 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#4F63DA]">
                    {item.role}
                  </p>
                </div>

                {/* Quote Body */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
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