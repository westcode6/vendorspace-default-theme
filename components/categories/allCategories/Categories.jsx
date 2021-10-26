// import { Heading } from "../utilities/Typography";
import Link from "next/link";
export default function Catergories({ children }) {
 const categorie = [
  {
   image: "/image/fashion/s95.jpg",
   title: "Men Fashion",
  },

  {
   image: "/image/fashion/s84.jpg",
   title: "Women Fashion",
  },

  {
   image: "/image/fashion/green-bag.jpg",
   title: "Bags",
  },

  {
   image: "/image/watches/3.jpg",
   title: "Wrist Watches",
  },

  {
   image: "/image/shoes/shoe1.jpg",
   title: "Shoes",
  },

  {
   image: "/image/health/body-care.jpg",
   title: "Beauty",
  },
 ];

 return (
  <>
   <main>
    <div
     className="text-center py-3 mb-2"
     style={{ background: "#E2F5FF", fontWeight: "600" }}
    >
     <h2 className="text-lg text-gray-700 tracking-wide">
      Featured Categories
     </h2>
    </div>
    <section className="grid grid-cols-12">
     {categorie.map((categorieId, index) => (
      <Link href="/components/categories/fashion/FashionCollection">
       <div
        className="col-span-6 md:col-span-2  p-2 hover:shadow-xl transform hover:scale-105 transition duration-500"
        key={index}
       >
        <figure>
         <img
          src={categorieId.image}
          className="object-cover h-52 w-full"
          alt="product"
         />
        </figure>

        <div className="h-12 text-center py-3 text-sm text-gray-700">
         {categorieId.title}
        </div>
       </div>
      </Link>
     ))}
    </section>
   </main>
  </>
 );
}
