import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(true);
  return (
    <nav className="navbar_main">
      <div className="navbar_div">
        <span className="navbar_title">SuperTODO</span>
        <button className="navbar_button" onClick={(_) => setMenu(!menu)}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <div className={`${menu ? "" : "hidden"} navbar_items`}>
          <ul className="navbar_ul">
            <li>
              <a href="#" className="navbar_link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navbar_link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="navbar_link">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
