import SEO from '../components/SEO';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Terms = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans">
            <SEO
                title="Terms of Service - Centerly"
                description="Read the terms and conditions for using Centerly's services."
                keywords="terms of service, terms and conditions, user agreement, Centerly legal"
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
                                    <a href="#agreement" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">1. Agreement to Terms</a>
                                    <a href="#intellectual-property" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">2. Intellectual Property</a>
                                    <a href="#user-reps" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">3. User Representations</a>
                                    <a href="#prohibited" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">4. Prohibited Activities</a>
                                    <a href="#liability" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">5. Limitation of Liability</a>
                                    <a href="#contact" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">6. Contact Us</a>
                                </nav>
                            </div>
                        </aside>

                        {/* Content */}
                        <div className="col-span-1 lg:col-span-9">
                            <div className="max-w-3xl">
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Terms of Service</h1>
                                <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">Last updated: February 14, 2026</p>

                                <div className="space-y-12 text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <section id="agreement">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
                                        <p className="mb-4">
                                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Centerly Inc. ("we," "us", or "our"), concerning your access to and use of the centerly.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                                        </p>
                                        <p>
                                            You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                                        </p>
                                    </section>

                                    <section id="intellectual-property">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Intellectual Property Rights</h2>
                                        <p className="mb-4">
                                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                                        </p>
                                    </section>

                                    <section id="user-reps">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Representations</h2>
                                        <div className="glass-panel p-6 rounded-xl mb-6">
                                            <p className="mb-4">
                                                By using the Site, you represent and warrant that:
                                            </p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                                                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                                                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                                                <li>You are not a minor in the jurisdiction in which you reside.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="prohibited">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Prohibited Activities</h2>
                                        <p className="mb-4">
                                            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                                        </p>
                                    </section>

                                    <section id="liability">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitation of Liability</h2>
                                        <p className="mb-4">
                                            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                        </p>
                                    </section>

                                    <section id="contact">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Contact Us</h2>
                                        <p className="mb-4">
                                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                                        </p>
                                        <div className="glass-card p-6 rounded-xl inline-block pr-12">
                                            <p className="font-bold text-gray-900 dark:text-white">Centerly Inc.</p>
                                            <p>123 Innovation Dr</p>
                                            <p>San Francisco, CA 94103</p>
                                            <p className="mt-4 text-primary">legal@centerly.com</p>
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

export default Terms;
