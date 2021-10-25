import Link from "next/link";
import Button from "../utilities/Button";
import DiscountTag from "../utilities/DiscountTag";
import NewProductTag from "../utilities/NewProductTag";
import { IoMdCart } from "react-icons/io";

const Item = () => {
 const product = [
  {
   image: "/image/macbook.jpg",

   title: "Apple MacBook Pro 2020",
   price: "₦ 850,000",
   discount: "₦ 950,000",
  },

  {
   image: "/image/best.jpg",
   title: "Apple MacBook Pro 2020",
   price: "₦ 850,000",
   discount: "₦ 950,000",
  },

  {
   image: "/image/sell-everywhere4.jpg",

   title: "Apple MacBook Pro 2020",
   price: "₦ 850,000",
   discount: "₦ 950,000",
  },

  {
   image: "/image/best.jpg",
   title: "Apple Desktop Pro 2021",
   price: "₦ 850,000",
   discount: "₦ 950,000",
  },
 ];

 return product.map((productId, index) => (
  <Link href="/" key={index}>
   <a className="flex flex-col shadow-lg hover:shadow-md  items-center relative">
    <img
     src={productId.image}
     className="w-full  object-contain"
     alt=""
    />

    <div className="mt-3">
     <h1 className="font-semibold flex flex-col text-sm text-gray-600">
      {productId.title}
     </h1>
    </div>

    <div className="flex justify-between w-full px-6 py-3">
     <h1 className="text-sm font-bold text-gray-800  flex flex-col">
      <span className="text-gray-800 font-semibold">
       Price
      </span>

      {productId.price}
     </h1>

     <h1>
      <span className="text-sm text-gray-600 font-semibold flex flex-col">
       Discount
      </span>

      <small className="text-gray-500 ml-2 line-through">
       {productId.discount}
      </small>
     </h1>
    </div>

    <div className="w-full px-5">
     <Button className="bg-yellow-500 text-white p-2">
      <span className="px-2">
       <IoMdCart />
      </span>
      <span>ADD TO CART</span>
     </Button>
    </div>
    {/* <DiscountTag className="p-2 bg-yellow-500 text-white">
          <h1>-20%</h1>
        </DiscountTag> */}

    <NewProductTag className="bg-blue p-2">
     <h1>NEW</h1>
    </NewProductTag>
   </a>
  </Link>
 ));
};
export default Item;
