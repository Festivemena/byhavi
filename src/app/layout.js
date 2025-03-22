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
  title: "Havitech Core | Innovative Hardware & Software Solutions",
  description:
    "Havitech Core is a cutting-edge technology company specializing in hardware engineering, IoT, AI, and Robotics development. Explore our innovative solutions for businesses and developers.",
  keywords:
    "Havitech Core, hardware engineering, Robotics, IoT solutions, AI development, software development, embedded systems, cloud computing, blockchain, full-stack development",
  author: "Havitech Core",
  robots: "index, follow",
  openGraph: {
    title: "Havitech Core | Crafting Innovations across Ecosystems",
    description:
      "Discover groundbreaking technology solutions in IoT, AI and robotics development at Havitech Core.",
    url: "https://byhavi.tech",
    type: "website",
    image: "https://havitechcore.com/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Havitech Core | Crafting Innovations across Ecosystems",
    description:
      "Havitech Core delivers next-gen hardware, IoT, AI, and robotics solutions for businesses and developers.",
    image: "https://havitechcore.com/twitter-image.jpg",
    site: "@havitech_cc",
  },
  canonical: "https://byhavi.tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
