import React from 'react'
import { useState } from 'react'
import NavbarComponent from './MeatNavbarComponent'

const MeatNavbar:React.FC = () => {
  return (
    <div>
      <div className='flex justify-around items-center gap-16'>
        <NavbarComponent link='./meat' text='Fresh Meats' />
        <NavbarComponent link='./meat' text='Marinated Meats'/>
        <NavbarComponent link='./meat' text='Cold Meat'/>
        <NavbarComponent link='./meat' text='Frozen'/>
        <NavbarComponent link='./meat' text='Exotic'/>
        <NavbarComponent link='./meat' text='Ready Meals'/>
      </div>
    </div>
  )
}

export default MeatNavbar