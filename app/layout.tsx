import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Foooter";





export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body >
        <Header />

        <main  >

          {children}

        </main>

      < Footer />
    </body>
    </html >
  );
}
