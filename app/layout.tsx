import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@components/theme-switch";
import { StarsCanvas } from "@components/StarBackground";
import { ThemeProvider } from "next-themes";
import favicon from "@public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nhu Tran | Portfolio",
  description: "Nhu Tran is a frontend developer with 10 years experience.",
  icons: [{ rel: "icon", url: favicon.src }],
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
        suppressHydrationWarning={true}
        className={`${inter.className} bg-gray-50 dark:bg-[#030014] dark:text-white/80 text-gray-950 relative pt-28`}
      >
        <div className="bg-[#fbe2e3] dark:bg-[#28154b16] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#f3d7fb] dark:bg-[#2b237db3] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeProvider attribute="class">
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-center" />
            <StarsCanvas />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
