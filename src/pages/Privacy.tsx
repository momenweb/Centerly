import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';

const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'information-we-collect', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'changes', title: 'Changes to This Policy' },
    { id: 'contact', title: 'Contact Us' },
];

const Privacy = () => {
    const [activeSection, setActiveSection] = useState('overview');

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
                title="Privacy Policy"
                description="Learn how Centerly collects, uses, and protects your personal information. We prioritize your data privacy and security."
            />
            <Navbar />

            {/* Hero */}
            <section className="relative pt-36 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="material-icons-round text-primary text-sm">shield</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Legal Center</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            Last updated: February 15, 2026
                        </p>
                    </div>

                    {/* Key Principles Cards */}
                    <div className="grid md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
                        {[
                            { icon: 'visibility_off', title: 'Read-Only Access', desc: 'We never store your raw messages or documents.' },
                            { icon: 'lock', title: 'Encrypted at Rest', desc: 'All data is encrypted with AES-256 standards.' },
                            { icon: 'verified_user', title: 'SOC 2 Compliance', desc: 'Undergoing independent security certification.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5 text-center">
                                <span className="material-icons-round text-primary text-2xl mb-2 block">{item.icon}</span>
                                <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{item.title}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
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
                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 px-3">Contents</h3>
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
                                <section id="overview">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">info</span></span>
                                        Overview
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Centerly ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI executive operating system platform, including our website and integrations with third-party services like Slack and Notion.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                        By accessing or using Centerly, you agree to the collection and use of information in accordance with this policy.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="information-we-collect">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">folder</span></span>
                                        Information We Collect
                                    </h2>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Account Information</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        When you create an account, we collect your name, email address, company name, and role. This information is necessary to provide you with our services and personalize your experience.
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Integration Data</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        When you connect Slack, Notion, or other supported integrations, we access data through read-only API permissions. We process messages, documents, and metadata to generate insights but never store raw message content on our servers.
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Usage Data</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        We automatically collect information about how you interact with Centerly, including pages visited, features used, timestamps, and device information.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="how-we-use">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">settings</span></span>
                                        How We Use Your Information
                                    </h2>
                                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                        {[
                                            'Provide, maintain, and improve our AI executive briefing and risk detection services',
                                            'Generate personalized executive summaries and insights from your connected tools',
                                            'Send you notifications about critical signals and at-risk items',
                                            'Respond to customer support requests and communications',
                                            'Monitor and analyze usage trends to improve our platform',
                                            'Ensure the security and integrity of our platform',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="material-icons-round text-primary text-sm mt-1.5 shrink-0">check_circle</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="data-sharing">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">share</span></span>
                                        Data Sharing
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        We do not sell your personal information. We may share your information only in the following circumstances:
                                    </p>
                                    <ul className="space-y-3 text-gray-600 dark:text-gray-300 mt-4">
                                        <li className="flex items-start gap-3">
                                            <span className="material-icons-round text-primary text-sm mt-1.5 shrink-0">arrow_forward</span>
                                            <span><strong>Service Providers:</strong> Third-party vendors who assist with infrastructure, analytics, and customer support, bound by confidentiality agreements.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-icons-round text-primary text-sm mt-1.5 shrink-0">arrow_forward</span>
                                            <span><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-icons-round text-primary text-sm mt-1.5 shrink-0">arrow_forward</span>
                                            <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</span>
                                        </li>
                                    </ul>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="data-security">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">security</span></span>
                                        Data Security
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        We implement industry-standard security measures to protect your information, including AES-256 encryption at rest, TLS 1.3 encryption in transit, regular security audits, and access controls with multi-factor authentication.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                        While we strive to protect your personal information, no method of electronic transmission or storage is 100% secure. We encourage you to use strong passwords and safeguard your account credentials.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="your-rights">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">gavel</span></span>
                                        Your Rights
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Depending on your location, you may have the following rights regarding your personal data:
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { title: 'Access', desc: 'Request a copy of the personal data we hold about you.' },
                                            { title: 'Correction', desc: 'Request correction of inaccurate or incomplete data.' },
                                            { title: 'Deletion', desc: 'Request deletion of your personal data from our systems.' },
                                            { title: 'Portability', desc: 'Receive your data in a structured, machine-readable format.' },
                                        ].map((right, i) => (
                                            <div key={i} className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 border border-gray-100 dark:border-white/5">
                                                <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{right.title}</h4>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{right.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="cookies">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">cookie</span></span>
                                        Cookies & Tracking
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        We use essential cookies to maintain your session and preferences. We also use analytics cookies to understand how our platform is used. You can control cookie preferences through your browser settings.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="changes">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">update</span></span>
                                        Changes to This Policy
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Continued use of Centerly after changes constitutes acceptance of the updated policy.
                                    </p>
                                </section>

                                <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                                <section id="contact">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><span className="material-icons-round text-primary text-lg">mail</span></span>
                                        Contact Us
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                                    </p>
                                    <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-100 dark:border-white/5 mt-4">
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">Centerly Inc.</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Email: privacy@centerly.io</p>
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

export default Privacy;
