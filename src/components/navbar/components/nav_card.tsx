// src/components/NavItem.tsx
import React from 'react';
import Link from 'next/link';

interface Type {
  typeName: string;
}
interface Subcategory {
  subcategoryName: string;
  types: Type[];
}
interface Category {
  icon?: React.ReactNode;
  categoryName: string;
  className?: string
  subcategories?: Subcategory[];
}

const NavCard: React.FC<Category> = ({ icon, categoryName,className,subcategories }) => {
  const encodedCategory = encodeURIComponent(categoryName);
  const path=categoryName==='Butchers'?'/meat':'/products';
  const query = categoryName === 'Butchers' ? {} : { category: encodedCategory };
  return (
    <div className="relative group">
    <Link href={{pathname:path ,query:query}}>
      <div className={`flex flex-col justify-center items-center px-12 py-8 text-zinc-800 bg-slate-50 rounded-md cursor-pointer text-center w-20 h-20 mt-5 hover:bg-red-800 hover:text-red-50  shadow-sm shadow-red-50 hover:shadow-md hover:scale-105 transition-all ease-in-out duration-500 ${className}`}>
        <div className='text-xl'>{icon}</div>
        <div className='text-sm'>{categoryName.toUpperCase()}</div>
        
      </div>
    </Link>
    {subcategories && subcategories.length > 0 && (
          <div className='mt-2'>
        <div className="absolute  top-full hidden group-hover:flex bg-white shadow-md rounded-md w-max">
          {subcategories.map((category, index) => (
            <div key={index} className="p-3">
              <Link href={{pathname:'/products',query:{subcategory:encodeURIComponent(category.subcategoryName)}}} className=" mb-1 text-sm font-extrabold ">{category.subcategoryName.toUpperCase()}</Link>
              <ul>
                {category.types.map((item, itemIndex) => (
                  <li key={itemIndex} className="hover:underline text-sm hover:text-red-800 ">
                    <Link className='hover:tracking-wide text-xs font-semibold hover:scale-110 transition-all ease-linear duration-300' href={{pathname:'/products',query:{type:encodeURIComponent(item.typeName)}}}>{item.typeName.toUpperCase()}</Link>
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
