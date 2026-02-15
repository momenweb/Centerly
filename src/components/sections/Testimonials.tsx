import React from 'react';
const Testimonials = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="glass-card p-10 rounded-[3rem] relative">
                        <span className="absolute top-10 left-10 text-6xl text-primary/20 font-serif">"</span>
                        <p className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed mb-8 relative z-10">
                            I used to spend my Sunday nights reading Slack threads to prepare for Monday. Now I just read my Centerly brief over coffee. It gave me my weekend back.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6o3JSPZaBblGQKmbXZHlovS6IJV0_XWmZDr6URsKPizlZITHAC4MEySCVSebwpHXmAaMw7OYzAlud2_mSfKdpAbgBjWpj3iCDlhxgKl9y42HxMU92qbUFxMzG39GO9iqkMdCjTU7R2EuMf9_s9BK7apLl07PjJLGDwGbyeT8uJshOzxyzDsOIHYL1VzLeICgfg0u9ihl3e5FkKjzYKwhKH80DZ71ABQ-Cc7595sJRl7XX03AfgvqFvgQIkdSXltWOOuT7EKDekE" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Alex Chen</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Founder, Laminar (YC W23)</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-primary hover:translate-x-2 transition-transform duration-300">
                            <div className="flex gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-icons-round text-yellow-500 text-sm">star</span>)}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 italic mb-4">"It flagged a retention risk in a random support channel that I would have completely missed. Saved us a $50k contract."</p>
                            <p className="text-xs font-bold text-gray-900 dark:text-white">— Sarah Jenkins, CEO at Vercel</p>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-secondary hover:translate-x-2 transition-transform duration-300">
                            <div className="flex gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-icons-round text-yellow-500 text-sm">star</span>)}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 italic mb-4">"The Notion integration is magic. It actually understands context across different PRDs."</p>
                            <p className="text-xs font-bold text-gray-900 dark:text-white">— Mike Ross, CTO at Pipe</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
