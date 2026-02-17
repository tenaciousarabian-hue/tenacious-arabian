import React from 'react';
import materialHeroImg from '../assets/material-hero.png';
import material1 from '../assets/material-1.png';
import material2 from '../assets/material-2.png';
import material3 from '../assets/material-3.png';
import material4 from '../assets/material-4.png';
import asphalt from '../assets/showcase-asphalt.png';
import tools from '../assets/showcase-tools.png';
import safety from '../assets/showcase-safety.png';
import valves from '../assets/showcase-valves.png';
import toolbag from '../assets/showcase-toolbag.png';
import cables from '../assets/showcase-cables.png';
import sheets from '../assets/showcase-sheets.png';
import fittings from '../assets/showcase-fittings.png';
import flanges from '../assets/showcase-flanges.png';
import welding from '../assets/showcase-welding.png';
import stainless from '../assets/showcase-stainless-fittings.png';
import scaffoldingImg from '../assets/scaffolding-new.jpg';
import scaffoldingDetail from '../assets/scaffolding-detail.jpg';

const MaterialTrading = () => {
    return (
        <main className="flex-grow bg-white">
            {/* Header / Title Section */}
            <div className="bg-dark py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 uppercase">Material Trading</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary track-wider">TENACIOUS</h2>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Text Content */}
                    <div className="lg:pr-8">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            <span className="font-bold text-primary">Tenacious</span> provides reliable and efficient material trading and supply solutions to support industrial, construction, and infrastructure projects of all scales.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We source, stock, and deliver a wide range of high-quality materials that meet project specifications, industry standards, and client timelines.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary mt-8">
                            <h3 className="text-xl font-bold text-dark mb-3">Why Choose Our Supply?</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>High-quality materials meeting industry standards</li>
                                <li>Reliable sourcing and stocking capabilities</li>
                                <li>Efficient delivery to meet project timelines</li>
                                <li>Support for industrial, construction, and infrastructure of all scales</li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Hero Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-lg"></div>
                        <img
                            src={materialHeroImg}
                            alt="Industrial Material Supply"
                            className="relative rounded-lg shadow-xl w-full object-cover transform transition hover:scale-[1.01] duration-500"
                        />
                    </div>
                </div>

                {/* Product Showcase Gallery */}
                <div className="border-t border-gray-100 pt-16">
                    <h3 className="text-2xl font-bold text-dark text-center mb-12">Product <span className="text-primary">Showcase</span></h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { img: material1, title: 'Quality Sands' },
                            { img: material2, title: 'Aggregates' },
                            { img: material3, title: 'Raw Stones' },
                            { img: material4, title: 'Construction Gravel' },
                            { img: asphalt, title: 'Asphalt Mix' },
                            { img: tools, title: 'Power Tools' },
                            { img: safety, title: 'Safety Gear' },
                            { img: valves, title: 'Industrial Valves' },
                            { img: toolbag, title: 'Tool Kits' },
                            { img: cables, title: 'Electrical Cables' },
                            { img: sheets, title: 'Steel Sheets' },
                            { img: fittings, title: 'Pipe Fittings' },
                            { img: flanges, title: 'Flanges' },
                            { img: welding, title: 'Welding Equipment' },
                            { img: stainless, title: 'Stainless Fittings' }
                        ].map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md aspect-square">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white font-bold tracking-wide">{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Material List */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-dark text-center mb-10">Complete <span className="text-primary">Supply Range</span></h3>
                    <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-gray-700">
                            {[
                                "Backfilling Materials",
                                "Sand",
                                "Gravel",
                                "Base Course",
                                "Marl",
                                "Asphalt Paving Materials",
                                "Safety Materials",
                                "Electrical Materials",
                                "Pumps",
                                "Wire Ropes",
                                "SS Pipes & Fittings",
                                "CS Pipes & Fittings",
                                "GI Pipes & Fittings",
                                "Mechanical Seals",
                                "Chain Links",
                                "Hollow Tubes/Bars",
                                "Welding Electrodes",
                                "Stretch Film",
                                "Cable Glands",
                                "Aluminum Cable Cleats",
                                "Panel Boards & Breakers",
                                "Ground Rods",
                                "Terminal Lugs",
                                "Cable Ties",
                                "Cable Trays & Channels",
                                "Heavy-Duty Plugs"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Scaffolding Materials Section */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-dark mb-6 text-center lg:text-left">Scaffolding <span className="text-primary">Materials</span></h3>
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                                {[
                                    "Scaffolding Pipes / Tubes (MS / GI)",
                                    "Vertical Standards",
                                    "Ledgers",
                                    "Transoms",
                                    "Braces (Cross Bracing / Diagonal Bracing)",
                                    "Scaffold Frames (H-Frame / Walk-Through Frame)"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/10 transform translate-x-3 translate-y-3 rounded-xl"></div>
                                <img
                                    src={scaffoldingImg}
                                    alt="Scaffolding Materials 1"
                                    className="relative rounded-xl shadow-lg w-full object-cover h-[350px]"
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/10 transform translate-x-3 translate-y-3 rounded-xl"></div>
                                <img
                                    src={scaffoldingDetail}
                                    alt="Scaffolding Materials 2"
                                    className="relative rounded-xl shadow-lg w-full object-cover h-[350px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MaterialTrading;
