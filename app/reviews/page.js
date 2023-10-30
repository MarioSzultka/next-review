import Link from "next/link";
const ReviewsPage = () => {
  return (
    <>
      <h1>Reviews</h1>
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