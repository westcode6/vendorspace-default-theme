export default function AdsBanner() {
 return (
  <>
   <main className="grid grid-cols-2 gap-5 px-3 md:px-10">
    <div className="border-8 border-white rounded-lg">
     <img
      src="/image/ads-banner.jpg"
      className="object-contain-scale"
      alt="ads-banner"
     />
    </div>
    <div className="border-8 border-white rounded-lg">
     <img
      src="/image/healt.jpeg"
      className="object-contain-scale h-full"
      alt="ads-banner"
     />
    </div>
   </main>
  </>
 );
}
