import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "@/components/Images/Image";
import { getReview, getReviews } from "@/library/reviews";

export const metadata = {
  title: "Reviews Pages",
};

const ReviewsPage = async () => {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <p className="py-2">Here we will list all the reviews</p>
      <nav>
        <ul className="flex flex-col sm:flex-row gap-3">
          {reviews.map(({ title, image, slug }) => (
            <li
              key={slug}
              className="w-80 sm:w-full mx-auto bg-amber-600 rounded-lg hover:shadow-2xl"
            >
              <Link href={`/reviews/${slug}`}>
                <Image src={image} />
                <p className="text-md text-center font-orbitron font-semibold">
                  {title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default ReviewsPage;
