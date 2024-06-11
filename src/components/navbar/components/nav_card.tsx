// src/components/NavItem.tsx
import React from 'react';
import Link from 'next/link';

interface NavcardInterface {
  icon: React.ReactNode;
  text: string;
  link: string;
  className: string
}

const NavCard: React.FC<NavcardInterface> = ({ icon, text, link,className }) => {
  return (
    <Link href={link}>
      <div className={`flex flex-col justify-center items-center px-3 py-8 text-zinc-800 bg-slate-50 rounded cursor-pointer w-16  ${className}`}>
        {icon}
        {text}
      </div>
    </Link>
  );
};

export default NavCard;
