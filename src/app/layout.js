import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  title: "swap.it",
  description: "Discover, buy, exchange, or donate items easily with Swap It — your trusted community marketplace.",
   icons: {
    icon: "/images/swap.itLogo.png", 
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} antialiased bg-white`}
      >
          {children}
      </body>
    </html>
  );
}
