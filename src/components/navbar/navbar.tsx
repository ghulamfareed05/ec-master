"use client";

import Drawer from "../drawer/drawer";
import SearchBar from "./components/search_bar";
import CustomMenu from "./components/custom_menu";
import TopNavbar from "./components/top_navbar";
import ViewCart from "./components/view_cart";
import { useEffect, useState } from "react";
import icon from "../../../public/images/main_icon.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MeatNavbar from "./components/MeatNavbar";

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingDown(currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarHeight = 100;

  const navbarStyle: React.CSSProperties = {
    top: scrollingDown ? `-${navbarHeight}px` : "0",
    position: "fixed",
    zIndex: 10,
    transition: "top 0.3s ease-in-out",
  };

  const contentStyle: React.CSSProperties = {
    paddingTop: scrollingDown ? `${navbarHeight}px` : "0",
  };

  const pathname=usePathname();

  return (
    <div>
      <div className="w-full" style={navbarStyle}>
        <TopNavbar />
        <div className="navbar bg-white justify-between ">
          <div className="flex lg:hidden">
            <div>
              <Drawer />
            </div>
          </div>
          <div>
            <a
              className="btn btn-ghost text-xl lg:text-2xl ml-2 lg:ml-0"
              href="/"
            >
              <Image src={icon} alt="logo" width={250} height={50} />
            </a>
          </div>
          <div className="hidden lg:flex">
            <SearchBar />
          </div>

          <div className="flex items-center">
            <ViewCart />
          </div>
        </div>

        <div className={` ${pathname=='/meat'? `bg-zinc-900 h-2`:``} navbar fixed bg-white z-10`}>
          <div className={pathname==='/meat'? 'w-full flex justify-center h-20 items-center rounded-md': `w-full flex justify-center h-28 items-center`}>
            <div className=" hidden lg:flex">
              {pathname!='/meat'? <CustomMenu />: <MeatNavbar/>}
            </div>
            <div className="flex-1 lg:hidden">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
