import React from 'react';
import { motion } from 'framer-motion';

const Problem = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-[#1A1A24] dark:to-[#0A0A0B] rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/5 shadow-2xl">
                            {/* Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                                style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                            </div>

                            {/* Center Avatar */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className="relative w-32 h-32 rounded-full p-2 bg-white dark:bg-[#131022] shadow-[0_0_40px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-white/10">
                                    <img alt="Founder Portrait" className="w-full h-full rounded-full object-cover grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6o3JSPZaBblGQKmbXZHlovS6IJV0_XWmZDr6URsKPizlZITHAC4MEySCVSebwpHXmAaMw7OYzAlud2_mSfKdpAbgBjWpj3iCDlhxgKl9y42HxMU92qbUFxMzG39GO9iqkMdCjTU7R2EuMf9_s9BK7apLl07PjJLGDwGbyeT8uJshOzxyzDsOIHYL1VzLeICgfg0u9ihl3e5FkKjzYKwhKH80DZ71ABQ-Cc7595sJRl7XX03AfgvqFvgQIkdSXltWOOuT7EKDekE" />
                                    {/* Stress indicator */}
                                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse-slow">
                                        <span className="material-icons-round text-xl">priority_high</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements - The Noise */}
                            <div className="absolute inset-0">
                                {/* Slack Float */}
                                <div className="absolute top-1/4 left-[15%] glass-card p-4 rounded-xl animate-float-slow max-w-[200px]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" className="w-5 h-5" />
                                        <span className="text-xs font-bold text-gray-800 dark:text-white">#engineering</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-gray-100 dark:bg-white/10 rounded"></div>
                                        <div className="h-2 w-2/3 bg-gray-100 dark:bg-white/10 rounded"></div>
                                    </div>
                                </div>

                                {/* Linear Float */}
                                <div className="absolute bottom-1/4 right-[10%] glass-card p-4 rounded-xl animate-float-delayed max-w-[220px]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-5 h-5 bg-purple-600 rounded-full"></div>
                                        <span className="text-xs font-bold text-gray-800 dark:text-white">Linear-1242</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 dark:bg-white/10 rounded mb-2"></div>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-0.5 rounded bg-red-100 text-red-600 text-[10px] font-bold">BLOCKER</span>
                                    </div>
                                </div>

                                {/* Notion Float */}
                                <div className="absolute top-[20%] right-[20%] glass-card p-4 rounded-xl animate-float-reverse max-w-[180px]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" className="w-5 h-5" />
                                        <span className="text-xs font-bold text-gray-800 dark:text-white">Prod Specs</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 dark:bg-white/10 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="space-y-10">
                        <div>
                            <span className="text-red-500 font-bold tracking-widest text-sm uppercase mb-4 block">The Problem</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.2] mb-6">
                                Drowning in noise while trying to lead?
                            </h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                                Founders spend 40% of their day context switching. The critical signals—is the launch on track? is the big deal closing?—are buried in a thousand Slack threads and disconnected Notion docs.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-6 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                                    <span className="material-icons-round text-2xl">visibility_off</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Blind Spots</h4>
                                    <p className="text-gray-500 dark:text-gray-400">You miss "at-risk" signals until it's too late to intervene.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                                    <span className="material-icons-round text-2xl">sync_disabled</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Context Switching Cost</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Every status meeting kills 2 hours of deep work time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
