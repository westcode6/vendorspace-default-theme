import { Heading } from "../utilities/Typography";

export default function Deals({ children }) {
 const deals = [
  {
   image: "/image/shoe1.jpg",
   title: "Phones & Tablets",
   price: "₦ 850,000",
   discount: "₦ 950,000",
  },

  {
   image: "/image/cloth1.jpg",
   title: "Phones & Tablets",
   price: "₦ 850,000",
   discount: "₦ 950,000",
  },

  {
   image: "/image/shoe2.jpg",
   title: "Phones & Tablets",
   price: "₦ 850,000",
   discount: "₦ 950,000",
  },

  {
   image: "/image/camera.jpg",
   title: "Phones & Tablets",
   price: "₦ 850,000",
   discount: "₦ 950,000",
  },

  {
   image: "/image/cloth2.jpg",
   title: "Phones & Tablets",
   price: "₦ 850,000",
   discount: "₦ 950,000",
  },

  {
   image: "/image/wrist.jpg",
   title: "Phones & Tablets",
   price: "₦ 850,000",
   discount: "₦ 950,000",
  },
 ];

 return (
  <>
   <section className="grid grid-cols-12 gap-3">
    {deals.map((dealsId, index) => (
     <div
      className="col-span-6 md:col-span-2 p-2 rounded-lg hover:border-2 hover:border-gray-100 hover:shadow-2xl"
      key={index}
     >
      <img
       src={dealsId.image}
       className="w-full object-contain-scale rounded-md"
       alt={dealsId.title}
      />

      <div className="text-left py-3 text-sm text-gray-700">
       <h1>{dealsId.title}</h1>

       <div className="flex flex-col px-1 py-3">
        <h1 className="text-sm font-bold text-gray-800">
         {dealsId.price}
        </h1>

        <h1>
         <small className="text-gray-500  line-through">
          {dealsId.discount}
         </small>
        </h1>
       </div>
      </div>
     </div>
    ))}
   </section>
  </>
 );
}
