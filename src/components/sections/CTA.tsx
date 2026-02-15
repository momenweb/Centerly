const CTA = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-background-dark">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background-dark to-secondary/20 opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
                    Ready to reclaim your <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">mental bandwidth?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Join 500+ founders who have switched from "manager mode" back to "builder mode".
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <button className="bg-white text-background-dark hover:bg-gray-100 text-lg font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                        Start Free Trial
                        <span className="material-icons-round">arrow_forward</span>
                    </button>
                    <button className="px-10 py-5 rounded-full border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                        Talk to Sales
                    </button>
                </div>
                <p className="mt-8 text-sm text-gray-500 font-medium">No credit card required • SOC 2 Compliant</p>
            </div>
        </section>
    );
};

export default CTA;
