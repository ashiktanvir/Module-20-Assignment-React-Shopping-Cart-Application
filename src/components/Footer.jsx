import React from "react";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Brand & Subtitle */}
                <div className="footer-col brand-col">
                    <h2 className="footer-logo">eStore</h2>
                    <p>ACME Industries Ltd.</p>
                    <p>Providing reliable tech since 1992</p>
                </div>

                {/* Services */}
                <div className="footer-col">
                    <h4>SERVICES</h4>
                    <ul>
                        <li><a href="#branding">Branding</a></li>
                        <li><a href="#design">Design</a></li>
                        <li><a href="#marketing">Marketing</a></li>
                        <li><a href="#advertisement">Advertisement</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div className="footer-col">
                    <h4>COMPANY</h4>
                    <ul>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#jobs">Jobs</a></li>
                        <li><a href="#press">Press kit</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="footer-col">
                    <h4>LEGAL</h4>
                    <ul>
                        <li><a href="#terms">Terms of use</a></li>
                        <li><a href="#privacy">Privacy policy</a></li>
                        <li><a href="#cookies">Cookie policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}