export const FeatureList = ({ items }: { items: string[] }) => (
    <ul className="space-y-4 mb-8">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-icons-round text-green-500 text-lg shrink-0 mt-0.5">check_circle</span>
                {item}
            </li>
        ))}
    </ul>
);

export const Pricing = () => {
    return (
        <section className="py-32 bg-background-light dark:bg-background-dark relative" id="pricing">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20 relative z-10">
                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Pricing</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Simple, Founder-Friendly Pricing</h2>
                <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Scale your executive layer as your startup grows.</p>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 relative z-10 items-center">
                {/* Starter Plan */}
                <div className="glass-card p-8 rounded-3xl flex flex-col h-full border-t-4 border-t-transparent hover:border-t-gray-300 dark:hover:border-t-gray-700 transition-all">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Starter</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
                        <span className="text-lg text-gray-500 dark:text-gray-400 font-normal">/mo</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 flex-grow">Perfect for pre-seed solo founders exploring product-market fit.</p>
                    <FeatureList items={["1 Integration", "Daily Briefing (Weekly)"]} />
                    <button className="btn-secondary w-full">Get Started</button>
                </div>

                {/* Growth Plan - Highlighted */}
                <div className="relative bg-background-dark border border-gray-800 p-8 rounded-3xl flex flex-col h-full shadow-2xl scale-105 z-10 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white">Growth</h3>
                            <span className="bg-primary text-white text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider shadow-lg shadow-primary/20">Most Popular</span>
                        </div>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-white">$49</span>
                            <span className="text-lg text-white/60 font-normal">/mo</span>
                        </div>
                        <p className="text-white/80 mb-8 flex-grow">Designed for growing teams and active fundraising rounds.</p>

                        <ul className="space-y-4 mb-8">
                            {["Unlimited Integrations", "Real-time Risk Alerts", "Daily AI Synthesizer"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                                    <span className="material-icons-round text-primary-light text-lg shrink-0 mt-0.5">check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="btn-primary w-full bg-white text-primary hover:bg-gray-100 hover:text-primary-dark shadow-none border-none">Get Early Access</button>
                    </div>
                </div>

                {/* Scale Plan */}
                <div className="glass-card p-8 rounded-3xl flex flex-col h-full border-t-4 border-t-transparent hover:border-t-gray-300 dark:hover:border-t-gray-700 transition-all">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Scale</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">$199</span>
                        <span className="text-lg text-gray-500 dark:text-gray-400 font-normal">/mo</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 flex-grow">Enterprise-grade visibility for series-funded operations.</p>
                    <FeatureList items={["Custom AI Guardrails", "Priority Data Sync", "Dedicated Concierge"]} />
                    <button className="btn-secondary w-full">Contact Sales</button>
                </div>
            </div>
        </section>
    );
};

export const Security = () => {
    return (
        <section className="py-32 bg-white dark:bg-[#05050A] relative overflow-hidden" id="security">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/5 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Security First</span>
                        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Enterprise-Grade Security</h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                            Your data never leaves your control. We act as a secure processing layer, not a storage vat.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { icon: "visibility_off", title: "Read-only access", desc: "We never store your messages or documents on our servers." },
                            { icon: "edit_off", title: "No message posting", desc: "Centerly acts as a listener, it will never post on your behalf." },
                            { icon: "verified_user", title: "SOC 2 in progress", desc: "Undergoing rigorous independent security audit and certification." },
                            { icon: "lock", title: "AES-256 Encryption", desc: "All connection tokens are encrypted with bank-level standards." }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                </div>
                                <h4 className="font-bold mb-2 text-sm text-gray-900 dark:text-white">{item.title}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Stats = () => {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark border-y border-gray-200 dark:border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: "2 hours", label: "Saved per day" },
                        { value: "60%", label: "Fewer status meetings" },
                        { value: "100%", label: "Context visibility" },
                        { value: "10x", label: "Faster decision cycle" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary-light to-secondary mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                                {stat.value}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Mission = () => {
    return (
        <section className="py-32 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-8">
                    BUILT FOR FOUNDERS,<br />NOT MANAGERS.
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto">
                    While managers track tasks, founders track trajectory. Centerly is designed for the person who needs to know everything without being in every meeting.
                </p>
            </div>
        </section>
    );
};
