import React from 'react';
import contactHero from '../assets/contact-us.png';

const Contact = () => {
    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={contactHero}
                        alt="Contact Us Hero Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl leading-tight mb-6">
                            Contact <span className="text-primary">Us</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            Engineered Strength for Demanding Projects
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Interactive Message / Intro */}
                        <div>
                            <h2 className="text-3xl font-bold text-dark mb-6">Get in <span className="text-primary">Touch</span></h2>
                            <div className="prose prose-lg text-gray-600 mb-8">
                                <p className="mb-4">
                                    At <span className="font-semibold text-dark">Tenacious Arabian Contracting Co. Ltd</span>, we believe strong communication is the foundation of successful projects.
                                </p>
                                <p className="mb-4">
                                    Whether you require material supply, equipment rental, manpower support, fabrication, or full-scale industrial and construction services, our team is ready to assist you with reliable and timely solutions.
                                </p>
                                <p>
                                    We welcome inquiries for project discussions, partnerships, quotations, and technical support. Reach out to us and let’s work together to deliver excellence, safety, and efficiency at every stage of your project.
                                </p>
                            </div>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            {/* Contact Details Card */}
                            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-2xl font-bold text-dark mb-6 border-b pb-2 border-gray-200">Contact Details</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Company Name</p>
                                            <p className="text-lg font-medium text-dark">Tenacious Arabian Contracting Co. Ltd</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Email</p>
                                            <a href="mailto:info@tenaciousarabia.com" className="text-lg font-medium text-dark hover:text-primary transition-colors">
                                                info@tenaciousarabia.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Website</p>
                                            <a href="https://www.tenaciousarabia.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-dark hover:text-primary transition-colors">
                                                www.tenaciousarabia.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Location</p>
                                            <p className="text-lg font-medium text-dark">Kingdom of Saudi Arabia (KSA)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Mobile</p>
                                            <a href="tel:+9660504162393" className="text-lg font-medium text-dark hover:text-primary transition-colors">
                                                +966 0504162393
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours Card */}
                            <div className="bg-dark text-white p-8 rounded-xl shadow-lg border-l-4 border-gray-500 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <svg className="w-8 h-8 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <h3 className="text-2xl font-bold">Business Hours</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                                        <span className="text-gray-300">Sunday – Thursday</span>
                                        <span className="font-semibold text-primary">9:00 AM – 6:00 PM</span>
                                    </div>
                                    <div className="text-right text-xs text-gray-400 mt-1 mb-4">(KSA Time)</div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Friday & Saturday</span>
                                        <span className="text-red-400 font-semibold">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
