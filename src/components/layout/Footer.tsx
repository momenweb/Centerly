import { LogoColor } from '../ui/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-white/5 pt-24 pb-12 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-[96px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-5 lg:col-span-4 space-y-8">
                        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
                            <LogoColor className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="font-bold text-2xl tracking-tighter text-gray-900 dark:text-white">Centerly</span>
                        </div>
                        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium max-w-sm">
                            Your AI executive command center. Replace the noise of Slack and Notion with the clarity of a single dashboard.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-3">
                            {['twitter', 'linkedin', 'github'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary dark:hover:bg-primary hover:-translate-y-1 transition-all duration-300">
                                    <span className="material-icons-round text-lg code">share</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 lg:pl-12">
                        <div>
                            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-900 dark:text-white">Product</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                <li><a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')} className="hover:text-primary dark:hover:text-white transition-colors block">Features</a></li>
                                <li><a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="hover:text-primary dark:hover:text-white transition-colors block">Integrations</a></li>
                                <li><a href="#security" onClick={(e) => handleNavClick(e, 'security')} className="hover:text-primary dark:hover:text-white transition-colors block">Security</a></li>
                                <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="hover:text-primary dark:hover:text-white transition-colors block">Pricing</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-900 dark:text-white">Resources</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                <li><a href="#" className="hover:text-primary dark:hover:text-white transition-colors block">Help Center</a></li>
                                <li><a href="#" className="hover:text-primary dark:hover:text-white transition-colors block">Status</a></li>
                                <li><a href="#" className="hover:text-primary dark:hover:text-white transition-colors block">Contact Support</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-900 dark:text-white">Legal</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                <li><Link to="/privacy" className="hover:text-primary dark:hover:text-white transition-colors block">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="hover:text-primary dark:hover:text-white transition-colors block">Terms of Service</Link></li>
                                <li><a href="#" className="hover:text-primary dark:hover:text-white transition-colors block">Cookie Settings</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400 font-medium">
                        © {new Date().getFullYear()} Centerly Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">All Systems Operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
