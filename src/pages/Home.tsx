
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Solutions from '../components/sections/Solutions';
import { Mission, Stats, Pricing, Security } from '../components/sections/NewSections';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import Footer from '../components/layout/Footer';

import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-gray-800 dark:text-gray-100 antialiased selection:bg-primary/30 selection:text-primary-dark transition-colors duration-300">
            <SEO
                title="Your Executive Command Center"
                description="Centerly connects your noise to your signals. The AI executive layer for Slack and Notion that helps founders focus on what matters."
            />
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <div id="solutions"><Solutions /></div>
                <Mission />
                <Testimonials />
                <Stats />
                <div id="pricing"><Pricing /></div>
                <div id="security"><Security /></div>
                <div id="how-it-works"><HowItWorks /></div>
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
