import Heading from "@/components/Heading";
import Picture from "@/components/Images/Picture";

// library
import { getReview, getSlugs } from "@/library/reviews";

// components

import ShareButtons from "@/components/Buttons/ShareButtons";

// to jest do tworzenia statycznych stron aby nie przetwrzal na serwrze jak klient kliknie na dany link na stronie
export async function generateStaticParams() {
  //https://www.udemy.com/course/nextjs-by-example/learn/lecture/37979362#notes

  return await getSlugs("reviews");
}

// To jest generowanie statycznych tytulow strony jezeli masz [cos w tym podane jak slug]
//https://www.udemy.com/course/nextjs-by-example/learn/lecture/37979378#questions
export async function generateMetadata(props) {
  //console.log(["generateMetadata", props]);
  const { slug } = props.params;
  //console.log(["generateMetadata", slug]);
  const { title } = await getReview(slug);

  return {
    title: title,
  };
}

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  const { title, date, image, body, subtitle } = review;

  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="font-bold text-md">{date}</p>

        <ShareButtons />
      </div>
      <p className="fw-bold">{subtitle}</p>
      <Picture src={image} index={0} />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className={` d-flex flex-column scroll-py-2 text`}
      />
    </>
  );
};

export default ReviewPage;
