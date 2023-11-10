// next JS functions
import { notFound } from "next/navigation";

// library
import { getReview, getSlugs } from "@/library/reviews";

// components
import Heading from "@/components/Heading";
import Picture from "@/components/Images/Picture";
import ShareButtons from "@/components/Buttons/ShareButtons";

// to jest do tworzenia statycznych stron aby nie przetwrzal na serwrze jak klient kliknie na dany link na stronie export async function generateStaticParams
//https://www.udemy.com/course/nextjs-by-example/learn/lecture/37979362#notes

export async function generateStaticParams() {
  const slugs = await getSlugs("reviews");
  console.log(`[Statyczna strona generowanie]`, slugs.slug);
  return slugs;
}

// To jest generowanie statycznych tytulow strony jezeli masz [cos w tym podane jak slug]
//https://www.udemy.com/course/nextjs-by-example/learn/lecture/37979378#questions
export async function generateMetadata({ params: { slug } }) {
  console.log(["--//generateMetadata SLUG to jest:", slug]);
  const review = await getReview(slug);

  if (!review) {
    return notFound();
  }

  console.log(`[TITLE w SLUG to jest]`, review.title);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);

  if (!review) {
    return notFound();
  }

  const { title, date, image, body, subtitle } = review;
  /*   console.log(`--//--[Title ReviewPage to:]`, title);
  console.log(`[ReviewPage] rendreing:`, slug); */

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
}
