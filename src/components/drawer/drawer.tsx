"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProfileDetails from './components/profile_details';
import { TbMeat } from 'react-icons/tb';
import { GiChickenLeg, GiFrozenOrb, GiHotSpices, GiFlour, GiHealthPotion, GiFruitBowl } from 'react-icons/gi';
import { MdOutlineBakeryDining } from 'react-icons/md';
import { PiBowlFood } from 'react-icons/pi';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { CLientServices } from '@/services/user';

interface Type {
  typeName: string;
}

interface Subcategory {
  subcategoryName: string;
  types?: Type[];
}

interface Category {
  icon?: React.ReactNode;
  categoryName: string;
  subcategories?: Subcategory[];
}

const Drawer: React.FC = () => {
  const [menuItems, setMenuItems] = useState<Category[]>([
  ]);

  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [currentSubcategory, setCurrentSubcategory] = useState<Subcategory | null>(null);

  useEffect(() => {
    try {
      const fetchMenu=async()=>{
        const response =await CLientServices.generateMenu();
        setMenuItems(response.data);
      }
      fetchMenu();
    } catch (error) {
      alert(error);
    }

  }, []);

  return (
    <div>
      <div className="drawer z-20">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <label htmlFor="my-drawer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content rounded-r-3xl">
            <ProfileDetails />
            {currentCategory === null && menuItems.map((item, index) => (
              <li key={index} onClick={() => setCurrentCategory(item)}>
                <div className="flex items-center justify-between cursor-pointer relative -left-1 h-12 hover:bg-gray-200  ">
                      <div className='flex items-center justify-center gap-2'>
                        <div className='textred text-xl'>{item.icon}</div>
                        <div >{item.categoryName.toUpperCase()}</div>
                      </div>
                      <FaChevronRight className='textred text-sm'/>
                </div>
              </li>
            ))}
            {currentCategory !== null && currentSubcategory === null && (
              <>
                <li onClick={() => setCurrentCategory(null)}>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FaChevronLeft />
                    <span>Back</span>
                  </div>
                </li>
                {currentCategory.subcategories?.map((categoryName, catIndex) => (
                  <li key={catIndex} onClick={() => setCurrentSubcategory(categoryName)}>
                    <div className="flex items-center justify-between gap-2 cursor-pointer h-12 hover:bg-gray-200">
                      <span>{categoryName.subcategoryName.toUpperCase()}</span>
                      <FaChevronRight />
                    </div>
                  </li>
                ))}
              </>
            )}
            {currentSubcategory !== null && (
              <>
                <li onClick={() => setCurrentSubcategory(null)}>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FaChevronLeft />
                    <span>Back</span>
                  </div>
                </li>
                {currentSubcategory.types?.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={{pathname:'/products',query:{type:encodeURIComponent(subItem.typeName)}}}>
                      <div className="flex items-center justify-between gap-2 cursor-pointer hover:tracking-wider hover:text-red-800 hover:underline transition-all ease-in-out duration-300 ">
                        {subItem.typeName.toUpperCase()}
                      </div>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;


// { icon: <TbMeat />, categoryName: 'Butchers', subcategories: [] },
// { icon: <GiFruitBowl />, categoryName: 'Fruits & Vegetables', subcategories: [] },
// { icon: <MdOutlineBakeryDining />, categoryName: 'Bakery', subcategories: [] },
// { icon: <PiBowlFood />, categoryName: 'Grocery', subcategories: [] },
// { icon: <GiFrozenOrb />, categoryName: 'Dairy & Frozen',  subcategories: [] },
// { icon: <GiFlour />, categoryName: 'Flour & Rice',  subcategories: [] },
// { icon: <GiHotSpices />, categoryName: 'Spices & Seasoning',  subcategories: [] },
// { icon: <GiHealthPotion />, categoryName: 'Health, Beauty & Household',  subcategories: [] },
// { icon: <GiChickenLeg />, categoryName: 'BBQ',  subcategories: [] },
// { icon: null, categoryName: 'Offers',  subcategories: [] }