// Node funckje
import { writeFileSync } from "node:fs";
import qs from "qs";

import Link from "next/link";
import Heading from "@/components/Heading";
import Picture from "@/components/Images/Picture";
import { getReview, getReviews } from "@/library/reviews";

//Components
import { ButtonClick } from "@/tests/Test";

export const metadata = {
  title: "Reviews Pages",
};

const ReviewsPage = async () => {
  const reviews = await getReviews(6);
  console.log(["Reviews to:"], reviews);
  return (
    <>
      <Heading>Reviews</Heading>
      <p className="py-2">Here we will list all the reviews</p>
      <nav>
        <ul className="row row-cols-1 row-cols-md-3 g-2 g-md-3">
          {reviews.map(({ title, image, slug, date, subtitle }, index) => (
            <div key={index} className="d-flex flex-column">
              <p>{date}</p>
              <li
                key={slug}
                className="w-80 sm:w-full mx-auto bg-amber-600 rounded-lg hover:shadow-2xl"
              >
                <Link href={`/reviews/${slug}`}>
                  <Picture src={image} index={index} subtitle={subtitle} />
                  <p className="text-md text-center font-orbitron font-semibold">
                    {title}
                  </p>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </nav>
      <ButtonClick />
    </>
  );
};

export default ReviewsPage;
