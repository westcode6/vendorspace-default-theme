import { FaSearch } from "react-icons/fa";
export default function Search() {
 return (
  <>
   <section className="">
    <div className=" md:ml-16 mt-7 md:mt-0 relative mx-auto text-gray-600  hover:shadow-xl transform hover:scale-105 transition duration-500 search flex justify-center items-center">
     <input
      className="border border-gray-300 bg-white w-full h-10 mr-3 px-5 pl-8 text-sm focus:outline-none"
      type="search"
      name="search"
      placeholder="Search Products, and Brands and categories"
     />
     <button
      type="submit"
      className="absolute left-3 top-0 mt-3 mr-4"
     >
      <FaSearch />
     </button>

     <button className="hover:bg-yellow-600 shadow-lg tracking-wide search-btn text-white text-sm">
      SEARCH
     </button>
    </div>
   </section>
  </>
 );
}
