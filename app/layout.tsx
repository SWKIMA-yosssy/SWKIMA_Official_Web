import "./globals.css"
import { Playfair_Display } from "next/font/google";
import Header from "./components/layout/header/header"
import Footer from "./components/layout/footer/footer"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // 使いたい太さを指定
});

export const metadata = {
  title: "Swkima Official Website",
  description: "Swkimaの公式ウェブサイトへようこそ。",
  openGraph: {
    title: "Swkima Official Website",
    description: "Swkimaの公式ウェブサイトへようこそ。",
    url: "https://swkima.com",
    siteName: "Swkima",
    images: [
      {
        url: "/images/Swkima_Logo.png",
        width: 500,
        height: 500,
        alt: "Swkima Official Website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swkima Official Website",
    description: "Swkimaの公式ウェブサイトへようこそ。",
    images: ["/images/Swkima_Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className}>
        <Header />
        <hr />
        <main>
          {children}
        </main>
        <hr />
        <Footer />
      </body>
    </html>
  );
}
