import { Inter } from 'next/font/google'
import siteConfig from "../config/site"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   metadataBase: new URL("http://localhost:3000/"),
//   alternates: {
//       canonical: "/",
//       languages: {
//           "en-US": "/en-US",
//       },
//   },
//   title: {
//       default: siteConfig.name,
//       template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//       icon: "/favicon.ico",
//       shortcut: "/favicon.ico",
//   },
//   openGraph: {
//       title: siteConfig.name,
//       description: siteConfig.description,
//       type: "website",
//       siteName: "Paired",
//       url: `${process.env.URL}`,
//   },
//   robots: {
//       index: true,
//       follow: true,
//       nocache: false,
//       googleBot: {
//           index: true,
//           follow: false,
//           noimageindex: true,
//           "max-video-preview": -1,
//           "max-image-preview": "large",
//           "max-snippet": -1,
//       },
//   },
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
