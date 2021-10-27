// import { Heading } from "../utilities/Typography";
import Link from "next/link";
import Image from "next/dist/client/image";
export default function Catergories({ children }) {
 const categorie = [
  {
   image: "/image/fashion/s95.jpg",
   title: "Men Fashion",
  },

  {
   image: "/image/fashion/green-bag.jpg",
   title: "Bags",
  },

  {
   image: "/image/fashion/s84.jpg",
   title: "Women Fashion",
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
   <div
    className="text-center py-3 mb-2"
    style={{ background: "#E2F5FF", fontWeight: "600" }}
   >
    <h2 className="text-md text-gray-700 tracking-wide">
     Featured Categories
    </h2>
   </div>
   <section className="grid grid-cols-12">
    {categorie.map((categorieId) => (
     <Link href="/components/categories/fashion/FashionCollection">
      <div
       className="col-span-6 md:col-span-2 px-1 hover:shadow-xl transform hover:scale-105 transition duration-500"
       key={categorieId}
      >
       <figure>
        <Image
         src={categorieId.image}
         width={220}
         height={190}
         className="object-cover rounded-sm"
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
  </>
 );
}
