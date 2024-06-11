import Link from "next/link";
import { TbMeat } from "react-icons/tb";
import { GiCannedFish } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";
import { GiFrozenOrb } from "react-icons/gi";
import { GiBuyCard } from "react-icons/gi";
import { FaSitemap } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import NavCard from "./nav_card";
const CustomMenu = () => {
  return (
      <div >
        <div className="flex flex-row justify-center items-cente gap-2r">
         <NavCard icon={<MdFastfood />} text="Meat" link="/meat" className={`bg-red-100`}/>
         <NavCard icon={<MdFastfood />} text="Meat" link="/meat" className={`bg-red-100`}/>
         <NavCard icon={<MdFastfood />} text="Meat" link="/meat" className={`bg-red-100`}/>
         <NavCard icon={<MdFastfood />} text="Meat" link="/meat" className={`bg-red-100`}/>


        </div>
        <ul className="menu menu-horizontal px-4 flex gap-16 ml-20">
          {/* <li>
            <Link href="/">Home</Link>
          </li> */}
          <li className="hover:bg-red-600 hover:text-red-200">
            <details>
              <summary className="flex flex-col"><TbMeat className="text-xl" />Meat</summary>
              <ul className="p-2 z-10">
                <li>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "Meat" },
                    }}
                  >
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "Lamb" },
                    }}
                  >
                    Lamb
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "Mutton" },
                    }}
                  >
                    Mutton
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "Beef" },
                    }}
                  >
                    Beef
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="flex flex-col items-center justify-center hover:bg-red-600 hover:text-red-50">
            <div><GiCannedFish className="text-xl"/></div>
            <Link href={{ pathname: "/products", query: { category: "Fish" } }}>
              Fish
            </Link>
          </li>

          <li className="flex flex-col items-center justify-center hover:bg-red-600 hover:text-red-50">
            <div><GiChickenOven className="text-xl"/></div>
            <Link
              href={{
                pathname: "/products",
                query: { category: "Chicken" },
              }}
            >
              Chicken
            </Link>
          </li>
          <li className="flex flex-col justify-center items-center hover:bg-red-600 hover:text-red-50">
            <div><MdFastfood className="text-xl"/></div>
            <Link
              href={{
                pathname: "/products",
                query: { category: "Marinated" },
              }}
            >
              Marinated
            </Link>
          </li>
          <li className="flex flex-col justify-center items-center hover:bg-red-600 hover:text-red-50">
            <div><GiFrozenOrb className="text-xl"/></div>
            <Link
              href={{
                pathname: "/products",
                query: { category: "Frozen Food" },
              }}
            >
              Frozen Food
            </Link>
          </li>
          <li className="flex flex-col justify-center items-center hover:bg-red-600 hover:text-red-50">
            <div><GiBuyCard className="text-xl"/></div>
            <Link
              href={{
                pathname: "/products",
                query: { category: "Bulk Buy" },
              }}
            >
              Bulk Buy
            </Link>
          </li>
          <li className="flex flex-col justify-center items-center hover:bg-red-600 hover:text-red-50">
            <div><FaSitemap className="text-xl"/></div>
            <Link
              href={{
                pathname: "/products",
                query: { category: "All Products" },
              }}
            >
              All Products
            </Link>
          </li>
        </ul>
      </div>
    
  );
};
export default CustomMenu;
