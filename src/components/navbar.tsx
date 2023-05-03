import { useTheme as useNextTheme } from "next-themes";
import { Switch, Link, useTheme } from "@nextui-org/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar({ overlap = false }) {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <nav className={overlap ? "fixed w-full" : ""}>
      <div className="navbar_div">
        <span className="navbar_title">SuperTODO</span>
        <div className="navbar_items">
          <ul className="navbar_ul">
            <li>
              <Link color="primary" href="#" className="navbar_link">
                Home
              </Link>
            </li>
            <li>
              <Link color="primary" href="#" className="navbar_link">
                About
              </Link>
            </li>
            <li>
              <Switch
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
                bordered
                iconOn={<MdDarkMode />}
                iconOff={<MdLightMode />}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
