import "./globals.css";
import { cx } from "@/src/utils";
import { Inter, Jost, Jockey_One } from "next/font/google";
import Header from "@/src/components/Header";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});
const jockey_one = Jockey_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-in",
});
export const metadata = {
  title: "Tamil Lingo Quest",
  description: "Tamil Literature Games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          jost.variable,
          jockey_one.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }`}
        </Script>
        <Header />
        {children}
      </body>
    </html>
  );
}
