import Link from "next/link";
import {
 AiOutlineHeart,
 AiOutlineArrowRight,
} from "react-icons/ai";
export default function HealthAndBeauty({ title }) {
 const product = [
  {
   image: "/image/health/body-care.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   link: "/products/1",
  },

  {
   image: "/image/health/face-care.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   link: "/products/1",
  },

  {
   image: "/image/health/lip-care.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   link: "/products/1",
  },

  {
   image: "/image/health/nivea.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   link: "/products/1",
  },

  {
   image: "/image/health/sell-everywhere5.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   link: "/products/1",
  },

  {
   image: "/image/health/shaving.jpg",
   productName: "Green Bo Ivy",
   price: "$532.00 ",
   link: "/products/1",
  },
 ];

 return (
  <section className="">
   <div className="bg-indigo-100 flex justify-between items-center mb-3 rounded-lg py-3 px-3">
    <h1 className="text-lg text-gray-700 font-semibold tracking-wide">
     Health
    </h1>

    <Link href="/">
     <a className="flex items-center font-medium hover:text-gray-500 text-sm">
      View More
      <span className="px-1 inline-flex">
       <AiOutlineArrowRight />
      </span>
     </a>
    </Link>
   </div>
   <div className="">
    <div className="grid grid-cols-12 gap-5 mb-4">
     {product.map((item, index) => (
      <div
       className="col-span-6 md:col-span-2 shadow-md hover:shadow-2xl rounded-lg relative"
       key={index}
      >
       <Link href={item.link}>
        <div className="">
         <figure>
          <img
           src={item.image}
           className="object-cover h-56 w-full"
           alt="product"
          />
         </figure>

         <div className="py-3 text-center">
          <h5 className="font-semibold text-sm text-gray-700">
           {item.productName}
          </h5>

          <div className="flex justify-center items-center">
           <span>{item.price}</span>
          </div>
         </div>
        </div>
       </Link>

       <div className="absolute w-7 h-7  border border-black text-center text-xs items-center  flex  justify-center text-white bottom-20 right-0">
        <span className="text-xl text-black">
         <AiOutlineHeart />
        </span>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
