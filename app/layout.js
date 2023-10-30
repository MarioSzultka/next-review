import Link from "next/link";
export default function RootLayout(props) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/reviews">Reviews</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
