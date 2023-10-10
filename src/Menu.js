import { useEffect, useState } from "react";
import "./Menu.css";
import { ReactComponent as MenuLogo } from "./menu_logo.svg";
import MenuLinks from "./MenuLinks";

const Menu = () => {
  const [logoCollapsed, setLogoCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      const threshold = 500;

      if (window.scrollY > threshold && !logoCollapsed) {
        setLogoCollapsed(true);
      }
      if (window.scrollY <= threshold && logoCollapsed) {
        setLogoCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [logoCollapsed, setLogoCollapsed]);

  return (
    <>
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

        <div
          className={`menu-connection flex flex-col w-3 h-[44px]  ${
            logoCollapsed ? "collapsed" : ""
          }`}
        >
          {/* <div className="inline-block w-full h-1/3 bg-rb top" />
          <div className="inline-block w-full h-1/3 middle" />
          <div className="inline-block w-full h-1/3 bg-rb bottom" /> */}

          <div className="inline-block w-full h-1/2 bg-white top" />
          <div className="inline-block w-full h-1/2 bg-white bottom" />
        </div>

        <MenuLinks
          logoCollapsed={logoCollapsed}
          setLogoCollapsed={setLogoCollapsed}
        />
      </nav>
    </>
  );
};

export default Menu;
