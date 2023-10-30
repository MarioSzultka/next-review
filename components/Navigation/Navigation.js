import Link from "next/link";
const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-x-2">
        <li>
          <Link
            className="text-orange-200 hover:underline font-orbitron font-bold"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="ml-auto">
          <Link className="text-orange-200 hover:underline" href="/reviews">
            Reviews
          </Link>
        </li>
        <li>
          <Link
            className="text-orange-200 hover:underline"
            href="/about"
            prefetch={false}
          >
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
