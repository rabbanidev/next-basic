import { Inter } from "next/font/google";
import "./globals.css";
import RootNavbar from "./components/RootNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootNavbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
