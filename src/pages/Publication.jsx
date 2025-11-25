import React from "react";
import publications from "../JSON/Publications.json";

export default function Publications() {
    return (
        <section id="publications" className="py-16 px-6 text-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Selected Publications
                    </h2>
                    <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
                </div>

                {/* Flex Container for Centered Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    {publications.map((pub, index) => (
                        <a
                            key={index}
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            // w-full on mobile, specific percentages on larger screens to mimic grid
                            className="
                                group relative block 
                                w-full sm:w-[48%] lg:w-[30%] max-w-md 
                                bg-neutral-900 border border-neutral-800 
                                p-6 rounded-2xl 
                                transition-all duration-300 
                                hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(250,204,21,0.3)] hover:border-yellow-400/50
                            "
                        >
                            {/* Icon Header */}
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 rounded-full">
                                    {pub.year}
                                </span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={2} 
                                    stroke="currentColor" 
                                    className="w-5 h-5 text-gray-500 transition-transform group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col h-[140px] justify-between">
                                <h3 className="text-xl font-bold text-gray-100 mb-3 leading-tight group-hover:text-yellow-400 transition-colors line-clamp-3">
                                    {pub.title}
                                </h3>
                                <p className="text-sm text-gray-400 font-medium border-t border-neutral-800 pt-3 mt-auto">
                                    {pub.venue}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}