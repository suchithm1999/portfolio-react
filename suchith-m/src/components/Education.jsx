function Education() {
    return (
        <div id="education" className="min-h-screen flex items-center justify-center p-6 relative">
            <div className="max-w-4xl w-full text-center space-y-12">
                <h2 className="section-title">Education</h2>

                <div className="glass-card p-8 md:p-12 space-y-6 relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg className="w-32 h-32 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                        </svg>
                    </div>

                    <div className="space-y-4 relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
                            New Horizon College of Engineering, Bengaluru
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-mono text-lg">2018 - 2022</p>
                    </div>

                    <div className="space-y-2 relative z-10">
                        <p className="text-xl text-slate-700 dark:text-slate-300 font-medium">B.Tech - Electronics and Communication Engineering</p>
                        <p className="text-slate-500 font-bold tracking-wider">GPA: 9.17</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
