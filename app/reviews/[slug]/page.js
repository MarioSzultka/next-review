import Heading from "@/components/Heading";
import Image from "@/components/Images/Image";

// library
import { getReview } from "@/library/reviews";

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  const { title, date, image, body } = review;

  return (
    <>
      <Heading>{title}</Heading>
      <p className="font-bold text-xs py-2">{date}</p>
      <Image src={image} />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="w-auto mx-auto prose prose-slate py-2"
      />
    </>
  );
};

export default ReviewPage;
