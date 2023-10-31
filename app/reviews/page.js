import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "@/components/Images/Image";
import { getReview, getReviews } from "@/library/reviews";
const ReviewsPage = async () => {
  const files = await getReviews();

  const reviews = [];
  for (const [index, item] of files.entries()) {
    const review = await getReview(item);

    const html = (
      <li
        key={index}
        className="w-80 sm:w-full mx-auto bg-amber-600 rounded-lg hover:shadow-2xl"
      >
        <Link href={`/reviews/${item}`}>
          <Image src={review.image} />
          <p className="text-md text-center font-orbitron font-semibold">
            {review.title}
          </p>
        </Link>
      </li>
    );
    reviews.push(html);
  }

  return (
    <>
      <Heading>Reviews</Heading>
      <p className="py-2">Here we will list all the reviews</p>
      <nav>
        <ul className="flex flex-col sm:flex-row gap-3">{reviews}</ul>
      </nav>
    </>
  );
};

export default ReviewsPage;
