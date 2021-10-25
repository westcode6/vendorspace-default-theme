import Image from "next/image";
import Link from "next/link";
const DiscountBanner = () => {
  return (
    <>
      <section className="py-5 mb-5">
        <header className="px-3 md:px-20 mb-5">
          <Link href="/">
            <a className="flex flex-end justify-end items-end text-gray-700 text-lg font-medium">
              All products
            </a>
          </Link>
        </header>
        <main className="max-w-6xl mx-auto flex justify-center">
          <Image
            src="/images/sample-2.jpg"
            alt="DiscountBanner"
            width={1200}
            height={330}
          />
        </main>
      </section>
    </>
  );
};
export default DiscountBanner;
