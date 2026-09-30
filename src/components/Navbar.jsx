import { useState } from "react";
import { Link } from "react-router";
import navbarLogo from "../assets/svg/Header_Logo.svg";
import headerBag from "../assets/svg/header_bag.svg";

const links = ["Home", "Courses", "Creators"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative top-0 left-0 z-50 flex w-full items-center justify-between px-4 pb-2 sm:pb-0 sm:py-5 text-white">
      <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
        <img src={navbarLogo} alt="ByteSpace Logo" className="h-7 md:h-8.5 w-auto" />
      </Link>

      {/* Center: Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] font-normal tracking-wide">
        {links.map((l, i) => (
          <li key={l}>
            <Link
              to="#"
              className={`transition-colors ${i === 0
                  ? "font-medium text-white"
                  : "text-white/80 hover:text-white"
                }`}
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: Actions */}
      <div className="flex items-center gap-4 md:gap-6 text-[14px] md:text-[15px] font-normal">
        <Link to="#" className="hidden sm:inline-block text-white/85 transition-colors hover:text-white">
          Sign In
        </Link>
        <Link
          to="#"
          className="hidden sm:inline-block rounded-full bg-white/10 px-4 py-2 sm:bg-transparent sm:p-0 text-white transition-colors hover:bg-white/20 sm:hover:bg-transparent hover:text-white"
        >
          Join Us
        </Link>
        <button
          aria-label="Cart"
          className="flex items-center justify-center p-1 transition-transform hover:scale-105"
        >
          <img src={headerBag} alt="Shopping Cart" className="h-4.5 w-auto" />
        </button>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 focus:outline-none text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0338E3]/95 backdrop-blur-md p-6 flex flex-col gap-4 shadow-xl md:hidden border-t border-white/10">
          {links.map((l, i) => (
            <Link
              to={l}
              href="#"
              className={`text-base transition-colors ${i === 0 ? "font-semibold text-white" : "text-white/80 hover:text-white"
                }`}
            >
              {l}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="#"
              className="text-white/80 hover:text-whit font-semibolde"
            >
              Join Us
            </Link>
            <Link to="#" className="text-white/80 hover:text-white font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}