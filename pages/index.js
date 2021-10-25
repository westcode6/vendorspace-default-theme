import Head from "next/head";
import Image from "next/image";
import FashionCategories from "../components/categories/fashion";
import HealthAndBeauty from "../components/categories/health&beauty";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import AdsBanner from "../components/hooks/AdsBanner";
import Catergorie from "../components/hooks/Categorie";
import CategorieContainer from "../components/hooks/CategorieContainer";
import Deals from "../components/hooks/Deals";
import DiscountBanner from "../components/hooks/DiscountBanner";
import LandingBanner from "../components/hooks/Landingbanner";
import PopularCard from "../components/hooks/PopularCard";
import TopDeals from "../components/hooks/TopDeals";
import styles from "../styles/Home.module.css";

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
   <main className="my-36 md:my-24"></main>
   <LandingBanner />

   <CategorieContainer>
    <Catergorie />
   </CategorieContainer>

   <TopDeals>
    <FashionCategories />
   </TopDeals>
   <AdsBanner />

   <TopDeals>
    <HealthAndBeauty />
   </TopDeals>
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
      width: 300px;
     }
    }
   `}</style>
  </>
 );
}
