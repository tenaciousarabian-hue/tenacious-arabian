import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, ChevronDown, X } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
    const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);

    const desktopDropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'ABOUT US', path: '/about' },
        { name: 'Material trading', path: '/material-trading' },
        { name: 'services', path: '/services', isDropdown: true },
        { name: 'contact us', path: '/contact' },
    ];

    const serviceLinks = [
        { name: 'Material Trading', id: 'material-trading' },
        { name: 'Equipment Rental', id: 'equipment-rental' },
        { name: 'Manpower Supply', id: 'manpower-supply' },
        { name: 'Plant Piping', id: 'plant-piping' },
        { name: 'HVAC Systems', id: 'hvac-systems' },
        { name: 'Fire Fighting', id: 'fire-fighting' },
        { name: 'Shutdown Activities', id: 'shutdown-activities' },
        { name: 'Structural Construction', id: 'structural-construction' },
        { name: 'Columns & Beams', id: 'columns-beams' },
        { name: 'Stairs & Ladders', id: 'stairs-ladders' },
        { name: 'Grating & Gantries', id: 'grating-gantries' },
        { name: 'Industrial Tanks', id: 'industrial-tanks' },
        { name: 'Steel Fencing', id: 'steel-fencing' },
        { name: 'Equipment Support', id: 'equipment-support' },
        { name: 'Road Marking', id: 'road-marking' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Handle Desktop Dropdown Outside Click
            if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
                setIsDesktopServicesOpen(false);
            }

            // Handle Mobile Menu Outside Click
            if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                // Check if the click was on the toggle button itself (to avoid immediate re-opening)
                const toggleBtn = document.getElementById('mobile-menu-toggle');
                if (toggleBtn && toggleBtn.contains(event.target)) {
                    return;
                }
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const handleServiceClick = (id) => {
        setIsMobileMenuOpen(false);
        setIsDesktopServicesOpen(false);
        setIsMobileServicesExpanded(false);
        navigate('/services');
        // Small timeout to allow navigation to react before scrolling
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };


    return (
        <header className="bg-dark text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo & Company Name */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Tenacious Arabia Logo" className="h-16 w-auto object-contain" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-bold leading-none tracking-wider text-primary">TENACIOUS</h1>
                        <p className="text-[0.6rem] font-semibold tracking-widest text-white uppercase mt-1">
                            Arabian Contracting Co Ltd
                        </p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 items-center">
                    {navItems.map((item) => (
                        item.isDropdown ? (
                            <div key={item.name} className="relative" ref={desktopDropdownRef}>
                                <button
                                    onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                                    className="flex items-center text-sm font-semibold uppercase hover:text-primary transition-colors duration-300 focus:outline-none"
                                >
                                    {item.name}
                                    <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${isDesktopServicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Desktop Dropdown Menu */}
                                {isDesktopServicesOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white text-dark rounded-md shadow-lg py-2 z-50 animate-fadeIn border-t-4 border-primary max-h-[80vh] overflow-y-auto">
                                        {serviceLinks.map((service) => (
                                            <button
                                                key={service.id}
                                                onClick={() => handleServiceClick(service.id)}
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary transition-colors border-b border-gray-100 last:border-0"
                                            >
                                                {service.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-sm font-semibold uppercase hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    id="mobile-menu-toggle"
                    className="md:hidden text-white hover:text-primary focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <>
                    {/* Overlay Backdrop */}
                    <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>

                    {/* Right-Side Drawer */}
                    <div
                        ref={mobileMenuRef}
                        className="fixed inset-y-0 right-0 z-50 w-64 bg-dark shadow-2xl transform transition-transform duration-300 ease-in-out h-full overflow-y-auto border-l border-gray-700"
                    >
                        <div className="flex justify-between items-center p-4 border-b border-gray-700">
                            <span className="text-lg font-bold text-primary">Menu</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white hover:text-primary focus:outline-none"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col px-4 py-4 space-y-4">
                            {navItems.map((item) => (
                                item.isDropdown ? (
                                    <div key={item.name}>
                                        <button
                                            onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                                            className="flex items-center justify-between w-full text-left text-base font-semibold uppercase hover:text-primary transition-colors duration-300 py-2 border-b border-gray-700/50"
                                        >
                                            {item.name}
                                            <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${isMobileServicesExpanded ? 'rotate-180' : ''}`} />
                                        </button>
                                        {/* Mobile Dropdown Menu */}
                                        {isMobileServicesExpanded && (
                                            <div className="pl-4 border-l-2 border-primary/30 ml-2 mt-2 space-y-2 bg-black/20 rounded-md py-2">
                                                {serviceLinks.map((service) => (
                                                    <button
                                                        key={service.id}
                                                        onClick={() => handleServiceClick(service.id)}
                                                        className="block w-full text-left py-2 px-2 text-sm text-gray-300 hover:text-primary hover:bg-white/5 rounded transition-colors"
                                                    >
                                                        {service.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="block text-base font-semibold uppercase hover:text-primary transition-colors duration-300 py-2 border-b border-gray-700/50"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                </>
            )}
        </header >
    );
};

export default Header;
