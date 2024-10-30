import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter, } from 'next/font/google';

import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Lendbit | P2P Lending",
  description: "Lendbit, Your gateway to seamless peer-to-peer crypto lending & borrowing. Secure, transparent, and flexible. Unlock the full potential of your digital assets.",
  icons: "./favicon.ico"
};

const inter = Inter({
  weight: ['100', '200', '300','400','500', '600', '700', '800', '900'],  
  subsets: ['latin','cyrillic'], 
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased text-white bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
