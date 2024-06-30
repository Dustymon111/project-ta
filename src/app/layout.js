import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tugas Akhir",
  description: "Projek Tugas Akhir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
        <Navigation/>
        {children}
        </div>
        </body>
    </html>
  );
}
