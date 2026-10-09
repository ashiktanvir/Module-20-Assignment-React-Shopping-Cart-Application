import React from "react";
import { useCart } from "../context/CartContext";

export default function Navbar({ onOpenCart, searchTerm, setSearchTerm }) {
    const { totalItems } = useCart();

    return (
        <header className="navbar">
            {/* Brand */}
            <div className="nav-brand">
                <h2 className="navbar-logo">eStore</h2>
            </div>

            {/* Centered Search Bar */}
            <div className="nav-search-bar">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button className="search-btn" aria-label="Search">
                    <svg
                        className="search-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
            </div>

            {/* Cart Button */}
            <button className="amazon-cart-btn" onClick={onOpenCart} aria-label="View Cart">
                <div className="cart-icon-wrapper">
                    <span className="cart-count-badge">{totalItems}</span>
                    <svg
                        className="cart-svg"
                        viewBox="0 0 40 32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M1 2h6l4.2 18.2a2 2 0 0 0 2 1.8h17.6a2 2 0 0 0 2-1.6L36 7H9" />
                        <circle cx="15" cy="27" r="2.5" fill="currentColor" stroke="none" />
                        <circle cx="29" cy="27" r="2.5" fill="currentColor" stroke="none" />
                    </svg>
                </div>
                <span className="cart-label">Cart</span>
            </button>
        </header>
    );
}