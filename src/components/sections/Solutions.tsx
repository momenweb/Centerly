const Solutions = () => {
    const features = [
        {
            icon: "auto_fix_high",
            title: "Auto-Summaries",
            description: "AI reads every public channel and Notion update, condensing 8 hours of chatter into a 3-minute executive brief."
        },
        {
            icon: "radar",
            title: "Risk Detection",
            description: "Centerly flags keywords like \"delay\", \"blocker\", or \"risk\" across platforms and surfaces them to your dashboard immediately."
        },
        {
            icon: "hub",
            title: "Cross-App Synthesis",
            description: "It understands that the Slack thread about \"Project X\" relates to the Notion PRD for \"Project X\", linking context automatically."
        }
    ];

    return (
        <section id="solutions" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/5 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20 relative z-10">
                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Features</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Meet Your AI Executive Layer</h2>
                <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Centerly connects the dots between conversation and documentation, giving you the clarity of a 10-person Ops team.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8 relative z-10">
                {features.map((feature, index) => (
                    <div key={index} className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                            <span className="material-icons-round text-3xl text-primary group-hover:text-white transition-colors duration-300">{feature.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Solutions;
