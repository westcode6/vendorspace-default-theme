import Link from "next/link";
import {
 AiOutlineHeart,
 AiOutlineArrowRight,
} from "react-icons/ai";
export default function FashionProducts({ title }) {
 const product = [
  {
   image: "/image/fashion/s86.jpg",
   productName: "Green Bo Ivy",
   price: "$632.00",
   discount: "$ 950,000",
   link: "/products/1",
  },

  {
   image: "/image/fashion/s80.jpg",
   productName: "Green Bo Ivy",
   price: "$432.00",
   discount: "$ 950,000",
   link: "/products/1",
  },

  {
   image: "/image/fashion/s93.jpg",
   productName: "Green Bo Ivy",
   price: "$232.00",
   discount: "$ 950,000",
   link: "/products/1",
  },

  {
   image: "/image/fashion/shoe1.jpg",
   productName: "Green Bo Ivy",
   price: "$332.00",
   discount: "$ 950,000",
   link: "/products/1",
  },

  {
   image: "/image/fashion/s95.jpg",
   productName: "Green Bo Ivy",
   price: "$632.00",
   discount: "$ 950,000",
   link: "/products/1",
  },

  {
   image: "/image/fashion/s84.jpg",
   productName: "Green Bo Ivy",
   price: "$532.00 ",
   discount: "$ 950,000",
   link: "/products/1",
  },
 ];

 return (
  <section className="">
   <div className="bg-blue-50 flex justify-between items-center mb-5 rounded-md py-3 px-3">
    <h1 className="text-md text-gray-700 font-semibold tracking-wide">
     Fashion
    </h1>

    <Link href="/">
     <a className="flex items-center font-semibold hover:text-gray-500 text-sm">
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
       className="col-span-6 md:col-span-2 hover:shadow-xl transform hover:scale-105 transition duration-500 relative"
       key={index}
      >
       <Link href={item.link}>
        <div className="">
         <figure>
          <img
           src={item.image}
           className="object-cover w-44 h-40 rounded-md"
           alt="product"
          />
         </figure>

         <div className="py-3 text-center">
          <h5 className="font-medium text-sm text-gray-700">
           {item.productName}
          </h5>

          <div className="flex flex-col justify-center items-center">
           <h1 className="pt-1 font-semibold">
            {item.price}
           </h1>

           <h1>
            <small className="text-gray-500  line-through">
             {item.discount}
            </small>
           </h1>
          </div>
         </div>
        </div>
       </Link>

       <div className="absolute w-12 h-5 rounded-l-lg bg-yellow-200 text-center text-xs items-center  flex  justify-center text-yellow-600 top-2 right-0">
        <span className="text-xs text-black">-22%</span>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
