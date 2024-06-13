// src/components/NavItem.tsx
import React from 'react';
import Link from 'next/link';

interface SubmenuItem {
  text: string;
  link: string;
}

interface SubmenuCategory {
  heading: string;
  items: SubmenuItem[];
}
interface NavcardInterface {
  icon?: React.ReactNode;
  text: string;
  link: string;
  className?: string
  submenu?: SubmenuCategory[];
}

const NavCard: React.FC<NavcardInterface> = ({ icon, text, link,className,submenu }) => {
  return (
    <div className="relative group">
    <Link href={link} >
      <div className={`flex flex-col justify-center items-center px-12 py-8 text-zinc-800 bg-red-50 rounded-md cursor-pointer text-center w-20 h-28 hover:bg-red-800 hover:text-red-50 transition ease-in-out duration-300 ${className}`}>
        <div className='text-xl'>{icon}</div>
        <div className='text-sm'>{text}</div>
        
      </div>
    </Link>
    {/* <div className='bg-yellow-200 h-8 w-8 relative top-5'></div> */}
    {submenu && submenu.length > 0 && (
          <div className='mt-5'>
        <div className="absolute   top-full hidden group-hover:flex bg-white shadow-md rounded-md w-max">
          {/* <div className='bg-yellow-200 max-h-56 w-28 relative -top-12'></div> */}
          {submenu.map((category, index) => (
            <div key={index} className="p-3">
              <h4 className=" mb-1 text-bold ">{category.heading}</h4>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="hover:underline text-sm hover:text-red-800 ">
                    <Link href={item.link}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        
        </div>
        </div>
        
      )}
  </div>
  );
};

export default NavCard;
