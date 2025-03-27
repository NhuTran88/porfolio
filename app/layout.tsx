import "./globals.css";
import { Charm, Roboto_Mono } from "next/font/google";
import favicon from "@public/favicon.ico";
import ThemeProviderWraper from "./ThemeProviderWraper";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: "400" });
const charm = Charm({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-charm",
});

// write metta data with og image
export const metadata = {
  title: "Nhu Tran | Frontend Developer Portfolio",
  description:
    "Explore the work of Nhu Tran, a highly skilled frontend developer with over 10 years of experience in building modern, high-performance web applications.",
  icons: [{ rel: "icon", url: favicon.src }],
  author: "Nhu Tran",
  openGraph: {
    title: "Nhu Tran | Frontend Developer Portfolio",
    description:
      "Explore the work of Nhu Tran, a highly skilled frontend developer with over 10 years of experience in building modern, high-performance web applications.",
    url: "https://nhu-tran-porfolio.vercel.app/",
    type: "website",
    images: [
      {
        url: "graphImage.png",
        width: 1200,
        height: 630,
        alt: "Nhu Tran Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head />
      <body
        className={`${robotoMono.className} ${charm.variable} bg-gray-50 dark:bg-[#030014] dark:text-white/80 text-gray-950 relative pt-36`}
      >
        <div className="bg-[#fbe2e3] dark:bg-[#28154b16] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#f3d7fb] dark:bg-[#2b237db3] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeProviderWraper>{children}</ThemeProviderWraper>
      </body>
    </html>
  );
}
