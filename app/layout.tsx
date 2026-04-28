import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import FooterMobileMenu from "@/components/navigation/FooterMobileMenu";
import FloatingContact from "@/components/FloatinContact";
import { Toaster } from "@/components/ui/toaster";

import { Vazirmatn, Lalezar, Noto_Sans_Arabic} from "next/font/google";

const vazir = Vazirmatn({
    subsets: ["arabic", "latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-vazir",
});

const lalezar = Lalezar({
    subsets: ["arabic", "latin"],
    weight: ["400"],
    variable: "--font-lalezar",
});

const noto = Noto_Sans_Arabic({
    subsets: ["arabic"],
    weight: ["400", "500", "700"],
    variable: "--font-noto",
});

export const metadata = {
    title: "Arvand Leather",
    description: "Discover handcrafted leather bags, boots, coats, and accessories.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fa" dir="rtl" className={vazir.variable}>
        <body className={`${vazir.variable} ${lalezar.variable} ${noto.variable} min-h-screen bg-[#faf9f7] antialiased`}>
        <CartProvider>
            <Navbar />

            <main className="pb-20 md:pb-0">
                {children}
            </main>

            {/*<Footer />*/}
            <FooterMobileMenu />
            <FloatingContact />
            <Toaster />
        </CartProvider>
        </body>
        </html>
    );
}