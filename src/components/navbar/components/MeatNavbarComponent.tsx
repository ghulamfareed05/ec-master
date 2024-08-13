import React, { useState } from 'react';
import NavLink from 'next/link';
import { Subcategory } from '@/interfaces/meatnavbar_interface';
import { IoMdArrowDropright } from "react-icons/io";

const NavbarComponent: React.FC<Subcategory> = ({ subcategoryName, className, types }) => {
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
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavLink href={{ pathname: '/meat', query: { subcategory: encodeURIComponent(subcategoryName) } }} className={`text-white font-medium ${className} hover:text-red-500 hover:border-b-red-700 hover:border-b-4 pb-[18px]  transition-all ease-in-out duration-75`}>
        {subcategoryName.toUpperCase()}
      </NavLink>
      {isHovered && types && (
        <div className="absolute left-0 mt-6 w-48 bg-white shadow-lg">
          <div className='w-28 h-6 fixed -mt-6'></div>
          {types.map((type, id) => (
            <div className='relative group' key={id} onMouseEnter={() => handleSubmenuEnter(id)} onMouseLeave={handleSubmenuLeave}>
              <div className="text-xs font-bold border-b-2 group-hover:bg-red-100 group-hover:border-b-0 group-hover:text-red-600 group-hover:border-l-4 group-hover:border-red-600 flex justify-between items-center cursor-pointer transition-all ease-in-out duration-100"><NavLink className='px-5 py-4 w-full' href={{pathname:'/meat',query:{type:encodeURIComponent(type.typeName)}}}>{type.typeName.toUpperCase()}</NavLink>{type.variants?.length?<IoMdArrowDropright className='text-lg mr-5'/>:null}</div>
              {hoveredSubmenu === id && type.variants && (
                <div className="absolute left-full top-0 mt-0 w-max bg-white shadow-lg">
                  {type.variants.map((variant, id) => (
                    <div key={id}>
                      <NavLink href={{ pathname:'/meat', query: { variant: encodeURIComponent(variant.variantName) } }} className="block px-5 py-4 hover:bg-red-100 border-b-2 hover:border-l-4 hover:border-red-600 hover:border-b-0 text-xs font-bold transition-all ease-in-out duration-100">
                        {variant.variantName.toUpperCase()}
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