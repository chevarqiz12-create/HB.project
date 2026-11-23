// app/layout.tsx
import "./globals.css"; 
import { Footer } from "@/widgets/footer";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
       
        {children}
        <Footer />
      </body>
    </html>
  );
}
