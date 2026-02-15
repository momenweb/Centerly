import { useState, useEffect } from 'react';
import { LogoColor } from '../ui/Logo';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);

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
        <>
            <nav className={`fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300 ${scrolled ? 'pt-4 px-4' : 'pt-6 px-6'}`}>
                <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${scrolled
                        ? 'glass-panel px-6 py-3'
                        : 'bg-transparent px-0 py-2'
                    }`}>
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate('/')}>
                            <div className="transform transition-transform duration-300 group-hover:rotate-12">
                                <LogoColor className="w-10 h-10" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Centerly</span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors relative group">
                                How it works
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors relative group">
                                Pricing
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#security" onClick={(e) => handleNavClick(e, 'security')} className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors relative group">
                                Security
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </div>

                        {/* Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 transition-colors">Login</button>
                            <button className="btn-primary text-sm px-5 py-2.5 rounded-xl">
                                Request Access
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-600 dark:text-white p-2"
                            >
                                <span className="material-icons-round">{mobileMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-fade-in">
                    <div className="flex flex-col space-y-6 text-center">
                        <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-xl font-medium text-gray-900 dark:text-white">How it works</a>
                        <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-xl font-medium text-gray-900 dark:text-white">Pricing</a>
                        <a href="#security" onClick={(e) => handleNavClick(e, 'security')} className="text-xl font-medium text-gray-900 dark:text-white">Security</a>
                        <div className="w-full h-px bg-gray-100 dark:bg-white/10 my-4"></div>
                        <button className="text-lg font-medium text-gray-600 dark:text-gray-300">Login</button>
                        <button className="btn-primary w-full py-3">Request Access</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
