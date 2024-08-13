import React, { useEffect, useState } from 'react';
import NavbarComponent from './MeatNavbarComponent';
import { Subcategory } from '@/interfaces/meatnavbar_interface';
import { CLientServices } from '@/services/user';


const MeatNavbar: React.FC = () => {
  const [meatMenu, setmeatMenu] = useState<Subcategory[]>([]);
  const fetchMenu =async ()=>{
    const response =await CLientServices.generateSubMenu();
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