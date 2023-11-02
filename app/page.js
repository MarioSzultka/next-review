import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "@/components/Images/Image";
import { getReviews, getReview, getNewestReview } from "@/library/reviews";

const HomePage = async () => {
  const files = await getReviews();

  const reviews = [];
  for (const item of files) {
    const review = await getReview(item);
    reviews.push(review);
  }

  const newestReview = getNewestReview(reviews);

  const { title, date, image, body } = newestReview[0];
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you</p>
      <div className="mx-auto w-80 sm:w-full bg-amber-600 rounded-lg hover:shadow-2xl">
        <p className="font-bold text-md py-2">{date}</p>
        <Link
          href="/reviews/hollow-knight"
          className="flex flex-col sm:flex-row sm:items-center"
        >
          <Image src={image} />
          <h2 className="text-md text-center font-orbitron font-semibold sm:grow">
            {title}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
