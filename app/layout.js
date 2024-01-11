import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simple Coffee Listing",
  description: "a simple coffee list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
