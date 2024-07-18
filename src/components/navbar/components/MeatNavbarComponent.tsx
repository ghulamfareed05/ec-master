import React, { useState } from 'react';
import NavLink from 'next/link';
import { MeatNavInterface } from '@/interfaces/meatnavbar_interface';
import { IoMdArrowDropright } from "react-icons/io";

const NavbarComponent: React.FC<MeatNavInterface> = ({ index, text, link, className, menu }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<number | null>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredSubmenu(null);
  };

  const handleSubmenuEnter = (index: number) => setHoveredSubmenu(index);
  const handleSubmenuLeave = () => setHoveredSubmenu(null);

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavLink href={{ pathname: link, query: { category: text } }} className={`text-white font-medium ${className} hover:text-red-500 group-hover:border-b-red-700 group-hover:border-b-4 pb-[18px]  transition-all ease-in-out duration-75`}>
        {text}
      </NavLink>
      {isHovered && menu && (
        <div className="absolute left-0 mt-6 w-48 bg-white shadow-lg">
          <div className='w-28 h-6 fixed -mt-6'></div>
          {menu.map((submenu, subIndex) => (
            <div  key={subIndex} onMouseEnter={() => handleSubmenuEnter(subIndex)} onMouseLeave={handleSubmenuLeave}>
              <div className="px-5 py-4 text-xs font-bold border-b-2 hover:bg-red-100 hover:border-b-0 hover:text-red-600  hover:border-l-4 hover:border-red-600 flex justify-between items-center cursor-pointer"><NavLink href={{pathname:submenu.link,query:{category:submenu.category}}}>{submenu.category}</NavLink>{submenu.submenu?<IoMdArrowDropright className='text-sm'/>:null}</div>
              {hoveredSubmenu === subIndex && submenu.submenu && (
                <div className="absolute left-48 top-0 mt-0 w-max bg-white shadow-lg">
                  {submenu.submenu.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <NavLink href={{ pathname: item.link, query: { category: item.text } }} className="block px-5 py-4 hover:bg-red-100 border-b-2 hover:border-l-4 hover:border-red-600 hover:border-b-0 text-xs font-bold">
                        {item.text}
                      </NavLink>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;