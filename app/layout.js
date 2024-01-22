import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: {
    default:
      "Paired | Find Compatible Roommates and Shared Flats with our Roommate Search Service",
    template: `%s | Find Compatible Roommates and Shared Flats with our Roommate Search Service`,
  },
  description:
    "Discover ideal living spaces with Paired, the roommate and shared flats search service. Create profiles, explore roommate and room ads, and connect with compatible matches for a harmonious living experience. ",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title:
      "Paired | Find Compatible Roommates and Shared Flats with our Roommate Search Service",
    description:
      "Discover ideal living spaces with Paired, the roommate and shared flats search service. Create profiles, explore roommate and room ads, and connect with compatible matches for a harmonious living experience. ",
    type: "website",
    siteName: "Paired",
    url: `${process.env.URL}`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className={`${inter.className}`}>{children}</main>
      </body>
    </html>
  );
}
