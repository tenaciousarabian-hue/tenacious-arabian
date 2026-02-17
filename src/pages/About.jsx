import React from 'react';
import aboutUsImg from '../assets/about-us.png';
import materialTradingImg from '../assets/material-trading.png';
import heroBg from '../assets/hero-bg.png';

const About = () => {
    return (
        <main className="flex-grow bg-white">
            {/* Header / Title Section */}
            <div className="bg-dark py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">ABOUT US</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary track-wider">TENACIOUS</h2>
                    <p className="text-gray-400 text-lg mt-2 tracking-widest">ARABIAN CONTRACTING CO LTD</p>
                </div>
            </div>

            {/* Introduction Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="lg:pr-8">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            <span className="font-bold text-primary">Tenacious</span> is a dynamic and reliable service provider delivering comprehensive industrial, construction, and project support solutions across multiple sectors.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            With expertise spanning material trading and supply, equipment rental, manpower supply, plant piping, HVAC systems, firefighting systems, structural construction, fabrication, and road marking, we serve as a single-source partner for complex project requirements.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Driven by technical excellence and a solution-oriented approach, Tenacious supports clients through every phase of a project—from procurement and installation to shutdown services and long-term operational support. Our capabilities in plant shutdown services, equipment support structures, tanks, steel fencing, columns, beams, staircases, ladders, handrails, gratings, and gantries enable us to handle both routine and highly specialized industrial needs.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-lg"></div>
                        <img
                            src={aboutUsImg}
                            alt="About Tenacious"
                            className="relative rounded-lg shadow-xl w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-white rounded-xl shadow-lg border-t-4 border-primary transform transition hover:-translate-y-1 overflow-hidden flex flex-col">
                        <div className="h-48 overflow-hidden">
                            <img src={heroBg} alt="Mission" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To deliver integrated, high-quality industrial and construction services that empower our clients to execute projects efficiently, safely, and cost effectively. We are committed to combining skilled manpower, reliable equipment, and technical expertise to provide dependable solutions while upholding the highest standards of safety, quality, and professionalism.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="bg-white rounded-xl shadow-lg border-t-4 border-dark transform transition hover:-translate-y-1 overflow-hidden flex flex-col">
                        <div className="h-48 overflow-hidden">
                            <img src={materialTradingImg} alt="Vision" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be a trusted and tenacious industry leader recognized for excellence in material supply, engineering services, fabrication, and project support—driving sustainable growth, innovation, and long-term value for our clients, partners, and communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
