import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
    return (
        <div className="product-grid">
            {products.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    );
}