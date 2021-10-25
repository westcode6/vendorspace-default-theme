import Link from "next/link";
import Container from "../utilities/Container";
import { Heading } from "../utilities/Typography";
export default function PopularCard() {
  const items = [
    {
      title: "Lorem, ipsum",
      image: "/image/pullover.jpg",
      link: "/",
    },

    {
      title: "Lorem, ipsum",
      image: "/image/sell-everywhere6.jpg",
      link: "/",
    },

    {
      title: "Lorem, ipsum",
      image: "/image/pullover.jpg",
      link: "/",
    },

    {
      title: "Lorem, ipsum",
      image: "/image/pullover.jpg",
      link: "/",
    },

    {
      title: "Lorem, ipsum",
      image: "/image/sell-everywhere4.jpg",
      link: "/",
    },

    {
      title: "Lorem, ipsum",
      image: "/image/pullover.jpg",
      link: "/",
    },

    {
      title: "Lorem, ipsum",
      image: "/image/sell-everywhere5.jpg",
      link: "/",
    },

    {
      title: "Lorem, ipsum",
      image: "/image/pullover.jpg",
      link: "/",
    },
  ];

  return (
    <>
      <section className="py-1">
        <Container className="">
          <div className="grid grid-cols-12 gap-3">
            {items.map((item, index) => (
              <div className="col-span-6 md:col-span-3 rounded-xl" key={index}>
                <Link href={item.link}>
                  <a className="flex items-center justify-between border shadow p-2 hover:border hover:border-gray-200 hover:shadow-xl hover:rounded-2xl ">
                    <p className="font-semibold text-sm text-gray-600">
                      {item.title}
                    </p>

                    <img
                      src={item.image}
                      className="w-16 h-16 object-scale-down"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
