//Components
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/globals.css";
import { orbitron, exo2 } from "./fonts";

export const metadata = {
  title: {
    template: "%s | Acme",
    default: "Acme", // a default is required when creating a template
  },
  description: "Opis strony www",
};

export default function RootLayout(props) {
  const { children } = props;

  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="container px-1 md:px-0 mx-auto flex flex-col min-h-screen bg-orange-300">
        <header>{<Navigation />}</header>

        <main className="py-3 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
