// app/layout.tsx
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import FooterMobileMenu from "@/components/navigation/FooterMobileMenu";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
    title: "Leather House | Premium Leather Goods",
    description: "Discover handcrafted leather bags, boots, coats, and accessories.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-[#faf9f7] antialiased">
        <CartProvider>
            <Navbar />
            <main className="pb-20 md:pb-0">{children}</main>
            <Footer />
            <FooterMobileMenu />
            <Toaster />
        </CartProvider>
        </body>
        </html>
    );
}