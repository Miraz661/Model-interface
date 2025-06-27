import navlogo from "../assets/model-interface-nav-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full h-fit flex items-center justify-center fixed top-0 left-0 z-[10] bg-slate-50 shadow-md">
      <div className="w-full py-2 px-5 max-w-[1250px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={navlogo} alt="Nav logo" className="w-[50px]" />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium text-slate-700">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
