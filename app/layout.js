import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Ben Shaw - Portfolio",
  description: "Front-End Developer based in Melbourne, Australia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
