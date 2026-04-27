// components/Footer.tsx
import Link from "next/link";

/**
 * Footer component with links and copyright
 */
export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-medium mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/products/bags" className="hover:text-primary transition">Bags</Link></li>
                            <li><Link href="/products/boots" className="hover:text-primary transition">Boots</Link></li>
                            <li><Link href="/products/coats" className="hover:text-primary transition">Coats</Link></li>
                            <li><Link href="/products/accessories" className="hover:text-primary transition">Accessories</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
                            <li><Link href="/shipping" className="hover:text-primary transition">Shipping</Link></li>
                            <li><Link href="/returns" className="hover:text-primary transition">Returns</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
                            <li><Link href="/sustainability" className="hover:text-primary transition">Sustainability</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium mb-4">Follow Us</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition">Instagram</Link></li>
                            <li><Link href="#" className="hover:text-primary transition">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-primary transition">Facebook</Link></li>
                            <li><Link href="#" className="hover:text-primary transition">Pinterest</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Leather House. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}