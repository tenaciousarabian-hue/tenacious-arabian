import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png'; // Reusing hero-bg for now, or could be a new one
import materialTradingImg from '../assets/material-trading.png';
import equipmentRentalImg from '../assets/equipment-rental.png';
import manpowerSupplyImg from '../assets/manpower-supply.jpg';
import manpowerSupplyImg2 from '../assets/manpower-supply-2.jpg';
import manpowerSupplyImg3 from '../assets/manpower-supply-3.jpg';
import plantPipingImg1 from '../assets/plant-piping-1.jpg';
import plantPipingImg2 from '../assets/plant-piping-2.jpg';
import plantPipingImg3 from '../assets/plant-piping-3.jpg';
import hvacImg1 from '../assets/hvac-1.jpg';
import hvacImg2 from '../assets/hvac-2.jpg';
import hvacImg3 from '../assets/hvac-3.jpg';
import hvacImg4 from '../assets/hvac-4.jpg';
import fireFightingImg1 from '../assets/fire-fighting-1.jpg';
import fireFightingImg2 from '../assets/fire-fighting-2.jpg';
import fireFightingImg3 from '../assets/fire-fighting-3.jpg';
import shutdownBg from '../assets/shutdown-maintenance.png';
import structuralBg from '../assets/structural-construction.png';
import columnsImg1 from '../assets/columns-beams-1.png';
import columnsImg2 from '../assets/columns-beams-2.jpg';
import columnsImg3 from '../assets/columns-beams-3.jpg';
import stairsImg1 from '../assets/stairs-ladders-1.jpg';
import stairsImg2 from '../assets/stairs-ladders-2.jpg';
import stairsImg3 from '../assets/stairs-ladders-3.jpg';
import gratingImg1 from '../assets/grating-gantries-1.jpg';
import gratingImg2 from '../assets/grating-gantries-2.jpg';
import gratingImg3 from '../assets/grating-gantries-3.jpg';
import tanksImg1 from '../assets/tanks-1.jpg';
import tanksImg2 from '../assets/tanks-2.jpg';
import tanksImg3 from '../assets/tanks-3.jpg';
import tanksImg4 from '../assets/tanks-4.jpg';
import fenceImg1 from '../assets/fencing-1.jpg';
import fenceImg2 from '../assets/fencing-2.jpg';
import fenceImg3 from '../assets/fencing-3.jpg';
import supportImg1 from '../assets/support-structures-1.jpg';
import supportImg2 from '../assets/support-structures-2.jpg';
import supportImg3 from '../assets/support-structures-3.jpg';
import roadImg1 from '../assets/road-marking-1.jpg';
import roadImg2 from '../assets/road-marking-2.jpg';
import roadImg3 from '../assets/road-marking-3.jpg';

const Services = () => {
    // Scroll to top on mount is handled by ScrollToTop component in App.jsx usually, 
    // but just in case, we can ensure it here or rely on the global one.

    return (
        <main className="flex-grow overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Services Hero Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl leading-tight mb-6">
                            Our <span className="text-primary">Services</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Comprehensive industrial solutions tailored to your project needs. From material trading to specialized construction services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Material Trading Feature Section */}
            <section id="material-trading" className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-1">
                        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wide">
                            CORE SERVICE
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-6">Material <span className="text-primary">Trading</span></h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious provides reliable and efficient material trading and supply solutions to support industrial, construction, and infrastructure projects of all scales.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We source, stock, and deliver a wide range of high-quality materials that meet project specifications, industry standards, and client timelines.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/material-trading"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Explore Material Trading
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="order-2 relative group">
                        <div className="absolute -inset-4 bg-gray-100 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src={materialTradingImg}
                                alt="Material Trading"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white font-medium text-lg">High Quality Industrial Materials</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipment Rental Section */}
            <section id="equipment-rental" className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Image Side - Order 2 on Mobile, Order 1 on Desktop */}
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src={equipmentRentalImg}
                                alt="Equipment Rental Fleet"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white font-medium text-lg">Heavy Duty Equipment for Any Job</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content - Order 1 on Mobile, Order 2 on Desktop */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wide">
                            FLEET SERVICES
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Equipment <span className="text-primary">Rental</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6">Powering Projects with the Right Equipment</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious offers reliable and cost-effective equipment rental solutions to support construction, industrial, infrastructure, and plant operations.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our extensive fleet of well-maintained equipment is designed to meet the demands of projects of all sizes, ensuring safe, efficient, and uninterrupted execution on site.
                        </p>

                        {/* Equipment Categories Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Lifting Equipment */}
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-dark mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                    Lifting Equipment
                                </h4>
                                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                                    <li>• Hydraulic Crane</li>
                                    <li>• Crawler Crane</li>
                                    <li>• Boom Truck</li>
                                    <li>• Forklift & Manlifts</li>
                                    <li>• Mobile & Tower Cranes</li>
                                </ul>
                            </div>

                            {/* Transportation */}
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-dark mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                    Transportation
                                </h4>
                                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                                    <li>• Flat Bed & Low Bed Trailers</li>
                                    <li>• 55 & 33 Seated Buses</li>
                                    <li>• 15 Seated Hi Ace</li>
                                    <li>• Pick Up, SUV's & Sedan</li>
                                </ul>
                            </div>

                            {/* Earth Moving */}
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-dark mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                    Earth Moving
                                </h4>
                                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                                    <li>• Bulldozer & Grader</li>
                                    <li>• Wheel Loaders</li>
                                    <li>• Excavator & Rock Breaker</li>
                                    <li>• Dump Truck & Rollers</li>
                                </ul>
                            </div>

                            {/* Power & Portable */}
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-dark mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                    Power & Machinery
                                </h4>
                                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                                    <li>• Air Compressor</li>
                                    <li>• Tower Lights</li>
                                    <li>• Welding Machine</li>
                                    <li>• Power Generator</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manpower Supply Section */}
            <section id="manpower-supply" className="py-20 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Text Content - Order 1 */}
                    <div className="order-1">
                        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wide">
                            WORKFORCE SOLUTIONS
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Manpower <span className="text-primary">Supply</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6">Dependable Workforce for Every Project</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious provides dependable manpower supply solutions to support construction, industrial, plant, and infrastructure projects.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We supply skilled, semi-skilled, and unskilled workforce tailored to meet project requirements, timelines, and safety standards.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                            {[
                                {
                                    title: "Engineers",
                                    items: ["Planning Engineer", "Field Engineer", "Cost Engineer", "Safety Engineer", "Contract Engineer", "Civil Engineer", "Instrument Engineer", "Piping Engineer", "Mechanical Engineer", "Electrical Engineer", "Commissioning Engineer", "QA/QC Engineer"]
                                },
                                {
                                    title: "Supervisors",
                                    items: ["Civil Supervisor", "Mechanical Supervisor", "Piping Supervisor", "Electrical Supervisor", "Instrument Supervisor", "Safety Supervisor", "Commissioning Supervisor", "Welding Supervisor", "Painting Supervisor"]
                                },
                                {
                                    title: "Foremen",
                                    items: ["Civil Foreman", "Mechanical Foreman", "Piping Foreman", "Welding Foreman", "Structural Foreman", "Instrument Foreman", "Electrical Foreman", "Insulation & Rigger Foreman"]
                                },
                                {
                                    title: "Welders",
                                    items: ["TIG Welder", "ARC Welder", "General Welder", "Structural Welder", "Pipe Welder", "Butt Welder"]
                                },
                                {
                                    title: "Technicians & Fitters",
                                    items: ["Millwright Technician", "Electrical Technician", "Instrument Technician", "Mechanical Fitter", "Instrument Fitter", "Millwright Fitter"]
                                },
                                {
                                    title: "Fabricators & Related",
                                    items: ["Pipe Fabricator", "Steel Fabricator", "Duct Fabricator", "Concrete Worker", "Steel Fitter & Erector", "Duct Fitter"]
                                },
                                {
                                    title: "Safety & Support",
                                    items: ["Safety Officer", "Rigger Level I, II & III", "Scaffolder", "Work Permit Receiver", "Fire Watchman", "Standby Man", "Skilled & Unskilled Labor"]
                                },
                                {
                                    title: "Skilled Trades",
                                    items: ["Carpenter", "Mason", "Spray Painter", "Painter", "Sandblaster"]
                                },
                                {
                                    title: "Operators & Drivers",
                                    items: ["Crane Operator", "Forklift Operator", "Heavy Driver", "Light Driver"]
                                },
                                {
                                    title: "Controllers & Inspectors",
                                    items: ["Cost Controller", "Material Controller", "Document Controller", "QA/QC Inspector", "Accountant & Store Keeper"]
                                }
                            ].map((category, idx) => (
                                <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary hover:bg-gray-100 transition-colors">
                                    <h4 className="font-bold text-dark mb-2">{category.title}</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {category.items.map((item, i) => (
                                            <li key={i}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Order 2 */}
                    <div className="order-2 relative">
                        <div className="lg:sticky lg:top-24">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 relative group overflow-hidden rounded-xl shadow-xl">
                                    <img
                                        src={manpowerSupplyImg}
                                        alt="Skilled Manpower Team Main"
                                        className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white font-medium">Professional Team</p>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                    <img
                                        src={manpowerSupplyImg2}
                                        alt="Skilled Manpower Team Work"
                                        className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                    <img
                                        src={manpowerSupplyImg3}
                                        alt="Skilled Manpower Team Safety"
                                        className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            {/* Decorative Element - Anchored to sticky container */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plant Piping Section */}
            <section id="plant-piping" className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Order 2 on Mobile, Order 1 on Desktop (Alternating) */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={plantPipingImg2}
                                    alt="Industrial Plant Structure"
                                    className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={plantPipingImg3}
                                    alt="Piping Fabrication"
                                    className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="col-span-2 relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={plantPipingImg1}
                                    alt="Plant Piping Installation"
                                    className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-medium">Seamless Integration</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* Text Content - Order 1 on Mobile, Order 2 on Desktop */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wide">
                            INDUSTRIAL INFRASTRUCTURE
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Plant Piping & <span className="text-primary">Installation</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6">Related Equipment Services</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious delivers comprehensive plant piping solutions and installation of related equipment for industrial facilities, processing plants, and infrastructure projects.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our services cover the complete scope of piping works—from material procurement and fabrication to installation, testing, and commissioning—ensuring seamless integration with existing plant systems.
                        </p>

                        {/* Key Features List */}
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-dark">Material Procurement & Fabrication</h4>
                                    <p className="text-gray-600">Sourcing high-grade materials and precision fabrication to meet exact specifications.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-dark">Installation & Integration</h4>
                                    <p className="text-gray-600">Expert installation ensuring seamless integration with existing plant infrastructure.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-dark">Testing & Commissioning</h4>
                                    <p className="text-gray-600">Rigorous testing protocols to guarantee safety and operational readiness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HVAC Section */}
            <section id="hvac-systems" className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content - Order 1 */}
                    <div className="order-1">
                        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wide">
                            CLIMATE CONTROL SYSTEMS
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Procurement & Installation of <span className="text-primary">HVAC</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">& Components</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious provides end-to-end procurement and installation of HVAC systems and their components for industrial, commercial, and infrastructure projects. Our services cover system selection, material sourcing, installation, testing, and commissioning to ensure optimal indoor air quality, energy efficiency, and operational reliability.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We specialize in the installation of chillers, air handling units (AHU), fan coil units (FCU), ducting systems, ventilation units, exhaust systems, piping, insulation, diffusers, dampers, and control components, executed in accordance with approved drawings, technical specifications, and international standards.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                                "Chillers & Cooling Systems", "Air Handling Units (AHU)",
                                "Fan Coil Units (FCU)", "Ducting & Ventilation",
                                "Exhaust Systems", "Piping & Insulation"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Order 2 */}
                    <div className="order-2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={hvacImg1}
                                    alt="HVAC Chiller Installation"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={hvacImg2}
                                    alt="HVAC Technician"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={hvacImg3}
                                    alt="Ducting Systems"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={hvacImg4}
                                    alt="AC Units Grid"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* Fire Fighting Section */}
            <section id="fire-fighting" className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Order 2 on Mobile, Order 1 on Desktop */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={fireFightingImg1}
                                    alt="Industrial Fire Pump System"
                                    className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-medium">Advanced Pumping Systems</p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={fireFightingImg2}
                                    alt="Fire Protection Control Room"
                                    className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={fireFightingImg3}
                                    alt="Fire Safety Engineer"
                                    className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-red-500/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* Text Content - Order 1 on Mobile, Order 2 on Desktop */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-bold text-sm mb-4 tracking-wide">
                            SAFETY & PROTECTION
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Procurement & Installation of <span className="text-red-600">Fire Systems</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">Protection Equipment</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious provides complete procurement and installation services for fire fighting and fire protection systems, ensuring the safety of personnel, assets, and facilities across industrial, commercial, and infrastructure projects.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our solutions are designed and executed in compliance with approved drawings, local regulations, and international fire safety standards.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Fire Pump Systems", "Sprinkler Systems",
                                "Fire Alarm & Detection", "Hydrant Systems",
                                "Gas Suppression Systems"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Shutdown Activities Section */}
            <section id="shutdown-activities" className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content - Order 1 */}
                    <div className="order-1">
                        <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm mb-4 tracking-wide">
                            PLANT MAINTENANCE
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Shutdown Related <span className="text-yellow-600">Activities</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">Planned & Emergency Services</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious provides comprehensive shutdown-related services to support planned and emergency shutdowns in industrial plants and process facilities.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our experienced teams work with precision, safety, and efficiency to ensure shutdown activities are executed within tight schedules while maintaining strict compliance with safety and quality standards.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                                "Turnaround Management", "Emergency Maintenance",
                                "Vessel & Tank Cleaning", "Heat Exchanger Services",
                                "Valve Overhauling", "Piping Modifications"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Order 2 */}
                    <div className="order-2 relative">
                        <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-yellow-600/10 mix-blend-overlay z-10"></div>
                            <img
                                src={shutdownBg}
                                alt="Industrial Plant Shutdown Activity"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 min-h-[400px]"
                            />
                            {/* Overlay Info Card */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border-l-4 border-yellow-500 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="text-lg font-bold text-dark mb-1">Zero Downtime Focus</h4>
                                <p className="text-sm text-gray-600">Minimizing operational disruption through strategic planning.</p>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-yellow-500/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* Structural Construction Section */}
            <section id="structural-construction" className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Order 2 on Mobile, Order 1 on Desktop */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10"></div>
                            <img
                                src={structuralBg}
                                alt="Structural Steel Construction"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 min-h-[400px]"
                            />
                            {/* Overlay Info Card */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border-l-4 border-blue-600 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="text-lg font-bold text-dark mb-1">Precision Engineering</h4>
                                <p className="text-sm text-gray-600">Building the backbone of modern infrastructure.</p>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Text Content - Order 1 on Mobile, Order 2 on Desktop */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mb-4 tracking-wide">
                            CONSTRUCTION & ENGINEERING
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Structural Construction & <span className="text-blue-700">Fabrication</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">Work & Installation</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious specializes in the construction and fabrication of structural works for industrial, commercial, and infrastructure projects.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our services cover the complete cycle—from design interpretation and material procurement to fabrication, erection, and finishing—ensuring strength, precision, and long-term durability.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Steel Structure Fabrication", "On-site Erection",
                                "Industrial Sheds & Warehouses", "Pipe Racks & Supports",
                                "Platform & Grating Works"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Columns & Beams Section */}
            <section id="columns-beams" className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content - Order 1 */}
                    <div className="order-1">
                        <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-sm mb-4 tracking-wide">
                            STRUCTURAL SUPPORT
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Columns & <span className="text-slate-600">Beams</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">Fabrication & Installation</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious undertakes the fabrication, supply, and installation of structural columns and beams for industrial, commercial, and infrastructure projects.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our solutions are engineered to provide strong load-bearing support while ensuring dimensional accuracy, stability, and long-term performance.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                                "Load-Bearing Structures", "Custom Fabrication",
                                "High-Strength Steel", "Precision Installation",
                                "Industrial Support Systems", "Dimensional Accuracy"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Order 2 */}
                    <div className="order-2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={columnsImg2}
                                    alt="Concrete Columns"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={columnsImg3}
                                    alt="Steel Beams Construction"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="col-span-2 relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={columnsImg1}
                                    alt="Structural Framework"
                                    className="w-full h-56 sm:h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-medium">Robust Structural Integrity</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-slate-500/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* Stairs, Ladders & Handrails Section */}
            <section id="stairs-ladders" className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Order 2 on Mobile, Order 1 on Desktop */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-12 gap-4 h-[500px]">
                            {/* Main Image */}
                            <div className="col-span-8 row-span-2 relative group rounded-2xl overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-teal-900/10 mix-blend-overlay z-10"></div>
                                <img
                                    src={stairsImg1}
                                    alt="Industrial Staircase"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Secondary Images */}
                            <div className="col-span-4 relative group rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={stairsImg2}
                                    alt="Safety Ladders"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="col-span-4 relative group rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={stairsImg3}
                                    alt="Steel Handrails"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Text Content - Order 1 on Mobile, Order 2 on Desktop */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-800 font-bold text-sm mb-4 tracking-wide">
                            ACCESS SOLUTIONS
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Stairs, Ladders & <span className="text-teal-600">Handrails</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">Safe & Durable Access</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious provides fabrication, supply, and installation of stairs, ladders, and handrails for industrial plants, commercial facilities, and infrastructure projects.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our solutions are designed to ensure safe access, ease of movement, and long-term durability in demanding operating environments.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Industrial Staircases", "Cat Ladders & Cages",
                                "Safety Handrails & Guardrails", "Platform Gratings",
                                "OSHA Compliant Designs"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Grating & Gantries Section */}
            <section id="grating-gantries" className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content - Order 1 */}
                    <div className="order-1">
                        <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-4 tracking-wide">
                            SAFE WALKWAYS
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Grating & <span className="text-indigo-600">Gantries</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">Engineered for Safe Movement</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious delivers fabrication and installation of grating and gantry systems for industrial plants, process facilities, and infrastructure projects.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our solutions are engineered to provide safe access, efficient workflow, and reliable support for operations and maintenance activities.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                                "Industrial Gratings", "Overhead Gantries",
                                "Walkway Systems", "Drainage Covers",
                                "Heavy Duty Flooring", "Access Platforms"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Order 2 */}
                    <div className="order-2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={gratingImg1}
                                    alt="Metal Grating Detail"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={gratingImg3}
                                    alt="Industrial Walkway"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="col-span-2 relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={gratingImg2}
                                    alt="Gantry System"
                                    className="w-full h-56 sm:h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-medium">Robust & Reliable Access</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-indigo-500/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* Tanks Section */}
            <section id="industrial-tanks" className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Order 2 on Mobile, Order 1 on Desktop */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={tanksImg1}
                                    alt="Industrial Water Tank"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={tanksImg2}
                                    alt="Horizontal Chemical Tank"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={tanksImg3}
                                    alt="Fuel Storage Tanks"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={tanksImg4}
                                    alt="Process Tanks"
                                    className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            {/* Overlay Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-2xl border-2 border-cyan-500 z-20 text-center w-32 h-32 flex flex-col items-center justify-center">
                                <span className="text-3xl font-bold text-cyan-600">100%</span>
                                <span className="text-xs font-semibold text-gray-600">Leak-Free Tested</span>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Text Content - Order 1 on Mobile, Order 2 on Desktop */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-cyan-800 font-bold text-sm mb-4 tracking-wide">
                            STORAGE SOLUTIONS
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Industrial <span className="text-cyan-600">Tanks</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">Fabrication & Installation</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious specializes in the fabrication, supply, and installation of industrial tanks designed to meet the operational needs of plants, utilities, and infrastructure projects.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We undertake construction of storage tanks, water tanks, fuel tanks, chemical tanks, and process tanks, ensuring leak-free and structurally sound installations.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Storage Tanks", "Water & Fuel Tanks",
                                "Chemical Process Tanks", "High-Quality Steel",
                                "Surface Treatment", "Erection & Testing"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Steel Fencing Section */}
            <section id="steel-fencing" className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content - Order 1 */}
                    <div className="order-1">
                        <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-4 tracking-wide">
                            SECURE BOUNDARIES
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Steel <span className="text-emerald-600">Fencing</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">Strong Steel, Secure Boundaries</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious provides fabrication, supply, and installation of steel fencing systems for industrial plants, commercial facilities, and infrastructure projects.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our fencing solutions are designed to ensure security, durability, and controlled access while withstanding harsh environmental conditions.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Perimeter Fencing", "High-Security Mesh",
                                "Chain Link Systems", "Anti-Climb Barriers",
                                "Automated Gates", "Custom Fabrication"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Order 2 */}
                    <div className="order-2 relative">
                        <div className="grid grid-cols-12 gap-4 h-[500px]">
                            {/* Main Image */}
                            <div className="col-span-8 row-span-2 relative group rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={fenceImg1}
                                    alt="Security Fencing"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-60"></div>
                            </div>
                            {/* Secondary Images */}
                            <div className="col-span-4 relative group rounded-2xl overflow-hidden shadow-lg h-1/2">
                                <img
                                    src={fenceImg2}
                                    alt="Chain Link Fencing"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="col-span-4 relative group rounded-2xl overflow-hidden shadow-lg h-[calc(100%-1rem)] mt-4">
                                <img
                                    src={fenceImg3}
                                    alt="Industrial Gates"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* Equipment Support Structures Section */}
            <section id="equipment-support" className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Order 2 on Mobile, Order 1 on Desktop */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group overflow-hidden rounded-xl shadow-xl row-span-2 h-full">
                                <img
                                    src={supportImg2}
                                    alt="Structural Tower"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl h-48 sm:h-64">
                                <img
                                    src={supportImg1}
                                    alt="Equipment Support Frame"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-xl h-48 sm:h-64">
                                <img
                                    src={supportImg3}
                                    alt="Industrial Support Grid"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Text Content - Order 1 on Mobile, Order 2 on Desktop */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-800 font-bold text-sm mb-4 tracking-wide">
                            STRUCTURAL STABILITY
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Equipment <span className="text-orange-600">Support</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">Safe Support for Critical Equipment</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious designs, fabricates, and installs equipment support structures to ensure safe, stable, and efficient operation of industrial and mechanical equipment.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our solutions are engineered to meet load requirements, operational conditions, and site-specific constraints across industrial plants and infrastructure facilities.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                                "Machine Foundations", "Pipe Racks",
                                "Conveyor Supports", "Vibration Isolation",
                                "Heavy Load Bearings", "Custom Frames"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Road Marking Section */}
            <section id="road-marking" className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content - Order 1 */}
                    <div className="order-1">
                        <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 font-bold text-sm mb-4 tracking-wide">
                            TRAFFIC SAFETY
                        </div>
                        <h2 className="text-3xl font-bold text-dark mb-2">Road <span className="text-yellow-600">Marking</span></h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-6 font-primary">Safety & Order for Infrastructure</h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious provides reliable road marking services to enhance traffic safety, visibility, and orderly movement across industrial facilities, commercial areas, and public infrastructure.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our road marking solutions are designed to meet regulatory requirements while ensuring long-lasting performance under heavy traffic and harsh weather conditions.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Industrial Safety Marking", "Parking Lot Striping",
                                "Reflective Paint", "Traffic Signage",
                                "Directional Arrows", "Hazard Zones"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Order 2 */}
                    <div className="order-2 relative">
                        <div className="grid grid-cols-2 gap-4 h-[500px]">
                            {/* Main Tall Image */}
                            <div className="row-span-2 relative group rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={roadImg2}
                                    alt="Road Marking Application"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 to-transparent opacity-60"></div>
                            </div>
                            {/* Secondary Images */}
                            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={roadImg1}
                                    alt="Yellow Stripes"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={roadImg3}
                                    alt="Road Workers"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 bottom-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>


        </main >
    );
};

export default Services;
