import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import Picture from "@/components/Images/Picture";
import { getReviews } from "@/library/reviews";

const HomePage = async () => {
  const data = await getReviews(3);

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you</p>
      <div className="row g-2">
        {data.map(({ title, image, date, subtitle }, index) => {
          console.log(["index to:"], index);
          return (
            <div
              key={index}
              className=" col-12 col-md-4 flex flex-col flex-wrap"
            >
              <div className="rounded border-2">
                <p className="font-bold text-md py-2">{date}</p>
                <Link
                  href="/reviews/hollow-knight"
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
