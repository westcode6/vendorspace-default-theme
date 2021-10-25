import Navbar from "../../components/common/Navbar";
import Link from "next/link";
import Footer from "../../components/common/Footer";
import FashionCategories from "../../components/categories/fashion";
import TopDeals from "../../components/hooks/TopDeals";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
 FaFacebookF,
 FaInstagram,
 FaHeart,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Product() {
 return (
  <>
   <Navbar />

   <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div className="container px-5 pt-20 md:pt-28 mx-auto">
     <div className="lg:w-5/6 mx-auto   flex flex-wrap">
      <img
       alt="ecommerce"
       className="lg:w-1/2  w-full object-cover rounded border border-gray-200"
       src="/image/fashion/pullover.jpg"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
       <h2 className="text-sm title-font text-gray-500 tracking-widest">
        BEYOND COLLECTIONS
       </h2>
       <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        Green ivy mart
       </h1>
       <div className="flex mb-4">
        <span className="flex items-center text-red-600 text-xl space-x-2">
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
         <AiOutlineStar />
         <span className="text-gray-600 ml-3">
          4 Reviews
         </span>
        </span>
        <span className="flex ml-3 pl-3 py-2 border-l-2 space-x-2 border-gray-200">
         <a className="text-gray-500 text-lg">
          <FaFacebookF />
         </a>
         <a className="ml-2 text-gray-500 text-lg">
          <FaInstagram />
         </a>
         <a className="ml-2 text-gray-500 text-lg">
          <IoLogoWhatsapp />
         </a>
        </span>
       </div>
       <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Harum quis iste, quidem deleniti aperiam
        quisquam, rerum non pariatur optio debitis officia
        deserunt consectetur esse ipsum rem. Saepe illum
        nobis perspiciatis iure et provident expedita
        possimus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam numquam.
       </p>
       <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        <div className="flex">
         <span className="mr-3">Color</span>
         <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
         <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
         <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
        </div>
        <div className="flex ml-6 items-center">
         <span className="mr-3">Size</span>
         <div className="relative">
          <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
           <option>SM</option>
           <option>M</option>
           <option>L</option>
           <option>XL</option>
          </select>
          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center text-2xl">
           <MdKeyboardArrowDown />
          </span>
         </div>
        </div>
       </div>
       <div className="flex">
        <span className="title-font font-medium text-2xl text-gray-900">
         $158.00
        </span>
        <Link href="/checkout/cart">
         <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
          ADD TO CART
         </button>
        </Link>
        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
         <FaHeart />
        </button>
       </div>
      </div>
     </div>
    </div>
   </section>
   <TopDeals>
    <FashionCategories />
   </TopDeals>
   <Footer />
  </>
 );
}
