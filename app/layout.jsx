import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SVIET",
    template: "%s - SVIET"
  },
  description: "SVIET | Best Institution in North India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        <link
          rel="icon"
          type="image/png"
          href="https://sviet.org.in/wp-content/uploads/2023/04/cropped-svietlogooo-1-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://sviet.org.in/wp-content/uploads/2023/04/cropped-svietlogooo-1-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="https://sviet.org.in/wp-content/uploads/2023/04/cropped-svietlogooo-1-180x180.png"
          sizes="180x180"
        />
        <meta
          name="msapplication-TileImage"
          content="https://sviet.org.in/wp-content/uploads/2023/04/cropped-svietlogooo-1-270x270.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
