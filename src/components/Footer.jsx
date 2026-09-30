import { useState } from 'react';
import footerLogo from '../assets/svg/footer_logo.svg';
import { Link } from 'react-router';

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
    <footer className="w-full bg-white text-slate-800 pt-12 lg:pt-16 pb-5 px-4 border-t border-slate-100 select-text">
      <div className="max-w-300 mx-auto space-y-6 md:space-y-10 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-6 space-y-8">
            <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
              <img src={footerLogo} alt="ByteSpace Logo" className="h-7 md:h-8.5 w-auto" />
            </Link>

            <p className="text-[#242528] text-sm leading-relaxed font-thin">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-row items-stretch sm:items-center gap-1.5 sm:gap-3 max-w-137">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#CCFF00] hover:bg-[#b8e600] text-slate-950 font-medium text-sm transition-all duration-200 shadow-2xs shrink-0 cursor-pointer text-center"
              >
                Search
              </button>
            </form>

            <p className="text-[#242528] text-[11px] font-thin leading-relaxed ">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2 lg:mt-14.5">
            <div className="space-y-4">
              <ul className="space-y-3.5 text-sm text-slate-700 font-normal">
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Featured Courses</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Featured Categories</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Business</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">IT</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Design</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3.5 text-sm text-slate-700 font-normal">
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Development</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Marketing</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Photography</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Finance</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Sport</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3.5 text-sm text-slate-700 font-normal">
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Become a Creator</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Affiliate Program</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Contact</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">Help</Link></li>
                <li><Link to="#" className="hover:text-slate-950 transition-colors">About</Link></li>
              </ul>
            </div>
          </div>

        </div>
        <div className="pt-8 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#242528] font-normal">
          <div>
            @ 2023 ByteSpace. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link to="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-slate-900 transition-colors">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}