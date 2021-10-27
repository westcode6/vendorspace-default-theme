export default function LandingBanner() {
 return (
  <>
   <main className="flex flex-col md:flex-row md:px-5 px-2 py-2 md:py-5 bg-white md:px-2 md:mx-8">
    <div className="">
     <img
      src="/image/banners/ads-banner.jpg"
      className="object-contain h-full rounded-l-sm"
      alt="ads-banner"
     />
    </div>
    <div className="">
     <img
      src="/image/banners/fashion-banner-3.jpg"
      className="object-contain h-full rounded-r-sm "
      alt="ads-banner"
     />
    </div>
   </main>
  </>
 );
}
