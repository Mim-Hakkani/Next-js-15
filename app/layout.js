import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next Js Updated Code ",
  description: "Learned by programming hero.",
  author:"Golam Hakkani Mim"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     <div>
      <header>
        <h1>আমার ওয়েবসাইট</h1>
        <nav>
          <Link href="/">হোম</Link> | <Link href="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>

      </body>
    </html>
  );
}
