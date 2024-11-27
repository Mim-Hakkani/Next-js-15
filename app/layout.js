import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Share/Header/Header";


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
  
      <Header/>
      <main>{children}</main>

      </body>
    </html>
  );
}
