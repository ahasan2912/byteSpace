
const LearningPathSection = () => {
    const CATEGORIES = [
        {
            id: 1,
            title: 'Design',
            icon: (
                <svg className="w-6 h-6 text-slate-900 fill-current" viewBox="0 0 24 24">
                    {/* Pencil and Ruler Icon */}
                    <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: 'Development',
            icon: (
                <svg className="w-6 h-6 text-slate-900 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    {/* Code Brackets in Phone/Device */}
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
        },
        {
            id: 3,
            title: 'IT & Software',
            icon: (
                <svg className="w-6 h-6 text-slate-900 fill-current" viewBox="0 0 24 24">
                    {/* Laptop Icon */}
                    <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                </svg>
            ),
        },
        {
            id: 4,
            title: 'Business',
            icon: (
                <svg className="w-6 h-6 text-slate-900 fill-current" viewBox="0 0 24 24">
                    {/* Office Building Icon */}
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
            ),
        },
        {
            id: 5,
            title: 'Marketing',
            icon: (
                <svg className="w-6 h-6 text-slate-900 fill-current" viewBox="0 0 24 24">
                    {/* Megaphone / Bullhorn Icon */}
                    <path d="M21.5 12c0-1.91-1.21-3.54-2.9-4.18V6c0-1.1-.9-2-2-2H3.5C2.67 4 2 4.67 2 5.5v13c0 .83.67 1.5 1.5 1.5H5v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3h7.6c1.69-.64 2.9-2.27 2.9-4.18v-1.82zM4 18V6h12.6c.77.53 1.4 1.28 1.4 2.18v7.64c0 .9-.63 1.65-1.4 2.18H4zm17.5-6c0 1.38-.82 2.56-2 3.08v-6.16c1.18.52 2 1.7 2 3.08z" />
                </svg>
            ),
        },
        {
            id: 6,
            title: 'Photography',
            icon: (
                <svg className="w-6 h-6 text-slate-900 fill-current" viewBox="0 0 24 24">
                    {/* Camera Icon */}
                    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
        },
    ];
    return (
        <div className=" bg-white flex flex-col justify-center items-center pb-18 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full mx-auto space-y-12">

                {/* Header Section */}
                <header className="text-center max-w-245 mx-auto space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-[36px] font-semibold text-slate-900 tracking-tight leading-tight">
                        Explore Diverse Learning Paths at Bytespace
                    </h2>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed px-2">
                        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
                    </p>
                </header>

                {/* Category Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-16">
                    {CATEGORIES.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col items-center justify-center space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group select-none aspect-square"
                        >
                            {/* Lime Yellow Circular Icon Container */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#CCFF00] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                                {category.icon}
                            </div>

                            {/* Title */}
                            <span className="text-slate-800 font-semibold text-sm sm:text-base text-center group-hover:text-slate-950 transition-colors">
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