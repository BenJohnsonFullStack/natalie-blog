import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Natalie Blog",
  description: "A blog for Natalie to write cool stories.",
};

export default function RootLayout({ children }) {
  const user = {
    username: "nattyt6969",
    password: "helloWorld!",
    type: "admin",
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg`}>
        <Header user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
