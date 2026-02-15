const Demo = () => {
    return (
        <section id="demo" className="py-24 bg-background-light dark:bg-gray-900/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold">Ask anything. <br />Get instant answers.</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            Don't search through 50 channels. Just ask Centerly. It knows who said what, where the doc is, and what the latest status is.
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round text-primary">check_circle</span>
                                <span>"What's the status of the Q3 hiring plan?"</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round text-primary">check_circle</span>
                                <span>"Who is blocking the mobile release?"</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round text-primary">check_circle</span>
                                <span>"Summarize the marketing channel from yesterday"</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="glass-card rounded-lg p-6 shadow-2xl transform md:rotate-3 transition-transform hover:rotate-0">
                            <div className="space-y-6">
                                <div className="flex justify-end">
                                    <div className="bg-primary text-white rounded-2xl rounded-tr-sm py-3 px-5 max-w-[80%] shadow-md">
                                        <p className="text-sm">What's at risk this week for the Mobile App launch?</p>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-primary flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                                        <span className="material-icons-round text-xs">auto_awesome</span>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-white/5 rounded-2xl rounded-tl-sm p-5 shadow-sm w-full">
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Based on #eng-mobile and Notion Roadmap:</p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <span className="material-icons-round text-red-500 text-sm mt-0.5">error_outline</span>
                                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                                    <strong className="text-gray-800 dark:text-gray-200">API Integration:</strong>
                                                    Currently blocked. Backend team needs 2 more days. (Source: Slack)
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="material-icons-round text-yellow-500 text-sm mt-0.5">warning_amber</span>
                                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                                    <strong className="text-gray-800 dark:text-gray-200">Design Assets:</strong>
                                                    Pending final approval from Sarah. (Source: Notion Task)
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 flex gap-2">
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-500">Source: #eng-mobile</span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-500">Source: Mobile Launch PRD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
