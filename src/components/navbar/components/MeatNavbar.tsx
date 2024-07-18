import React from 'react';
import NavbarComponent from './MeatNavbarComponent';

const meatMenu = [
  {
    text: 'Fresh Meats',
    link: './meat',
    menu: [
      {
        category: 'Poultry',
        link:'/meat',
        submenu: [
          { text: 'Chicken', link: './meat' },
          { text: 'Offal', link: './meat' },
          { text: 'Turkey', link: './meat' },
          { text: 'Burger & Sausages', link: './meat' },
        ],
      },
      {
        category: 'Lamb',
        link:'/meat',
        submenu: [
          { text: 'Lamb', link: './meat' },
          { text: 'Mutton', link: './meat' },
          { text: 'Goat', link: './meat' },
          { text: 'Offal', link: './meat' },
          { text: 'Burger & Sausages', link: './meat' },
        ],
      },
      {
        category: 'Beef',
        link:'/meat',
        submenu: [
          { text: 'Beef', link: './meat' },
          { text: 'Veal', link: './meat' },
          { text: 'Offal', link: './meat' },
          { text: 'Wagyu', link: './meat' },
          { text: '28 Day Aged', link: './meat' },

        ],
      },
    ],
  },
  {
    text: 'Marinated Meats',
    link: './meat',
    menu: [
      {
        category: 'Chicken Marination',
        link:'/meat',
      },
      {
        category: 'Lamb Marination',
        link:'/meat',
      },
      {
        category: 'Beef Marination',
        link:'/meat',
      },
    ],
  },
  {
    text: 'Cold Meat',
    link: './meat',
    menu: [
      {
        category: 'Burger & Sausages',
        link:'/meat',
      },
    ],
  },
  {
    text: 'Frozen',
    link: './meat',
    menu: [
      {
        category: 'Burnage Halal Frozen',
        link:'/meat',
      },
      {
        category: 'Frozen',
        link:'/meat',
       
      },
    ],
  },
  {
    text: 'Exotic',
    link: './meat',
  },
  {
    text: 'Ready Meals',
    link: './meat',
  },
];

const MeatNavbar: React.FC = () => {
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