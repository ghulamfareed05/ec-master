import React, { useState } from 'react';
import { TbMeat } from 'react-icons/tb';
import { GiChickenLeg, GiFrozenOrb, GiHotSpices, GiFlour, GiHealthPotion, GiFruitBowl } from 'react-icons/gi';
import { MdOutlineBakeryDining } from 'react-icons/md';
import { PiBowlFood } from 'react-icons/pi';
import NavCard from './nav_card';

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

const CustomMenu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      icon: <TbMeat />,
      text: 'Butchers',
      link: '/',
      submenu: [
        {
          heading: 'Beef',
          items: [
            { text: 'Beef Steak', link: '/' },
            { text: 'Beef Ribs', link: '/' },
          ],
        },
        {
          heading: 'Chicken',
          items: [
            { text: 'Chicken Breast', link: '/' },
            { text: 'Chicken Wings', link: '/' },
          ],
        },
      ],
    },
    {
      icon: <GiFruitBowl />,
      text: 'Fruits & Vegetables',
      link: '/',
      submenu: [
        {
          heading: 'Fruits',
          items: [
            { text: 'Apples', link: '/' },
            { text: 'Bananas', link: '/' },
            { text: 'Grapes', link: '/' },
            { text: 'Oranges', link: '/' },
          ],
        },
        {
          heading: 'Vegetables',
          items: [
            { text: 'Tomatoes', link: '/' },
            { text: 'Cucumbers', link: '/' },
            { text: 'Carrots', link: '/' },
            { text: 'Peppers', link: '/' },
          ],
        },
      ],
    },
    {
      icon: <MdOutlineBakeryDining />,
      text: 'Bakery',
      link: '/',
      submenu: [
        {
          heading: 'Breads',
          items: [
            { text: 'Whole Grain Bread', link: '/' },
            { text: 'Sourdough', link: '/' },
          ],
        },
        {
          heading: 'Pastries',
          items: [
            { text: 'Croissants', link: '/' },
            { text: 'Danishes', link: '/' },
          ],
        },
      ],
    },
    {
      icon: <PiBowlFood />,
      text: 'Grocery',
      link: '/',
      submenu: [
        {
          heading: 'Snacks',
          items: [
            { text: 'Chips', link: '/' },
            { text: 'Cookies', link: '/' },
          ],
        },
        {
          heading: 'Beverages',
          items: [
            { text: 'Soda', link: '/' },
            { text: 'Juice', link: '/' },
          ],
        },
      ],
    },
    {
      icon: <GiFrozenOrb />,
      text: 'Dairy & Frozen',
      link: '/',
      submenu: [
        {
          heading: 'Dairy',
          items: [
            { text: 'Milk', link: '/' },
            { text: 'Cheese', link: '/' },
          ],
        },
        {
          heading: 'Frozen',
          items: [
            { text: 'Frozen Pizza', link: '/' },
            { text: 'Ice Cream', link: '/' },
          ],
        },
      ],
    },
    {
      icon: <GiFlour />,
      text: 'Flour & Rice',
      link: '/',
      submenu: [
        {
          heading: 'Flour',
          items: [
            { text: 'All-purpose Flour', link: '/' },
            { text: 'Whole Wheat Flour', link: '/' },
          ],
        },
        {
          heading: 'Rice',
          items: [
            { text: 'Basmati Rice', link: '/' },
            { text: 'Jasmine Rice', link: '/' },
          ],
        },
      ],
    },
    {
      icon: <GiHotSpices />,
      text: 'Spices & Seasoning',
      link: '/',
      submenu: [
        {
          heading: 'Spices',
          items: [
            { text: 'Pepper', link: '/' },
            { text: 'Turmeric', link: '/' },
          ],
        },
        {
          heading: 'Seasonings',
          items: [
            { text: 'Italian Seasoning', link: '/' },
            { text: 'BBQ Seasoning', link: '/' },
          ],
        },
      ],
    },
    {
      icon: <GiHealthPotion />,
      text: 'Health, Beauty & Household',
      link: '/',
      submenu: [
        {
          heading: 'Health',
          items: [
            { text: 'Vitamins', link: '/' },
            { text: 'Supplements', link: '/' },
          ],
        },
        {
          heading: 'Beauty',
          items: [
            { text: 'Skincare', link: '/' },
            { text: 'Haircare', link: '/' },
          ],
        },
        {
          heading: 'Household',
          items: [
            { text: 'Cleaning Supplies', link: '/' },
            { text: 'Paper Products', link: '/' },
          ],
        },
      ],
    },
    {
      icon: <GiChickenLeg />,
      text: 'BBQ',
      link: '/',
      submenu: [
        {
          heading: 'BBQ Essentials',
          items: [
            { text: 'Charcoal', link: '/' },
            { text: 'BBQ Sauce', link: '/' },
          ],
        },
      ],
    },
    
  ]);



  
  return (
    <div className=" flex flex-row justify-center items-center gap-5">

      <div className="flex justify-center items-center gap-5">
        {menuItems.map((item, index) => (
          <NavCard
            key={index}
            icon={item.icon}
            text={item.text}
            link={item.link}
            submenu={item.submenu}
          />
        ))}
      </div>
      <div className='relative -top-3 mt-1'><NavCard text={`Offers`} link={`/`} /></div>
    </div>
  );
};

export default CustomMenu;
