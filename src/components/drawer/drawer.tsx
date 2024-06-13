"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProfileDetails from './components/profile_details';
import { TbMeat } from 'react-icons/tb';
import { GiChickenLeg, GiFrozenOrb, GiHotSpices, GiFlour, GiHealthPotion, GiFruitBowl } from 'react-icons/gi';
import { MdOutlineBakeryDining } from 'react-icons/md';
import { PiBowlFood } from 'react-icons/pi';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface SubmenuItem {
  text: string;
  link: string;
}

interface SubmenuCategory {
  heading: string;
  items: SubmenuItem[];
}

interface MenuItem {
  icon: React.ReactNode;
  text: string;
  link: string;
  submenu?: SubmenuCategory[];
}

const Drawer: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { icon: <TbMeat />, text: 'Butchers', link: '/', submenu: [] },
    { icon: <GiFruitBowl />, text: 'Fruits & Vegetables', link: '/', submenu: [] },
    { icon: <MdOutlineBakeryDining />, text: 'Bakery', link: '/', submenu: [] },
    { icon: <PiBowlFood />, text: 'Grocery', link: '/', submenu: [] },
    { icon: <GiFrozenOrb />, text: 'Dairy & Frozen', link: '/', submenu: [] },
    { icon: <GiFlour />, text: 'Flour & Rice', link: '/', submenu: [] },
    { icon: <GiHotSpices />, text: 'Spices & Seasoning', link: '/', submenu: [] },
    { icon: <GiHealthPotion />, text: 'Health, Beauty & Household', link: '/', submenu: [] },
    { icon: <GiChickenLeg />, text: 'BBQ', link: '/', submenu: [] },
    { icon: null, text: 'Offers', link: '/', submenu: [] }
  ]);

  const [currentCategory, setCurrentCategory] = useState<MenuItem | null>(null);
  const [currentSubcategory, setCurrentSubcategory] = useState<SubmenuCategory | null>(null);

  useEffect(() => {
    const dummyData = [
      {
        category: 'Butchers',
        submenu: [
          { heading: 'Beef', items: [{ text: 'Ground Beef', link: '/' }, { text: 'Steak', link: '/' }] },
          { heading: 'Chicken', items: [{ text: 'Drumsticks', link: '/' }, { text: 'Breasts', link: '/' }] }
        ]
      },
      {
        category: 'Fruits & Vegetables',
        submenu: [
          { heading: 'Fruits', items: [{ text: 'Apples', link: '/' }, { text: 'Bananas', link: '/' }] },
          { heading: 'Vegetables', items: [{ text: 'Tomatoes', link: '/' }, { text: 'Cucumbers', link: '/' }] }
        ]
      },
      {
        category: 'Bakery',
        submenu: [
          { heading: 'Bread', items: [{ text: 'White Bread', link: '/' }, { text: 'Whole Wheat Bread', link: '/' }] },
          { heading: 'Pastries', items: [{ text: 'Croissants', link: '/' }, { text: 'Muffins', link: '/' }] }
        ]
      },
      {
        category: 'Grocery',
        submenu: [
          { heading: 'Canned Goods', items: [{ text: 'Tomato Sauce', link: '/' }, { text: 'Beans', link: '/' }] },
          { heading: 'Snacks', items: [{ text: 'Chips', link: '/' }, { text: 'Nuts', link: '/' }] }
        ]
      },
      {
        category: 'Dairy & Frozen',
        submenu: [
          { heading: 'Dairy', items: [{ text: 'Milk', link: '/' }, { text: 'Cheese', link: '/' }] },
          { heading: 'Frozen Foods', items: [{ text: 'Ice Cream', link: '/' }, { text: 'Frozen Pizza', link: '/' }] }
        ]
      },
      {
        category: 'Flour & Rice',
        submenu: [
          { heading: 'Flour', items: [{ text: 'All-Purpose Flour', link: '/' }, { text: 'Whole Wheat Flour', link: '/' }] },
          { heading: 'Rice', items: [{ text: 'Basmati', link: '/' }, { text: 'Jasmine', link: '/' }] }
        ]
      },
      {
        category: 'Spices & Seasoning',
        submenu: [
          { heading: 'Spices', items: [{ text: 'Cumin', link: '/' }, { text: 'Turmeric', link: '/' }] },
          { heading: 'Seasonings', items: [{ text: 'Salt', link: '/' }, { text: 'Pepper', link: '/' }] }
        ]
      },
      {
        category: 'Health, Beauty & Household',
        submenu: [
          { heading: 'Health', items: [{ text: 'Vitamins', link: '/' }, { text: 'Supplements', link: '/' }] },
          { heading: 'Beauty', items: [{ text: 'Shampoo', link: '/' }, { text: 'Conditioner', link: '/' }] }
        ]
      },
      {
        category: 'BBQ',
        submenu: [
          { heading: 'Grills', items: [{ text: 'Charcoal Grill', link: '/' }, { text: 'Gas Grill', link: '/' }] },
          { heading: 'Accessories', items: [{ text: 'Tongs', link: '/' }, { text: 'Spatula', link: '/' }] }
        ]
      },
      {
        category: 'Offers',
        submenu: []
      }
    ];

    const updatedMenuItems = menuItems.map(item => {
      const submenuData = dummyData.find((submenu: any) => submenu.category === item.text);
      return submenuData ? { ...item, submenu: submenuData.submenu } : item;
    });

    setMenuItems(updatedMenuItems);
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
                        <div >{item.text}</div>
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
                {currentCategory.submenu?.map((category, catIndex) => (
                  <li key={catIndex} onClick={() => setCurrentSubcategory(category)}>
                    <div className="flex items-center justify-between gap-2 cursor-pointer h-12 hover:bg-gray-200">
                      <span>{category.heading}</span>
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
                {currentSubcategory.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.link}>
                      <div className="flex items-center justify-between gap-2 cursor-pointer hover:tracking-wider hover:text-red-800 hover:underline transition-all ease-in-out duration-300 ">
                        {subItem.text}
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
