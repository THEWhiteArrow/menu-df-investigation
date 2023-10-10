import { useState } from "react";
import "./Menu.css";
import { ReactComponent as MenuLogo } from "./menu_logo.svg";

const Menu = () => {
  const [logoCollapsed, setLogoCollapsed] = useState(false);

  return (
    <nav className="Menu flex fixed m-5">
      <div
        className={`logo flex items-center text-white bg-rp rounded-custom ${
          logoCollapsed ? "collapsed" : ""
        }`}
      >
        <MenuLogo
          className={`menu-svg ${logoCollapsed ? "collapsed" : ""}`}
          width={logoCollapsed ? "44" : "145"}
          height="44"
        />
      </div>

      <ul className="flex bg-white text-rp rounded-custom">
        <li className="flex items-center px-3">
          <a href="/">Platform</a>
        </li>
        <li className="flex items-center px-3">
          <a href="/about">Resources</a>
        </li>
        <li className="flex items-center px-3">
          <a href="/about">Pricing</a>
        </li>
        <li className="flex items-center px-3">
          <a href="/about">Country explorer</a>
        </li>
        <li className="flex items-center px-3 ">
          <button onClick={() => setLogoCollapsed(!logoCollapsed)}>Menu</button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
