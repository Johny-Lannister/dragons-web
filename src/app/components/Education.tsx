const Education = () => {
    return (
        <div className="-my-6">
            {/* Item #1 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">System Analist</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-1 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-12 mb-1 sm:mb-9 text-emerald-600 bg-emerald-100 rounded-full">DEC, 2024</time>
                    <div className="text-xl font-bold text-slate-900">Escuela de Arte Multimedial Da Vinci</div>
                </div>
                <div className="text-slate-500">Official Title: Systems Analyst</div>
                <div className="text-slate-400">Multiplatform Programming</div>
                <div className="text-slate-400">Website Development</div>
                <div className="text-slate-400">Databases</div>
                <div className="text-slate-400">Analysis, Design and Methodologies</div>
                <div className="text-slate-400">Project management</div>
                <div className="text-slate-400">Internet of Things</div>
            </div>

            {/* Item #2 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">High School</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">DEC, 2018</time>
                    <div className="text-xl font-bold text-slate-900">Bachiller</div>
                </div>
                <div className="text-slate-500">Graduate of Santa Domenica High School</div>
            </div>
        </div>
    );
};

export default Education;
