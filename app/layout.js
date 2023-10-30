import "./styles/globals.css";

//Components
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
export default function RootLayout(props) {
  const { children } = props;

  return (
    <html lang="en">
      <body className="container px-1 md:px-0 mx-auto flex flex-col min-h-screen bg-orange-800">
        <header>{<Navigation />}</header>

        <main className="py-3 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
