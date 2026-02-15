import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-0 left-[30%] w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[120px]"></div>
                </div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/20 dark:border-white/10 mb-8"
                >
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300">Waitlist open for founders</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900 dark:text-white"
                >
                    Turn Slack & Notion Into Your <br className="hidden md:block" />
                    <span className="text-gradient-purple relative inline-block">
                        Executive OS
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 18.0032 45.4281 91.5002 4.49997C164.997 -36.4281 198 2.49997 198 2.49997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed font-light"
                >
                    Centerly is the AI executive layer for founders who need to move at lightspeed without getting lost in the noise.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <button className="btn-primary text-lg px-8 py-4 flex items-center gap-3 group">
                        Get Early Access
                        <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                    <button className="btn-secondary text-lg px-8 py-4 flex items-center gap-3 group bg-white/50 backdrop-blur-sm">
                        <span className="material-icons-round text-primary group-hover:scale-110 transition-transform">play_circle_filled</span>
                        See How It Works
                    </button>
                </motion.div>

                {/* Dashboard Preview / Visuals */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-24 relative max-w-6xl mx-auto perspective-1000"
                >
                    <div className="glass-panel rounded-2xl overflow-hidden relative shadow-2xl border border-white/40 dark:border-white/10 transform rotate-x-2 hover:rotate-x-0 transition-transform duration-700 ease-out">
                        {/* Window Controls */}
                        <div className="h-12 border-b border-gray-200/50 dark:border-white/5 bg-white/50 dark:bg-white/5 flex items-center px-6 space-x-2 backdrop-blur-md">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                            <div className="flex-1 text-center text-xs font-mono text-gray-400 opacity-70">centerly_os_v1.0.exe</div>
                            <div className="w-16"></div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/40 dark:bg-[#0A0A0B]/80 backdrop-blur-3xl min-h-[500px]">
                            {/* Left Column - Feed */}
                            <div className="md:col-span-2 space-y-6">
                                <div className="glass-card rounded-xl p-6 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="flex justify-between items-start mb-6 relative z-10">
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-900 dark:text-white flex items-center gap-2">
                                                <span className="material-icons-round text-primary">auto_awesome</span>
                                                Daily Executive Brief
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1 font-medium">Synced just now</p>
                                        </div>
                                        <span className="bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide border border-green-500/20">Signals Clean</span>
                                    </div>

                                    <div className="space-y-6 text-left relative z-10">
                                        <div className="group/item p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-white/5">
                                            <div className="flex items-start gap-4">
                                                <div className="w-1.5 h-12 bg-primary rounded-full shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">GROWTH</span>
                                                        <span className="text-sm font-bold text-gray-900 dark:text-white">Viral Loop Performance</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                        K-factor increased by <span className="text-green-500 font-bold">0.2</span> overnight following the Twitter integration launch. Referral conversion at all-time high.
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" className="w-3 h-3 grayscale opacity-60" />
                                                        <span>Source: Slack #growth</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"></div>

                                        <div className="group/item p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-white/5">
                                            <div className="flex items-start gap-4">
                                                <div className="w-1.5 h-12 bg-yellow-500 rounded-full shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-500">OPS</span>
                                                        <span className="text-sm font-bold text-gray-900 dark:text-white">Series A Data Room</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                        Found legal blockers in cap table doc. Sarah is resolving. <span className="text-red-400 font-medium">Deadline: Tomorrow.</span>
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" className="w-3 h-3 grayscale opacity-60" />
                                                        <span>Source: Notion Docs</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Metrics */}
                            <div className="space-y-6">
                                <div className="glass-card rounded-xl p-6 h-full border border-white/20 dark:border-white/10">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-left flex items-center gap-2">
                                        <span className="material-icons-round text-sm">analytics</span>
                                        Live Metrics
                                    </h4>
                                    <div className="space-y-4 text-left">
                                        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative group overflow-hidden">
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="text-xs text-gray-500 mb-1 font-medium">Weekly Active Users</div>
                                            <div className="flex justify-between items-end">
                                                <div className="text-3xl font-bold text-gray-900 dark:text-white">12,482</div>
                                                <div className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full">+18%</div>
                                            </div>
                                            {/* Mini Chart Decoration */}
                                            <div className="h-1 w-full flex align-bottom items-end gap-0.5 mt-3 opacity-30">
                                                {[40, 60, 45, 70, 50, 80, 75, 90, 100].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-primary rounded-t-sm" style={{ height: `${h}%` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative group overflow-hidden">
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="text-xs text-gray-500 mb-1 font-medium">Burn Rate</div>
                                            <div className="flex justify-between items-end">
                                                <div className="text-3xl font-bold text-gray-900 dark:text-white">$42k</div>
                                                <div className="text-gray-400 text-xs font-bold bg-gray-500/10 px-2 py-1 rounded-full">Stable</div>
                                            </div>
                                            <div className="h-1 w-full bg-gray-200 dark:bg-white/10 mt-3 rounded-full overflow-hidden">
                                                <div className="h-full bg-yellow-400 w-2/3 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shadow/Glow under the dashboard */}
                    <div className="absolute -bottom-10 left-10 right-10 h-20 bg-primary/20 blur-[50px] -z-10 rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
