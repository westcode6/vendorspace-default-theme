import {
 FaLinkedin,
 FaFacebookSquare,
 FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
 return (
  <>
   <div
    className=""
    style={{
     background: "#323232",
    }}
   >
    <div className="container mx-auto px-6 lg:px-20 py-12">
     <div className="lg:flex">
      <div className="w-full lg:w-2/3">
       <div className="lg:flex">
        <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
         <h2 className="font-bold text-xl text-gray-100 mb-4">
          About Brand
         </h2>
         <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consectetur vel in nostrum quae deserunt
          sequi explicabo impedit error dolore
          necessitatibus obcaecati esse adipisci....
         </p>
         <div className="flex mt-6">
          <i
           style={{ background: "#3b5998" }}
           className="flex items-center justify-center h-12 w-12 mr-1 rounded-full fab fill-current text-white text-xl fa-facebook-f"
          >
           <FaFacebookSquare />
          </i>
          <i
           style={{ background: "#dd4b39" }}
           className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fas fill-current text-white text-xl fa-envelope"
          >
           <FaLinkedin />
          </i>
          <i
           style={{ background: "#125688" }}
           className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-instagram"
          >
           <FaInstagramSquare />
          </i>
         </div>
        </div>
        <div className="w-full lg:w-1/2 lg:flex lg:px-6 ">
         <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
          <h2 className="font-bold text-gray-100 mb-4">
           User
          </h2>
          <ul className="text-gray-300 text-sm">
           <li className="pt-1 pb-2">Sign in</li>
           <li className="pt-1 pb-2">New Account</li>
           <li className="pt-1 pb-2">Mobile</li>
          </ul>
         </div>
         <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
          <h2 className="font-bold text-gray-100 mb-4">
           Support
          </h2>
          <ul className="text-gray-300 text-sm">
           <li className="pt-1 pb-2">Help Center</li>
           <li className="pt-1 pb-2">Privacy Policy</li>
           <li className="pt-1 pb-2">Conditions</li>
          </ul>
         </div>
        </div>
       </div>
      </div>
      <div className="w-full lg:w-1/3">
       <h2 className=" font-bold text-gray-100 mb-4">
        Our Newsletter
       </h2>
       <div className="text-gray-300 mb-8">
        Subscribe our weely Newsletter to get regular
        updates about our blogs.
       </div>
       <div className="flex">
        <input
         type="text"
         className=" px-2 focus:outline-none"
         placeholder="Enter email address"
        />
        <button
         className="text-gray-200  hover:bg-blue-500 px-4 mx-2 py-2 focus:outline-none"
         style={{ background: "#e4811c" }}
        >
         Submit
        </button>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div style={{ background: "#282828" }}>
    <div className="container mx-auto px-6 lg:px-20 py-6">
     <div className="flex justify-center text-gray-300 mb-1">
      © 2021  
      <span className="font-bold">Vendorspace </span>
       2021 All right reserved.
     </div>
     <div className="flex font-light justify-center text-gray-500 text-sm">
      <p>
       Powered by{" "}
       <span className="font-bold">Vendorspace.ng</span>
      </p>
     </div>
    </div>
   </div>
  </>
 );
};
export default Footer;
