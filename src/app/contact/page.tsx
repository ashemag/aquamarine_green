'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-16 md:py-32 bg-white overflow-hidden">
                <div className="absolute inset-0 chevron-pattern" />

                <div className="relative w-full px-4 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column - Info */}
                        <div>
                            <span className="text-charcoal/30 font-body text-xs tracking-[0.2em] uppercase">Get in Touch</span>

                            <h1 className="font-display text-4xl md:text-5xl text-charcoal mt-4 mb-8">
                                Let&apos;s Build
                                <span className="block text-charcoal/40">Together</span>
                            </h1>

                            <p className="font-body text-charcoal/60 leading-relaxed mb-16">
                                Ready to transform your vision into reality? Whether you&apos;re dreaming of
                                a new home, planning a commercial development, or restoring a piece of
                                Miami&apos;s architectural heritage, we&apos;re here to guide you every step of the way.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-10">
                                <div>
                                    <h3 className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/30 mb-3">Visit Our Studio</h3>
                                    <p className="font-body text-charcoal">
                                        1200 Ocean Drive<br />
                                        Miami Beach, FL 33139
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/30 mb-3">Call Us</h3>
                                    <p className="font-body text-charcoal">
                                        <a href="tel:+13055551234" className="hover:text-charcoal/60 transition-colors">
                                            (305) 555-1234
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/30 mb-3">Email Us</h3>
                                    <p className="font-body text-charcoal">
                                        <a href="mailto:hello@decobuild.co" className="hover:text-charcoal/60 transition-colors">
                                            hello@decobuild.co
                                        </a>
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-charcoal/10">
                                    <h3 className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/30 mb-3">Studio Hours</h3>
                                    <div className="grid grid-cols-2 gap-4 font-body text-charcoal text-sm">
                                        <div>
                                            <p className="text-charcoal/40 text-xs tracking-wider mb-1">MON - FRI</p>
                                            <p>9:00 AM - 6:00 PM</p>
                                        </div>
                                        <div>
                                            <p className="text-charcoal/40 text-xs tracking-wider mb-1">SAT</p>
                                            <p>By Appointment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="relative">
                            {/* Minimal frame */}
                            <div className="absolute -top-4 -left-4 w-full h-full border border-charcoal/10 -z-10" />

                            <form
                                onSubmit={handleSubmit}
                                className="bg-off-white p-8 md:p-12 relative"
                            >
                                {/* Corner accents */}
                                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-charcoal/20" />
                                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-charcoal/20" />
                                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-charcoal/20" />
                                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-charcoal/20" />

                                <h2 className="font-display text-xl text-charcoal mb-10 text-center">
                                    Start Your Project
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-body text-charcoal/40 tracking-[0.15em] uppercase mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal/30 outline-none font-body text-sm transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-[10px] font-body text-charcoal/40 tracking-[0.15em] uppercase mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal/30 outline-none font-body text-sm transition-colors"
                                                placeholder="you@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-body text-charcoal/40 tracking-[0.15em] uppercase mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal/30 outline-none font-body text-sm transition-colors"
                                                placeholder="(305) 555-0000"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-body text-charcoal/40 tracking-[0.15em] uppercase mb-2">
                                            Project Type
                                        </label>
                                        <select
                                            value={formData.projectType}
                                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                            className="w-full px-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal/30 outline-none font-body text-sm transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="">Select a project type</option>
                                            <option value="residential-new">New Residential Construction</option>
                                            <option value="residential-renovation">Residential Renovation</option>
                                            <option value="commercial">Commercial Development</option>
                                            <option value="historic">Historic Restoration</option>
                                            <option value="interior">Interior Design</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-body text-charcoal/40 tracking-[0.15em] uppercase mb-2">
                                            Tell Us About Your Vision
                                        </label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal/30 outline-none font-body text-sm transition-colors resize-none"
                                            placeholder="Describe your project, timeline, and any inspiration you'd like to share..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-charcoal text-white font-body tracking-[0.15em] uppercase text-xs hover:bg-charcoal/80 transition-colors duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-80 bg-light-gray relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-12 h-12 border border-charcoal/20 mx-auto mb-4 flex items-center justify-center">
                            <div className="w-2 h-2 bg-charcoal rotate-45" />
                        </div>
                        <p className="font-display text-lg text-charcoal">Ocean Drive, Miami Beach</p>
                        <p className="font-body text-charcoal/40 text-sm mt-2">Interactive map coming soon</p>
                    </div>
                </div>

                {/* Top line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-charcoal/10" />
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-charcoal">
                <div className="w-full px-4 sm:px-8 lg:px-12 text-center">
                    <p className="font-display text-xl text-white mb-2">
                        Prefer to meet in person?
                    </p>
                    <p className="font-body text-white/50 text-sm">
                        Schedule a consultation at our Ocean Drive studio to discuss your project over coffee.
                    </p>
                </div>
            </section>
        </>
    );
}
