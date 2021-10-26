import Head from "next/head";
import Image from "next/image";
import HealthAndBeauty from "../components/categories/health/Health&beauty";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import AdsBanner from "../components/hooks/AdsBanner";
import Catergories from "../components/categories/allCategories/Categories";
import CategorieContainer from "../components/categories/allCategories/CategorieContainer";
import SimilarProducts from "../components/hooks/SimilarProducts";
import DiscountBanner from "../components/hooks/DiscountBanner";
import LandingBanner from "../components/hooks/LandingBanner";
import PopularCard from "../components/hooks/PopularCard";
import styles from "../styles/Home.module.css";
import FashionProducts from "../components/categories/fashion/FashionProduct";
import ProductContainer from "../components/hooks/ProductContainer";
import WristWatches from "../components/categories/wristWatches/WristWatches";

export default function Home() {
 return (
  <>
   <Head>
    <link
     href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
     rel="stylesheet"
    />
   </Head>
   <Navbar />
   <main className="my-40 md:my-24"></main>
   <LandingBanner />

   <CategorieContainer>
    <Catergories />
   </CategorieContainer>

   <ProductContainer>
    <FashionProducts />
   </ProductContainer>

   <ProductContainer>
    <HealthAndBeauty />
   </ProductContainer>

   <AdsBanner />

   <ProductContainer>
    <WristWatches />
   </ProductContainer>
   <Footer />

   <style jsx global>{`
    html,
    body {
     background: #f5f5f5;
     padding: 0;
     margin: 0;
     font-family: "Lato", sans-serif;
    }

    * {
     box-sizing: border-box;
    }
    .search {
     width: 600px;
    }
    .search,
    input,
    button {
     border-radius: 5px;
    }

    .search-btn {
     padding: 10px 10px;
     background: #e4811c;
     font-weight: 500px;
    }
    @media (max-width: 768px) {
     .search {
      width: 100%;
     }
    }
   `}</style>
  </>
 );
}
