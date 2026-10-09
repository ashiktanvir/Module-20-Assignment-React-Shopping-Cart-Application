import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";
import { products } from "./data/products";

export default function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter products by title or category in real time
    const filteredProducts = products.filter(
        (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <CartProvider>
            <div className="app-container">
                <Navbar
                    onOpenCart={() => setIsCartOpen(true)}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <main className="content">
                    <h1>Explore Products</h1>
                    {filteredProducts.length > 0 ? (
                        <ProductGrid products={filteredProducts} />
                    ) : (
                        <p className="no-products-msg">No products found matching "{searchTerm}".</p>
                    )}
                </main>
                <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                <Footer />
            </div>
        </CartProvider>
    );
}