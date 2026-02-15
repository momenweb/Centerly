import SEO from '../components/SEO';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans">
            <SEO
                title="Privacy Policy - Centerly"
                description="Learn how Centerly collects, uses, and protects your personal data."
                keywords="privacy policy, data protection, personal information, Centerly privacy"
            />
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Sidebar / TOC */}
                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-32 glass-panel rounded-2xl p-6">
                                <h3 className="font-bold text-sm uppercase tracking-widest text-primary mb-4">Contents</h3>
                                <nav className="space-y-3">
                                    <a href="#introduction" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">1. Introduction</a>
                                    <a href="#data-collection" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">2. Data Collection</a>
                                    <a href="#data-usage" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">3. Data Usage</a>
                                    <a href="#data-sharing" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">4. Data Sharing</a>
                                    <a href="#user-rights" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">5. User Rights</a>
                                    <a href="#contact" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">6. Contact Us</a>
                                </nav>
                            </div>
                        </aside>

                        {/* Content */}
                        <div className="col-span-1 lg:col-span-9">
                            <div className="max-w-3xl">
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
                                <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">Last updated: February 14, 2026</p>

                                <div className="space-y-12 text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <section id="introduction">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
                                        <p className="mb-4">
                                            Welcome to Centerly ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your collected information when you visit our website centerly.com and use our software-as-a-service platform.
                                        </p>
                                        <p>
                                            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                                        </p>
                                    </section>

                                    <section id="data-collection">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
                                        <div className="glass-panel p-6 rounded-xl mb-6">
                                            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Personal Data</h3>
                                            <p className="mb-4">
                                                Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site and our mobile application.
                                            </p>

                                            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Derivative Data</h3>
                                            <p>
                                                Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="data-usage">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Use of Your Information</h2>
                                        <p className="mb-4">
                                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Create and manage your account.</li>
                                            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                                            <li>Email you regarding your account or order.</li>
                                            <li>Enable user-to-user communications.</li>
                                            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                                        </ul>
                                    </section>

                                    <section id="data-sharing">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Disclosure of Your Information</h2>
                                        <p className="mb-4">
                                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                                        </p>
                                        <h3 className="font-bold text-gray-900 dark:text-white mt-6 mb-2">By Law or to Protect Rights</h3>
                                        <p>
                                            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                                        </p>
                                    </section>

                                    <section id="contact">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Contact Us</h2>
                                        <p className="mb-4">
                                            If you have questions or comments about this Privacy Policy, please contact us at:
                                        </p>
                                        <div className="glass-card p-6 rounded-xl inline-block pr-12">
                                            <p className="font-bold text-gray-900 dark:text-white">Centerly Inc.</p>
                                            <p>123 Innovation Dr</p>
                                            <p>San Francisco, CA 94103</p>
                                            <p className="mt-4 text-primary">privacy@centerly.com</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Privacy;
