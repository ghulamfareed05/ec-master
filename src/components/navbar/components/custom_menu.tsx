import React, { useEffect, useState } from 'react';
import { TbMeat } from 'react-icons/tb';
import { GiChickenLeg, GiFrozenOrb, GiHotSpices, GiFlour, GiHealthPotion, GiFruitBowl } from 'react-icons/gi';
import { MdOutlineBakeryDining } from 'react-icons/md';
import { PiBowlFood } from 'react-icons/pi';
import NavCard from './nav_card';
import axios from 'axios';

interface Type {
  typeName: string;
}

interface Subcategory {
  subcategoryName: string;
  types: Type[];
}

interface Category {
  id?:number;
  icon?: React.ReactNode;
  categoryName:string
  subcategories?: Subcategory[];
}

const CustomMenu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<Category[]>([
    {
      icon: <TbMeat />,
      categoryName: 'Butchers',
      subcategories: [
        {
          subcategoryName: 'Beef',
          types: [
            { typeName:'Beef Ribs' },
            { typeName:'Beef Shoulder'},
          ],
        },
        {
          subcategoryName: 'Chicken',
          types: [
            { typeName:'Chicken Legs'},
            { typeName:'Chickne Wings'},
          ],
        },
      ],
    },
    {
      icon: <GiFruitBowl />,
      categoryName: 'Fruits & Vegetables',
      subcategories: [
        {
          subcategoryName: 'Fruits',
          types: [
            { typeName:'Apples'},
            { typeName:'Bananas'},
            { typeName:'Grapes'},
            { typeName:'Oranges'},
          ],
        },
        {
          subcategoryName: 'Vegetables',
          types: [
            { typeName:'Tomatoes'},
            { typeName:'Cucumber'},
            { typeName:'Carrots'},
            { typeName:'Brocolli'},
          ],
        },
      ],
    },
    {
      icon: <MdOutlineBakeryDining />,
      categoryName: 'Bakery',
      subcategories: [
        {
          subcategoryName: 'Breads',
          types: [
            { typeName: 'Whole Grain Bread' },
            { typeName: 'Sourdough' },
          ],
        },
        {
          subcategoryName: 'Pastries',
          types: [
            { typeName: 'Croissants' },
            { typeName: 'Danishes'},
          ],
        },
      ],
    },
    {
      icon: <PiBowlFood />,
      categoryName: 'Grocery',
      subcategories: [
        {
          subcategoryName: 'Snacks',
          types: [
            { typeName: 'Chips' },
            { typeName: 'Cookies'},
          ],
        },
        {
          subcategoryName: 'Beverages',
          types: [
            { typeName: 'Soda' },
            { typeName: 'Juice' },
          ],
        },
      ],
    },
    {
      icon: <GiFrozenOrb />,
      categoryName: 'Dairy & Frozen',
      subcategories: [
        {
          subcategoryName: 'Dairy',
          types: [
            { typeName: 'Milk' },
            { typeName: 'Cheese' },
          ],
        },
        {
          subcategoryName: 'Frozen',
          types: [
            { typeName: 'Frozen Pizza' },
            { typeName: 'Ice Cream' },
          ],
        },
      ],
    },
    {
      icon: <GiFlour />,
      categoryName: 'Flour & Rice',
      subcategories: [
        {
          subcategoryName: 'Flour',
          types: [
            { typeName: 'All-purpose Flour' },
            { typeName: 'Whole Wheat Flour' },
          ],
        },
        {
          subcategoryName: 'Rice',
          types: [
            { typeName: 'Basmati Rice'  },
            { typeName: 'Jasmine Rice'  },
          ],
        },
      ],
    },
    {
      icon: <GiHotSpices />,
      categoryName: 'Spices & Seasoning',
      subcategories: [
        {
          subcategoryName: 'Spices',
          types: [
            { typeName: 'Pepper' },
            { typeName: 'Turmeric' },
          ],
        },
        {
          subcategoryName: 'Seasonings',
          types: [
            { typeName: 'Italian Seasoning'},
            { typeName: 'BBQ Seasoning' },
          ],
        },
      ],
    },
    {
      icon: <GiHealthPotion />,
      categoryName: 'Health, Beauty & Household',
      subcategories: [
        {
          subcategoryName: 'Health',
          types: [
            { typeName: 'Vitamins'},
            { typeName: 'Supplements'},
          ],
        },
        {
          subcategoryName: 'Beauty',
          types: [
            { typeName: 'Skincare'},
            { typeName: 'Haircare'},
          ],
        },
        {
          subcategoryName: 'Household',
          types: [
            { typeName: 'Cleaning Supplies'},
            { typeName: 'Paper Products'},
          ],
        },
      ],
    },
    {
      icon: <GiChickenLeg />,
      categoryName: 'BBQ',
      subcategories: [
        {
          subcategoryName: 'BBQ Essentials',
          types: [
            { typeName: 'Charcoal',},
            { typeName: 'BBQ Sauce',},
          ],
        },
      ],
    },
    
  ]);

  // function generateLink(pathname: string, query: Record<string, string>) {
  //   if (typeof window !== 'undefined') {
  //     const url = new URL(pathname, window.location.origin);
  //     Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
  //     return url.toString();
  //   } else {
  //     return '';
  //   }
  // }
  
  const fetchMenu=async ()=>{
    try {
      const response =await axios.get('http://localhost:3000/categories/getCategoriesForMenu');
      setMenuItems(response.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchMenu();
  }, [])
  
  
  return (
    <div className=" flex flex-row justify-center items-center gap-5">

      <div className="flex justify-center items-center gap-5">
        {menuItems.map((item, index) => (
          <NavCard
            key={index}
            icon={item.icon}
            categoryName={item.categoryName}
            subcategories={item.subcategories}
          />
        ))}
      </div>
      <div className='relative -top-2 mt-2'><NavCard categoryName={`Offers`} /></div>
    </div>
  );
};

export default CustomMenu;
