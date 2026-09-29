import { Link } from "react-router";
import navbarLogo from "../assets/svg/Header_Logo.svg";

const links = ["Home", "Courses", "Creators"];

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-30 h-23.5 w-full text-white">
      {/* Logo — x:97 y:26 */}
      <Link to="/" className="absolute top-6.5 flex items-center gap-1.75">
        <img src={navbarLogo} alt="ByteSpace Logo" className="h-7 w-auto" />
      </Link>

      {/* Center links — centered at x:586 */}
      <ul className="absolute left-1/2 top-9.25 flex -translate-x-1/2 items-center gap-5 text-[14px] leading-5">
        {links.map((l, i) => (
          <li key={l}>
            <a href="#" className={i === 0 ? "font-medium" : "opacity-90 hover:opacity-100"}>{l}</a>
          </li>
        ))}
      </ul>

      {/* Right — Sign In x:934 */}
      <div className="absolute right-0 top-9.25 flex items-center gap-5 text-[14px] leading-5">
        <a href="#" className="opacity-90 hover:opacity-100">Sign In</a>
        <a href="#" className="opacity-90 hover:opacity-100">Join Us</a>
        <button aria-label="Cart" className="ml-0.75">
          <svg width="15" height="18" viewBox="0 0 15 18" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round">
            <path d="M1 5h13v11.200a.8.8 0 0 1-.8.8H1.800a.8.8 0 0 1-.8-.8V5Z" />
            <path d="M4.500 7.500V4a3 3 0 0 1 6 0v3.500" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
