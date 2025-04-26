import "./globals.css"
import { Playfair_Display } from "next/font/google";
import Header from "./components/layout/header/header"
import Footer from "./components/layout/footer/footer"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // 使いたい太さを指定
});

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
