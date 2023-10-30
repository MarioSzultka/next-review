import Link from "next/link";
import "./globals.css";

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
                <Link href="/about" prefetch={false}>
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>
        <footer>
          Game data and images courtesy{" "}
          <a href="http://rawg.io" target="_black">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
