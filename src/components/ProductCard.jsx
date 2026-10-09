import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <span className="badge">{product.category}</span>
            <h3>{product.title}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}