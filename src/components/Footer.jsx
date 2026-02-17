import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-12 mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section: Tagline */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                        Engineered Strength for <br /> Demanding Projects
                    </h2>
                </div>

                {/* Center Section: Quick Links */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold text-primary uppercase mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-sm md:text-base text-gray-300">
                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/material-trading" className="hover:text-primary transition-colors">Material Trading</Link></li>
                        <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Right Section: Contact Us */}
                <div className="flex flex-col space-y-4 text-sm md:text-base">
                    <h3 className="text-xl font-bold text-primary uppercase mb-2">Contact Us</h3>

                    <div>
                        <span className="font-semibold block text-gray-300">Address:</span>
                        <p>KSA</p>
                    </div>

                    <div>
                        <span className="font-semibold block text-gray-300">Web:</span>
                        <a href="mailto:info@tenaciousarabia.com" className="hover:text-primary transition-colors block">info@tenaciousarabia.com</a>
                        <a href="https://www.tenaciousarabia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">www.tenaciousarabia.com</a>
                    </div>

                    <div>
                        <span className="font-semibold block text-gray-300">Mob:</span>
                        <a href="tel:+9660504162393" className="hover:text-primary transition-colors">+966 0504162393</a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-xs">
                &copy; {new Date().getFullYear()} Tenacious Arabia. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
