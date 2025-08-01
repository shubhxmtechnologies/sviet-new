import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SVIET",
  description: "SVIET | Best Institution in North India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
