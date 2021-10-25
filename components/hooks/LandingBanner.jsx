import Image from "next/image";
const LandingBanner = () => {
 return (
  <>
   <main className="max-w-4xl mx-auto my-5 border-8 border-white rounded-lg  flex justify-center">
    <img
     src="/image/singlebanner2.png"
     className="w-full object-contain-scale"
     alt="LandingBanner"
    />
   </main>
  </>
 );
};
export default LandingBanner;
