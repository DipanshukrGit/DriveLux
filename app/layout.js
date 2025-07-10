import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "DriveLux | Book. Buy. Drive.",
  description: "Discover and purchase your dream car with DriveLux — the modern platform for exploring premium, brand-new vehicles.",
  icons: {
    icon: "/logo.png", 
  },
};



export default function RootLayout({ children }) {
  return (
     <ClerkProvider>
   <html lang="en">
        
        <body className={`${inter.className}`}>
         <Header/>
          <main className="min-h-screen">{children}</main>
        

          <footer className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>  Designed with purpose. Developed with 💖.</p>
            </div>
          </footer>
        </body>
      </html>
      </ClerkProvider>
  );
}
