const HowItWorks = () => {
    const steps = [
        {
            num: "01",
            title: "Connect Your Stack",
            desc: "One-click OAuth for Slack, Notion, and Jira. We only read public channels and docs you explicitly authorize.",
            icon: "cable"
        },
        {
            num: "02",
            title: "The Brain Learns",
            desc: "Centerly maps your org chart, project codenames, and key stakeholders in about 24 hours.",
            icon: "psychology"
        },
        {
            num: "03",
            title: "Silence The Noise",
            desc: "You stop checking Slack. Centerly delivers a single morning briefing with everything you actually need to know.",
            icon: "mark_chat_read"
        }
    ];

    return (
        <section id="how-it-works" className="py-32 bg-white dark:bg-background-dark relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-24 relative z-10">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">From Chaos to Clarity</h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">It takes less than 5 minutes to set up your new operating system.</p>
                </div>

                <div className="relative z-10">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-primary/50 to-gray-200 dark:from-white/10 dark:via-primary/50 dark:to-white/10 z-0"></div>

                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="w-32 h-32 mx-auto bg-white dark:bg-[#0A0A0B] rounded-full border-4 border-gray-100 dark:border-white/10 flex items-center justify-center relative z-10 mb-8 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300 shadow-xl">
                                    <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <span className="material-icons-round text-4xl">{step.icon}</span>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-[#0A0A0B] border border-gray-100 dark:border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 font-mono">
                                        {step.num}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
