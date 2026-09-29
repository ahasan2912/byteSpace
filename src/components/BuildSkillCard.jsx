import { Signal, Star } from "lucide-react";

const BuildSkillCard = ({ course }) => {
    return (
        <div
            className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
                <div className="relative aspect-16/10 w-full rounded-[18px] overflow-hidden bg-slate-100">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 text-[11px] font-medium text-slate-800">
                        <div className="bg-white/70 backdrop-blur-md px-2.5 py-1.5 rounded-full flex items-center space-x-1 shadow-sm border border-white/40">
                            <span>{course.lessons}</span>
                        </div>
                        <div className="bg-white/70 backdrop-blur-md px-2.5 py-1.5 rounded-full flex items-center space-x-1 shadow-sm border border-white/40">
                            <span>{course.duration}</span>
                        </div>
                        <div className="bg-white/70 backdrop-blur-md px-2.5 py-1.5 rounded-full flex items-center space-x-1 shadow-sm border border-white/40">
                            <span>{course.comments}</span>
                        </div>
                    </div>
                </div>
                <div className="px-1 pt-4 pb-2 space-y-1.5">
                    <div className="flex items-start justify-between">
                        <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                            {course.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-slate-500 font-semibold text-xs shrink-0 pt-0.5 ml-2">
                            <span className="text-slate-800">{course.rating}</span>
                            <Star className="w-3.5 h-3.5 fill-slate-300 text-slate-300" />
                        </div>
                    </div>

                    <p className="text-xs text-blue-500/80 font-medium">
                        by {course.author}
                    </p>
                </div>
            </div>

            <div className="px-1 pt-2 pb-1 space-y-3">
                <div className="flex items-center gap-3">
                    <div className="bg-[#F4F5F7] text-slate-700 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1.5">
                        <Signal className="w-3 h-3 text-slate-600" />
                        <span>{course.level}</span>
                    </div>

                    <div className="flex items-center">
                        <div className="flex -space-x-2 overflow-hidden">
                            {course.avatars.map((imgUrl, i) => (
                                <img
                                    key={i}
                                    src={imgUrl}
                                    alt="Student"
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                                />
                            ))}
                        </div>
                        <span className="ml-1 bg-[#D9F838] text-slate-900 text-[11px] font-bold px-1.5 py-0.5 rounded-md leading-none shadow-2xs">
                            26+
                        </span>
                    </div>
                </div>

                <div className="pt-1 flex items-baseline">
                    <span className="text-lg font-extrabold text-blue-600 tracking-tight">
                        ${course.price}
                    </span>
                    <span className="text-xs text-slate-400 font-normal">
                        /lifetime
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BuildSkillCard;