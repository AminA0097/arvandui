import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import FooterMobileMenu from "@/components/navigation/FooterMobileMenu";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import Toast from "@/components/ui/Toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-[#faf9f7] text-stone-900">
        <CartProvider>
            <Navbar />
            {children}
            <Footer />
            <FooterMobileMenu />
            <Toast />
        </CartProvider>
        </body>
        </html>
    );
}