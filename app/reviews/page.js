import Link from "next/link";
import Heading from "../../components/Heading";
const ReviewsPage = () => {
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we will list all the reviews</p>
      <nav>
        <ul>
          <li>
            <Link href="/reviews/hollow-knight">Hollow Knight</Link>
          </li>
          <li>
            <Link href="/reviews/stardew-valley">Stardew Valley</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ReviewsPage;
