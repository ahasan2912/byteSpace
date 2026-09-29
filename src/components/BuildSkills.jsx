import { useState } from "react";
import { ALL_COURSES, CATEGORIES } from "../lib/data";
import BuildSkillCard from "./BuildSkillCard";

const BuildSkills = () => {
    const [selectedCategory, setSelectedCategory] = useState('Featured');
    const [showAllCategories, setShowAllCategories] = useState(false);

    // Filter courses logic based on selected tag
    const filteredCourses = ALL_COURSES.filter((course) => {
        if (selectedCategory === 'Featured') {
            return course.isFeatured;
        }
        return course.category === selectedCategory;
    });
    return (
        <div className="min-h-screen bg-white py-18 px-4 sm:px-6 lg:px-8 font-sans antialiased text-[#040819]">
            <div className="max-w-6xl mx-auto space-y-12">
                <header className="text-center max-w-240 mx-auto space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#040819] leading-tight">
                        Discover Your Passion,<br className="hidden sm:inline" /> Build Your Skills
                    </h1>
                    <p className="text-[#82868E] text-sm sm:text-lg leading-relaxed px-2">
                        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                    </p>
                </header>
                <section className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto transition-all duration-300">
                        {CATEGORIES.map((cat) => {
                            const isActive = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none ${isActive
                                        ? 'bg-[#CBF328] text-slate-900 font-semibold shadow-sm scale-105'
                                        : 'bg-[#F2F3F5] text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                                        }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}

                        {/* "+ More" pill button */}
                        <button
                            onClick={() => setShowAllCategories(!showAllCategories)}
                            className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-blue-600 bg-[#F2F3F5] hover:bg-slate-200/80 transition-all cursor-pointer flex items-center space-x-1"
                        >
                            <span>+ More</span>
                        </button>
                    </div>
                </section>
                <main>
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                            {filteredCourses.map((course) => (
                                <BuildSkillCard key={course.id} course={course} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
                            <p className="text-slate-500 text-sm">No courses currently listed for <span className="font-semibold text-slate-900">"{selectedCategory}"</span>.</p>
                            <button
                                onClick={() => setSelectedCategory('Featured')}
                                className="mt-3 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                            >
                                Back to Featured
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default BuildSkills;