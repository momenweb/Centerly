import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';

const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'description', title: 'Service Description' },
    { id: 'accounts', title: 'User Accounts' },
    { id: 'acceptable-use', title: 'Acceptable Use' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'payment', title: 'Payment & Billing' },
    { id: 'termination', title: 'Termination' },
    { id: 'disclaimers', title: 'Disclaimers' },
    { id: 'limitation', title: 'Limitation of Liability' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'contact', title: 'Contact Us' },
];

const Terms = () => {
    const [activeSection, setActiveSection] = useState('acceptance');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 }
        );
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-gray-800 dark:text-gray-100 antialiased">
            <SEO
                title="Terms of Service"
                description="Read the terms and conditions governing your use of the Centerly platform, including account responsibilities and service guidelines."
            />
            <Navbar />

            {/* Hero */}
            <section className="relative pt-36 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="material-icons-round text-primary text-sm">description</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Legal Center</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            Last updated: February 15, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <aside className="lg:w-64 shrink-0">
                            <nav className="lg:sticky lg:top-28 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 px-3">Table of Contents</h3>
                                <ul className="space-y-1">
                                    {sections.map(({ id, title }) => (
                                        <li key={id}>
                                            <button
                                                onClick={() => scrollTo(id)}
                                                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === id
                                                    ? 'bg-primary/10 text-primary dark:text-primary-light'
                                                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                                                    }`}
                                            >
                                                {title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>

                        {/* Main Content */}
                        <main className="flex-1 min-w-0">
                            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
                                <section id="acceptance">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">handshake</span></span>
                                        Acceptance of Terms
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        By accessing or using Centerly ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service. These Terms constitute a legally binding agreement between you and Centerly Inc.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                        We reserve the right to update or modify these Terms at any time. Your continued use of the Service after any changes constitutes your acceptance of the revised Terms.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="description">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">hub</span></span>
                                        Service Description
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Centerly is an AI-powered executive operating system that integrates with tools like Slack and Notion to provide executive briefings, risk detection, and cross-app synthesis. The Service processes information from your connected tools to generate actionable insights for startup founders and leadership teams.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="accounts">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">person</span></span>
                                        User Accounts
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                                    </p>
                                    <ul className="space-y-3 text-gray-600 dark:text-gray-300 mt-4">
                                        {[
                                            'You must be at least 18 years old to create an account',
                                            'You are responsible for safeguarding your account password',
                                            'You must notify us immediately of any unauthorized access',
                                            'One person or legal entity per account unless otherwise agreed',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="material-icons-round text-primary text-sm mt-1.5 shrink-0">check_circle</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="acceptable-use">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">verified</span></span>
                                        Acceptable Use
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        You agree not to use the Service for any unlawful or prohibited purpose. Specifically, you shall not:
                                    </p>
                                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                        {[
                                            'Attempt to reverse-engineer, decompile, or disassemble the Service',
                                            'Use the Service to transmit any malicious code or harmful content',
                                            'Interfere with or disrupt the integrity or performance of the Service',
                                            'Access the Service through automated means without our written consent',
                                            'Use the Service to violate any applicable laws or regulations',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="material-icons-round text-red-400 text-sm mt-1.5 shrink-0">block</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="intellectual-property">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">copyright</span></span>
                                        Intellectual Property
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        The Service, including all content, features, and functionality, is owned by Centerly Inc. and is protected by international copyright, trademark, and other intellectual property laws. You retain ownership of all data you input into the Service.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                        You grant Centerly a limited, non-exclusive license to process your data solely for the purpose of providing, maintaining, and improving the Service.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="payment">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">payments</span></span>
                                        Payment & Billing
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable unless otherwise stated. We reserve the right to modify pricing with 30 days' notice. Failure to pay may result in suspension or termination of your account.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="termination">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">cancel</span></span>
                                        Termination
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        You may terminate your account at any time by contacting us. We may suspend or terminate your access if you violate these Terms or engage in conduct that we determine is harmful to other users or the Service. Upon termination, your right to use the Service ceases immediately and we may delete your account data after a reasonable retention period.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="disclaimers">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">warning</span></span>
                                        Disclaimers
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        The Service is provided "as is" and "as available" without any warranties of any kind, whether express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or that the AI-generated insights will be accurate or complete. You use the Service at your own risk.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="limitation">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">balance</span></span>
                                        Limitation of Liability
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        To the maximum extent permitted by law, Centerly Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service. Our total liability shall not exceed the amount you paid for the Service in the twelve months preceding the claim.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="governing-law">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">account_balance</span></span>
                                        Governing Law
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located in Delaware.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="contact">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">mail</span></span>
                                        Contact Us
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        If you have any questions about these Terms, please contact us:
                                    </p>
                                    <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-100 dark:border-white/5 mt-4">
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">Centerly Inc.</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Email: legal@centerly.io</p>
                                    </div>
                                </section>
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Terms;
