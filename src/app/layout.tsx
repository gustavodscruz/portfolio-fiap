import type { Metadata } from "next";
import "./globals.css"
import Header from "@/components/header/header";
import Footer from "@/components/Footer/footer";

export const metadata: Metadata = {
  title: "Portfólio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-background min-h-screen flex flex-col max-w-screen-xl m-auto">
        <Header/>
        <main className="flex-grow p-4">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
