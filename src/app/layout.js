import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Landing Page - Gicarol",
  description: "LP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${space.variable} antialiased`}>
        <main> {children}</main>
      </body>
    </html>
  );
}
