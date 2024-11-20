
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/navbar/nav";
import Footer from "@/components/Footer/footer";




export const metadata: Metadata = {
  title: "GIFT SHOP",
  description: "this is my practice website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
