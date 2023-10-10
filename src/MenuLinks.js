import { useEffect, useState } from "react";
import ProductMenu from "./ProductMenu";
import ResourcesMenu from "./ResourcesMenu";
import MenuMenu from "./MenuMenu";

export default function MenuLinks(props) {
  const [productHover, setProductHover] = useState(false);
  const [resourcesHover, setResourcesHover] = useState(false);
  const [menuHover, setMenuHover] = useState(false);

  const handleBtnClick = () => {
    // props.setLogoCollapsed(!props.logoCollapsed);
    // setMenuCollapsed(!menuCollapsed);
  };

  useEffect(() => {}, []);

  return (
    <ul
      className={`menu-links ${
        props.logoCollapsed ? "collapsed-ul" : ""
      } px-2 flex bg-white text-rp rounded-custom relative`}
    >
      <li
        className={`hidden md:flex nav-li items-center px-3`}
        onMouseEnter={() => setProductHover(true)}
        onMouseLeave={() => setProductHover(false)}
      >
        <a href="/">Platform</a>
        {productHover && <ProductMenu />}
      </li>
      <li
        className={`hidden md:flex nav-li items-center px-3`}
        onMouseEnter={() => setResourcesHover(true)}
        onMouseLeave={() => setResourcesHover(false)}
      >
        <a href="/about">Resources</a>
        {resourcesHover && <ResourcesMenu />}
      </li>
      <li className={`hidden md:flex nav-li items-center px-3`}>
        <a href="/about">Pricing</a>
      </li>
      <li className={`hidden md:flex nav-li items-center px-3`}>
        <a href="/about">Country explorer</a>
      </li>
      <li
        className="nav-li flex items-center px-3 "
        onMouseEnter={() => setMenuHover(true)}
        onMouseLeave={() => setMenuHover(false)}
      >
        <button onClick={handleBtnClick}>Menu</button>
        {menuHover && <MenuMenu />}
      </li>
    </ul>
  );
}
