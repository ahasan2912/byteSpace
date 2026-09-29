import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white text-slate-800 font-sans py-16 px-6 sm:px-12 lg:px-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#CCFF00] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-slate-900 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900 font-sans">
                ByteSpace
              </span>
            </div>

            {/* Newsletter Text */}
            <p className="text-slate-600 text-sm leading-relaxed max-w-md font-normal">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input + Button */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-3 rounded-full border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-[#CCFF00] hover:bg-[#b8e600] text-slate-950 font-medium text-sm transition-all duration-200 shadow-2xs shrink-0 cursor-pointer text-center"
              >
                Search
              </button>
            </form>

            {/* Fine Print */}
            <p className="text-slate-400 text-[11px] leading-relaxed max-w-md">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
            
            {/* Nav Column 1 */}
            <div className="space-y-4">
              <ul className="space-y-3.5 text-sm text-slate-700 font-normal">
                <li><a href="#" className="hover:text-slate-950 transition-colors">Featured Courses</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Featured Categories</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">IT</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Design</a></li>
              </ul>
            </div>

            {/* Nav Column 2 */}
            <div className="space-y-4">
              <ul className="space-y-3.5 text-sm text-slate-700 font-normal">
                <li><a href="#" className="hover:text-slate-950 transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Photography</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Finance</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Sport</a></li>
              </ul>
            </div>

            {/* Nav Column 3 */}
            <div className="space-y-4">
              <ul className="space-y-3.5 text-sm text-slate-700 font-normal">
                <li><a href="#" className="hover:text-slate-950 transition-colors">Become a Creator</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Help</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">About</a></li>
              </ul>
            </div>

          </div>

        </div>

        {}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <div>
            @ 2023 ByteSpace. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}