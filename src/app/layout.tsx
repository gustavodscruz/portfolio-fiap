import type { Metadata } from "next";
import "./globals.css"
import Header from "@/components/header/header";
import Footer from "@/components/Footer/footer";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Portfólio"
};

const spaceGrotesk = localFont({
  src: "../font/SpaceGrotesk.ttf",
  variable: "--secondary",
  weight: "100 900"
})

const epilogue = localFont({
  src: "../font/Epilogue.ttf",
  variable: "--primary",
  weight: "100 900"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${spaceGrotesk.variable} ${epilogue.variable} antialiased bg-background min-h-screen flex flex-col font-primary max-w-screen-xl m-auto`}>
        <Header/>
        <main className="flex-grow p-4">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
