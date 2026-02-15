const CTA = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#4528f1] via-[#3713ec] to-[#250ba3] p-8 md:p-16 text-center shadow-2xl">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 -right-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                            Stop Operating Blind.
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                            Your startup already generates the answers. Centerly makes them visible.
                        </p>
                        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-lg mx-auto">
                            <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg whitespace-nowrap">
                                Get Early Access
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors whitespace-nowrap">
                                Book Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
