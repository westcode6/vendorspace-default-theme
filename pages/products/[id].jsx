import Navbar from "../../components/common/Navbar";
import TopDeals from "../../components/hooks/TopDeals";
import Deals from "../../components/hooks/Deals";
import Footer from "../../components/common/Footer";
import {
 FiTwitter,
 FiInstagram,
 FiFacebook,
} from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Link from "next/link";
const Product = () => {
 return (
  <>
   <Navbar />
   <main className="grid grid-cols-1 md:grid-cols-2 px-1 md:px-16 my-5">
    <div className="">
     <div className="w-full mb-5">
      <figure>
       <img
        src="/images/pullover.jpg"
        className="object-contain w-full h-96 rounded"
        alt="pullover is yet to come"
       />
      </figure>
     </div>

     <div className="flex justify-center items-center">
      <figure>
       <img
        src="/images/pullover.jpg"
        className="object-contain w-28 h-28 mx-2 rounded"
        alt="pullover is yet to come"
       />
      </figure>

      <figure>
       <img
        src="/images/pullover.jpg"
        className="object-contain w-28 h-28  mx-2 rounded"
        alt="pullover is yet to come"
       />
      </figure>

      <figure>
       <img
        src="/images/pullover.jpg"
        className="object-contain w-28 h-28 mx-2 rounded"
        alt="pullover is yet to come"
       />
      </figure>
     </div>
    </div>

    <div className="flex flex-col px-3 md:px-16 mt-7 md:mt-0">
     <h1 className="text-xl text-gray-900 font-semibold px-2 md:px-5 mb-4">
      MUG pullover IS YET TO COME
     </h1>

     <div className="px-2 md:px-5">
      <hgroup className="mb-4">
       <h2 className="text-lg text-gray-700 font-semibold">
        Price
       </h2>
       <h4 className="text-sm text-gray-600 font-semibold py-1">
        ₦ 950,000
       </h4>
      </hgroup>

      <hgroup className="text-sm text-gray-500 mb-4">
       <h2>Tax included</h2>
       <h3 className="py-1">White pullover shirt</h3>
      </hgroup>
     </div>

     <div className="flex px-2 md:px-5">
      <div className="relative">
       <div className="text-center left-4 pt-2  absolute block text-xs uppercase text-gray-600 tracking-wide font-semibold">
        Qty
       </div>
       <select className="cursor-pointer appearance-none text-sm rounded-xl bg-white border border-gray-200 pl-4 pr-10 h-14 flex items-end pb-1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
       </select>

       <svg
        className="w-5 h-5 text-gray-400 absolute left-9 bottom-0 mb-1 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M8 9l4-4 4 4m0 6l-4 4-4-4"
        />
       </svg>
      </div>

      <Link href="/">
       <a className="px-10 mx-3 bg-pink-500 hover:bg-pink-600 text-pink-50 text-sm font-semibold flex justify-center items-center rounded">
        <span className="text-lg">
         <HiOutlineShoppingCart />
        </span>
        <span className="px-3">ADD TO CART</span>
       </a>
      </Link>
     </div>

     <div className="my-7 flex px-2 md:px-5">
      <h2 className="text-lg text-gray-700 font-semibold">
       Share
      </h2>

      <div className="px-4 flex">
       <Link href="/">
        <a className="w-8 h-8 flex justify-center items-center rounded-full shadow mx-4">
         <FiFacebook />
        </a>
       </Link>

       <Link href="/">
        <a className="w-8 h-8 flex justify-center items-center  rounded-full shadow mx-4">
         <FiInstagram />
        </a>
       </Link>

       <Link href="/">
        <a className="w-8 h-8 flex justify-center items-center rounded-full shadow mx-4">
         <FiTwitter />
        </a>
       </Link>
      </div>
     </div>

     <div className="bg-white shadow px-2 md:px-5">
      <header className="">
       <h1 className="text-xl text-gray-700 font-semibold border-b border-gray-100 py-2">
        Description
       </h1>

       <p className="py-4 text-sm text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Id consequuntur laborum consequatur corporis
        culpa ratione. Veritatis quis sed molestias nobis.
        Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Voluptas ea vero ab excepturi, vitae soluta!
        Lorem ipsum dolor sit amet consectetur. Lorem ipsum
        dolor sit amet consectetur.
       </p>
      </header>
     </div>
    </div>
   </main>

   <TopDeals title="Populare categories">
    <Deals />
   </TopDeals>

   <Footer />
  </>
 );
};
export default Product;
