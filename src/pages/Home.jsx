import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import aboutUsImg from '../assets/about-us.png';
import materialTradingImg from '../assets/material-trading.png';

const Home = () => {
    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-left z-10">
                        <h1 className="text-4xl tracking-tight font-extrabold text-dark sm:text-5xl md:text-6xl leading-tight">
                            <span className="block">Building the Future</span>
                            <span className="block text-primary">With Tenacity</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 sm:mt-5 sm:text-xl md:mt-5 md:max-w-xl">
                            Deliver top-tier contracting services across the Kingdom of Saudi Arabia. We ensure quality, safety, and efficiency in every project.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <Link to="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative lg:h-full z-10">
                        <img
                            src={heroBg}
                            alt="Modern Construction Site"
                            className="rounded-lg shadow-2xl object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Order 2 on Mobile, Order 1 on Desktop */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute -inset-4 bg-primary/20 rounded-xl transform -rotate-2"></div>
                        <img
                            src={aboutUsImg}
                            alt="Industrial Activities"
                            className="relative rounded-lg shadow-xl w-full object-cover transform transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>

                    {/* Text Side - Order 1 on Mobile, Order 2 on Desktop */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-dark mb-6">About <span className="text-primary">Us</span></h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious is a dynamic and reliable service provider delivering comprehensive industrial, construction, and project support solutions across multiple sectors.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            With expertise spanning material trading and supply, equipment rental, manpower supply, plant piping, HVAC systems, firefighting systems, structural construction, fabrication, and road marking, we serve as a single-source partner for complex project requirements.
                        </p>
                        <div className="mt-8">
                            <a href="/about" className="text-primary font-semibold hover:text-orange-600 transition-colors inline-flex items-center">
                                Learn More
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Material Trading Section */}
            <section id="material-trading" className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Side - Order 1 */}
                    <div className="order-1">
                        <h2 className="text-3xl font-bold text-dark mb-6">Material <span className="text-primary">Trading</span></h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Tenacious provides reliable and efficient material trading and supply solutions to support industrial, construction, and infrastructure projects of all scales.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We source, stock, and deliver a wide range of high-quality materials that meet project specifications, industry standards, and client timelines.
                        </p>
                        <div className="mt-8">
                            <Link to="/material-trading" className="text-primary font-semibold hover:text-orange-600 transition-colors inline-flex items-center">
                                View Products
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Image Side - Order 2 */}
                    <div className="order-2 relative">
                        <div className="absolute -inset-4 bg-dark/10 rounded-xl transform rotate-2"></div>
                        <img
                            src={materialTradingImg}
                            alt="Material Trading Warehouse"
                            className="relative rounded-lg shadow-xl w-full object-cover transform transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-dark mb-4">Our <span className="text-primary">Services</span></h2>
                        <p className="text-gray-600">
                            We offer a wide range of specialized services to meet the diverse needs of our clients in the industrial and construction sectors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Material Trading", link: "/material-trading" },
                            { title: "Equipment Rental", link: "/services#equipment-rental" },
                            { title: "Manpower Supply", link: "/services#manpower-supply" },
                            { title: "Plant Piping & Installation", link: "/services#plant-piping" },
                            { title: "Procurement & Installation of HVAC", link: "/services#hvac-systems" },
                            { title: "Fire Fighting / Protection Systems", link: "/services#fire-fighting" },
                            { title: "Shutdown Related Activities", link: "/services#shutdown-activities" },
                            { title: "Structural Construction & Fabrication", link: "/services#structural-construction" },
                            { title: "Columns & Beams", link: "/services#columns-beams" },
                            { title: "Stairs, Ladders & Handrails", link: "/services#stairs-ladders" },
                            { title: "Grating & Gantries", link: "/services#grating-gantries" },
                            { title: "Tanks", link: "/services#industrial-tanks" },
                            { title: "Steel Fencing", link: "/services#steel-fencing" },
                            { title: "Equipment Support Structures", link: "/services#equipment-support" },
                            { title: "Road Marking", link: "/services#road-marking" }
                        ].map((service, index) => (
                            <Link key={index} to={service.link} className="block group bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-gray-500 text-sm">Professional and reliable {service.title.toLowerCase()} solutions.</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
