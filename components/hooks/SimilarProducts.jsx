import { Heading } from "../utilities/Typography";

export default function SimilarProducts({ children }) {
 const deals = [
  {
   image: "/image/fashion/s80.jpg",
   title: "Belly Top",
   price: "$ 850,000",
   discount: "$ 950,000",
  },

  {
   image: "/image/fashion/1.jpg",
   title: "Blazzers Top",
   price: "$ 850,000",
   discount: "$ 950,000",
  },

  {
   image: "/image/shoes/shoe2.jpg",
   title: "Cover Top",
   price: "$ 850,000",
   discount: "$ 950,000",
  },

  {
   image: "/image/fashion/s83.jpg",
   title: "Men's Sleeves",
   price: "$ 850,000",
   discount: "$ 950,000",
  },

  {
   image: "/image/fashion/s86.jpg",
   title: "Blouse",
   price: "$ 850,000",
   discount: "$ 950,000",
  },

  {
   image: "/image/watches/3.jpg",
   title: "Ice Cuban",
   price: "$ 850,000",
   discount: "$ 950,000",
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
      <figure>
       <img
        src={dealsId.image}
        className="object-cover h-56 w-full"
        alt={dealsId.title}
       />
      </figure>

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
