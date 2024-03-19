import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fat Kim Coin",
  description: "Kim Jong Un's favorite coin",
  image: "/kim.jpg",
    type: "website",
    site_name: "Fat Kim Coin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <body className={inter.className}>

      {children}


    </body>


</html>
)
  ;
}
