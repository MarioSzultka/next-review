import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/library/reviews";

import { writeFileSync } from "node:fs";

//export const revalidate = 30; // co 30 sekund strona sie re-renderuje tzn. na poczatku klient dostaje strone statyczna a po 30 sekundach i tak sie od nowa zaladuje
//export const revalidate = 30;
//export const dynamic = "force-dynamic";

const HomePage = async () => {
  const reviews = await getReviews(3);
  console.log(
    `[HomePage] Titles before rendring are:`,
    reviews.map((item) => item.title).join(", ")
  );

  const formatted = JSON.stringify(reviews, null, 2);
  const file = "scripts/strapi-response.json";
  writeFileSync(file, formatted);

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you</p>
      <div className="row g-2">
        {reviews.map((review, index) => {
          return (
            <div
              key={index}
              className=" col-12 col-md-4 flex flex-col flex-wrap"
            >
              <div className="rounded border-2">
                <p className="font-bold text-md py-2">{review.date}</p>
                <Link
                  href={`/reviews/${review.slug}`}
                  className="flex flex-col sm:flex-row sm:items-center"
                >
                  <Image
                    src={review.image}
                    alt={review.subtitle}
                    width="640"
                    height="360"
                    priority={index === 0}
                  />
                </Link>
                <div className="flex flex-column">
                  <h2 className="text-center py-2 fs-5">
                    {console.log(
                      `[HomePage] Title during rendring is:`,
                      review.title
                    )}
                    {review.title}
                  </h2>
                  <p className="p-2 d-none d-sm-block">{review.subtitle}</p>
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
