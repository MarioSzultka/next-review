import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import Picture from "@/components/Images/Picture";
import { getReviews } from "@/library/reviews";

//export const revalidate = 30; // co 30 sekund strona sie re-renderuje tzn. na poczatku klient dostaje strone statyczna a po 30 sekundach i tak sie od nowa zaladuje
//export const revalidate = 30;
//export const dynamic = "force-dynamic";

const HomePage = async () => {
  const reviews = await getReviews(3);
  console.log(
    `[HomePage] Title rendering:`,
    reviews.map((item) => item.title).join(", ")
  );
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you</p>
      <div className="row g-2">
        {reviews.map(({ title, image, date, subtitle, slug }, index) => {
          return (
            <div
              key={index}
              className=" col-12 col-md-4 flex flex-col flex-wrap"
            >
              <div className="rounded border-2">
                <p className="font-bold text-md py-2">{date}</p>
                <Link
                  href={`/reviews/${slug}`}
                  className="flex flex-col sm:flex-row sm:items-center"
                >
                  <Image
                    src={image}
                    alt={subtitle}
                    width="640"
                    height="360"
                    priority={index === 0}
                  />
                </Link>
                <div className="flex flex-column">
                  <h2 className="text-center py-2 fs-5">{title}</h2>
                  <p className="p-2 d-none d-sm-block">{subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
