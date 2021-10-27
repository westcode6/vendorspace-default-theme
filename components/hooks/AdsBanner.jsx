export default function AdsBanner() {
 return (
  <>
   <main className="flex flex-col md:flex-row bg-white  md:px-2 md:mx-8 py-5">
    <div className="border-8 border-white rounded-lg">
     <img
      src="/image/banners/ads-banner.jpg"
      className="object-contain-scale rounded-md"
      alt="ads-banner"
     />
    </div>
    <div className="border-8 border-white rounded-lg">
     <img
      src="/image/banners/watch-banner.jpg"
      className="object-contain-scale rounded-lg"
      alt="ads-banner"
     />
    </div>
   </main>
  </>
 );
}
