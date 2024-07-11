import React from 'react'
import  NavLink from 'next/link'
interface NavbarProps{
    index?:number;
    text:string;
    link:string;
    className?:string;
}
const NavbarComponent:React.FC<NavbarProps> = ({index,text,link,className}) => {
  return (
    <div>
      <NavLink href={{pathname:link,query:{category:text}}} className={` text-zinc-600  rounded-md  font-bold ${className} hover:text-red-500 hover:border-2 hover:p-4  hover:border-red-600 transition-all ease-in-out duration-500 `}>{text}</NavLink>
    </div>
  )
}

export default NavbarComponent