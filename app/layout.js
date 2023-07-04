import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GCC beta",
  description: "Something before the public",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {props.children}
      </body>
    </html>
  );
}
