'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Build email body
        const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Project Type: ${formData.projectType}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open email client
        window.location.href = `mailto:lily@aquamarinegreen.com?subject=${subject}&body=${body}`;

        // Show success state
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 500);
    };

    return (
        <section className="relative bg-white overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
            <div className="absolute inset-0 chevron-pattern" />

            <div className="relative w-full px-4 sm:px-8 lg:px-12 flex justify-center py-8">
                <div className="w-full max-w-xl">
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
                                    <option value="commercial-renovation">Commercial Renovation</option>
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
                                disabled={isSubmitting || submitted}
                                className={`w-full py-4 font-body tracking-[0.15em] uppercase text-xs transition-colors duration-300 ${submitted
                                    ? 'bg-seafoam text-charcoal cursor-default'
                                    : 'bg-charcoal text-white hover:bg-charcoal/80'
                                    } ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                            >
                                {submitted ? 'Email Client Opened!' : isSubmitting ? 'Opening...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
