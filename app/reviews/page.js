import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "@/components/Images/Image";
const ReviewsPage = () => {
  return (
    <>
      <Heading>Reviews</Heading>
      <p className="py-2">Here we will list all the reviews</p>
      <nav>
        <ul className="flex flex-col gap-3">
          <li className="w-80 mx-auto bg-amber-600 rounded-lg">
            <Link href="/reviews/hollow-knight">
              <Image src={"/images/hollow-knight.jpg"} />
              <p className="text-md text-center ">Hollow Knight</p>
            </Link>
          </li>
          <li className="w-80 mx-auto bg-amber-600 rounded-lg">
            <Link href="/reviews/stardew-valley">
              <Image src={"/images/stardew-valley.jpg"} />
              <p className="text-md text-center">Stardew Valley</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ReviewsPage;
