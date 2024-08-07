import React, { useEffect, useState } from 'react';
import NavbarComponent from './MeatNavbarComponent';
import { Subcategory } from '@/interfaces/meatnavbar_interface';
import axios from 'axios';

// const meatMenu:Subcategory[] = [
//   {
//     subcategoryName: 'Fresh Meats',
//     types: [
//       {
//         typeName: 'Poultry',
//         variants: [
//           { variantName: 'Chicken' },
//           { variantName: 'Offal'},
//           { variantName: 'Turkey'},
//           { variantName: 'Burger & Sausages'},
//         ],
//       },
//       {
//         typeName: 'Lamb',
//         variants: [
//           { variantName: 'Lamb' },
//           { variantName: 'Mutton' },
//           { variantName: 'Goat' },
//           { variantName: 'Offal' },
//           { variantName: 'Burger & Sausages' },
//         ],
//       },
//       {
//         typeName: 'Beef',
//         variants: [
//           { variantName: 'Beef'},
//           { variantName: 'Veal'},
//           { variantName: 'Offal' },
//           { variantName: 'Wagyu' },
//           { variantName: '28 Day Aged' },

//         ],
//       },
//     ],
//   },
//   {
//     subcategoryName: 'Marinated Meats',
//     types: [
//       {
//         typeName: 'Chicken Marination',
//       },
//       {
//         typeName: 'Lamb Marination',
//       },
//       {
//         typeName: 'Beef Marination',
//       },
//     ],
//   },
//   {
//     subcategoryName: 'Cold Meat',
//     types: [
//       {
//         typeName: 'Burger & Sausages',
//       },
//     ],
//   },
//   {
//     subcategoryName: 'Frozen',
//     types: [
//       {
//         typeName: 'Burnage Halal Frozen',
//       },
//       {
//         typeName: 'Frozen',       
//       },
//     ],
//   },
//   {
//     subcategoryName: 'Exotic',
//   },
//   {
//     subcategoryName: 'Ready Meals',
//   },
// ];

const MeatNavbar: React.FC = () => {
  const [meatMenu, setmeatMenu] = useState<Subcategory[]>([]);
  const fetchMenu =async ()=>{
    const response =await axios.get('http://localhost:3000/subcategories/getSubcategoriesForMenu');
    setmeatMenu(response.data);
  }
  useEffect(() => {
    fetchMenu();
  }, [])
  
  return (
    <div>
      <div className='flex justify-around items-center gap-6'>
        {meatMenu.map((item, index) => (
          <React.Fragment key={index}>
            <NavbarComponent {...item} />
            {index < meatMenu.length - 1 && (
              <div className='divider divider-horizontal w-[0.75px] bg-zinc-300'></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MeatNavbar;






// import React from 'react'
// import { useState } from 'react'
// import NavbarComponent from './MeatNavbarComponent'

// const MeatNavbar:React.FC = () => {
//   return (
//     <div>
//       <div className='flex justify-around items-center gap-6 '>
//         <NavbarComponent link='./meat' text='Fresh Meats' />
//         <div className='divider divider-horizontal  w-[0.75px] bg-zinc-300'></div>

//         <NavbarComponent link='./meat' text='Marinated Meats'/>
//         <div className='divider divider-horizontal  w-[0.75px] bg-zinc-300'></div>

//         <NavbarComponent link='./meat' text='Cold Meat'/>
//         <div className='divider divider-horizontal w-[0.75px] bg-zinc-300'></div>

//         <NavbarComponent link='./meat' text='Frozen'/>
//         <div className='divider divider-horizontal  w-[0.75px] bg-zinc-300'></div>

//         <NavbarComponent link='./meat' text='Exotic'/>
//         <div className='divider divider-horizontal  w-[0.75px] bg-zinc-300'></div>

//         <NavbarComponent link='./meat' text='Ready Meals'/>
//       </div>
//     </div>
//   )
// }

// export default MeatNavbar