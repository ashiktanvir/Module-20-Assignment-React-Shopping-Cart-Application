import React from "react";
import { useCart } from "../context/CartContext";

export default function CartModal({ isOpen, onClose }) {
    const { cart, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h3>Your Cart ({totalItems})</h3>
                    <button onClick={onClose}>&times;</button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <p className="empty-msg">Your cart is empty.</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="cart-row">
                                <img src={item.image} alt={item.title} />
                                <div className="cart-info">
                                    <h4>{item.title}</h4>
                                    <p>${item.price.toFixed(2)}</p>
                                    <div className="qty-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                </div>
                                <button className="del-btn" onClick={() => removeFromCart(item.id)}>
                                    🗑️
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="total-row">
                        <span>Total:</span>
                        <strong>${totalPrice.toFixed(2)}</strong>
                    </div>
                    <button className="checkout-btn" disabled={cart.length === 0}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}