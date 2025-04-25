import "./globals.css"
import Header from "./components/layout/header/page"
import Footer from "./components/layout/footer/page"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <hr />
        <div>
          {children}
        </div>
        <hr />
        <Footer />
      </body>
    </html>
  );
}
