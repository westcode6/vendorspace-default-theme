import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { FaUserAstronaut } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { RiMenu5Fill } from "react-icons/ri";
import Search from "../utilities/Search";
const Navbar = () => {
 return (
  <>
   <nav className="w-full top-0 py-2 fixed bg-white md:shadow-xl z-20">
    <section className="flex flex-col md:flex-row justify-between md:items-center px-6 md:px-12 py-2">
     <div className="flex justify-between ">
      <button className="text-2xl">
       <AiOutlineMenu />
      </button>

      <h1 className="text-2xl md:text-3xl pl-10 md:pl-0 text-gray-700 font-black ">
       ARISE
      </h1>

      <button className="block md:hidden text-gray-800  hover:text-yellow-500 font-semibold flex justify-center items-center px-4">
       <span className="px-2 text-2xl">
        {" "}
        <HiOutlineShoppingCart />
       </span>
      </button>
     </div>
     <div>
      <Search />
     </div>
     <div className="hidden md:block">
      <ul className="flex flex-row md:flex-row justify-center">
       <Link href="/">
        <a className="text-gray-800  hover:text-yellow-500 font-semibold flex justify-center items-center px-4">
         <span className="text-xl">
          <FaUserAstronaut />
         </span>
         <span className="px-2">Hi, Ovuota</span>
        </a>
       </Link>

       <Link href="/">
        <a className="text-gray-800  hover:text-yellow-500 font-semibold flex justify-center items-center px-4">
         <span className="text-xl">
          <BiHelpCircle />
         </span>
         <span className="px-2">Help</span>
        </a>
       </Link>

       <Link href="/">
        <a className="text-gray-800  hover:text-yellow-500 font-semibold flex justify-center items-center px-4">
         <span className="text-xl">
          <HiOutlineShoppingCart />
         </span>
         <span className="px-2">Cart</span>
        </a>
       </Link>
      </ul>
     </div>
    </section>
   </nav>
  </>
 );
};
export default Navbar;
