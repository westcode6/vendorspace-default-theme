// import { Heading } from "../utilities/Typography";

export default function Catergorie({ children }) {
 const categorie = [
  {
   image: "/image/phones-tablets.png",
   title: "Phones & Tablets",
  },

  {
   image: "/image/fashion-banner.png",
   title: "Fashion",
  },

  {
   image: "/image/baby-products.png",
   title: "Baby Products",
  },

  {
   image: "/image/computing.png",
   title: "Computing",
  },

  {
   image: "/image/home-office.png",
   title: "Home & Office",
  },

  {
   image: "/image/milo-banner.png",
   title: "Groceries",
  },

  {
   image: "/image/electronics.png",
   title: "Electronics",
  },

  {
   image: "/image/health-beauty.png",
   title: "Health & Beauty",
  },

  {
   image: "/image/outdoors.png",
   title: "Outdoors",
  },

  {
   image: "/image/milo-banner.png",
   title: "Video Games",
  },

  {
   image: "/image/toys-games.png",
   title: "Toys and Games",
  },

  {
   image: "/image/sporting-goods.png",
   title: "Sporting Goods",
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
      <div
       className="col-span-6 md:col-span-2 p-2 hover:shadow-xl transform hover:scale-105 transition duration-500"
       key={index}
      >
       <img
        src={categorieId.image}
        className="w-full object-contain-scale rounded-md"
        alt={categorieId.title}
       />

       <div className="h-12 text-center py-3 text-sm text-gray-700">
        {categorieId.title}
       </div>
      </div>
     ))}
    </section>
   </main>
  </>
 );
}
