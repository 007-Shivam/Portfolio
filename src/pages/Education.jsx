import React from "react";
import educationHistory from "../JSON/Education.json";

export default function Education() {
    return (
        <div id="education" className="w-full py-10 px-4 font-sans">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Education
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto mb-5 rounded-full"></div>

            {/* -------- MOBILE VIEW -------- */}
            <div className="md:hidden flex flex-col gap-6">
                {educationHistory.map((edu, index) => (
                    <div
                        key={index}
                        className="p-6 border border-gray-200 shadow-sm flex flex-col items-center justify-between h-[380px] w-full bg-white/10 rounded-xl backdrop-blur-sm"
                    >
                        {/* Top Section: Content */}
                        <div className="flex flex-col items-center w-full">
                            <img
                                src={edu.image}
                                alt={edu.institution}
                                className="w-16 h-16 object-contain mb-3"
                            />

                            <h3 className="text-lg font-bold text-white mt-1 text-center line-clamp-2 h-14 flex items-center justify-center">
                                {edu.institution}
                            </h3>

                            <p className="text-gray-400 text-sm text-center">{edu.location}</p>

                            <p className="text-blue-400 font-semibold text-sm mt-1">
                                {edu.scoreType}: {edu.scoreValue}
                            </p>

                            {/* NEW GRADIENT BADGE DESIGN FOR MOBILE */}
                            {edu.course && (
                                <div className="mt-3 px-4 py-1.5 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-900/20 to-gray-900/40 shadow-[0_0_10px_rgba(59,130,246,0.1)] w-full flex justify-center">
                                    <span className="text-sm font-bold bg-gradient-to-r from-yellow-400 via-orange-200 to-blue-400 bg-clip-text text-transparent text-center leading-tight">
                                        {edu.course}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Bottom Section: Date */}
                        <p className="text-sm font-bold text-gray-300 mt-2">{edu.duration}</p>
                    </div>
                ))}
            </div>

            {/* -------- DESKTOP VIEW -------- */}
            <div className="hidden md:flex overflow-x-auto pb-8 justify-center items-start">
                {educationHistory.map((edu, index) => (
                    <div key={index} className="flex flex-col items-center min-w-[320px]">
                        {/* Timeline line */}
                        <div className="relative flex items-center w-full h-10">
                            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-400 -translate-y-1/2 z-0"></div>
                            <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white ring-2 ring-blue-500 z-10 shadow-md transition-transform duration-300 hover:scale-125 mx-auto"></div>
                        </div>

                        {/* Card */}
                        <div className="mt-2 p-6 border border-gray-200 rounded-xl w-72 h-[340px] flex flex-col items-center justify-between bg-white/10 text-center transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer backdrop-blur-sm">
                            {/* Content Wrapper (Top) */}
                            <div className="flex flex-col items-center w-full">
                                <img
                                    src={edu.image}
                                    alt={edu.institution}
                                    className="w-20 h-20 object-contain mb-3"
                                />

                                <div className="h-14 flex items-center justify-center w-full">
                                    <h3 className="text-lg font-bold text-white leading-tight">
                                        {edu.institution}
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-sm mt-1">{edu.location}</p>

                                <p className="text-blue-400 font-semibold text-sm mt-1">
                                    {edu.scoreType}: {edu.scoreValue}
                                </p>

                                {/* NEW GRADIENT BADGE DESIGN FOR DESKTOP */}
                                {edu.course && (
                                    <div className="mt-3 w-full flex items-center justify-center h-12">
                                        <div className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-950/30 to-black/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-shadow duration-300">
                                            <span className="text-sm font-extrabold bg-gradient-to-r from-yellow-400 via-orange-300 to-blue-400 bg-clip-text text-transparent leading-tight block">
                                                {edu.course}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Duration (Bottom) */}
                            <p className="text-sm font-bold text-gray-300 mt-2">
                                {edu.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}