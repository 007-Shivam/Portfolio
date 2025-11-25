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
            <div className="md:hidden flex flex-col gap-8">
                {educationHistory.map((edu, index) => (
                    <div
                        key={index}
                        className="p-6 border border-gray-200 shadow-sm flex flex-col items-center h-72 w-full bg-white/10 rounded-xl"
                    >
                        <img
                            src={edu.image}
                            alt={edu.institution}
                            className="w-16 h-16 object-contain mb-3"
                        />
                        <p className="text-sm font-bold text-gray-300">{edu.duration}</p>
                        <h3 className="text-lg font-bold text-white mt-1 text-center">
                            {edu.institution}
                        </h3>
                        <p className="text-gray-400 text-sm">{edu.location}</p>
                        <p className="text-blue-400 font-semibold text-sm mt-1">
                            {edu.scoreType}: {edu.scoreValue}
                        </p>
                    </div>
                ))}
            </div>

            {/* -------- DESKTOP VIEW -------- */}
            {/* FIX: Removed 'gap-8' so the connecting lines touch each other */}
            <div className="hidden md:flex overflow-x-auto pb-8 justify-center items-start">
                {educationHistory.map((edu, index) => (
                    <div key={index} className="flex flex-col items-center min-w-[300px]">
                        {/* Timeline line */}
                        <div className="relative flex items-center w-full h-10">
                            
                            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-400 -translate-y-1/2 z-0"></div>

                            <div
                                className={`w-5 h-5 bg-blue-500 rounded-full border-4 border-white ring-2 ring-blue-500 z-10 shadow-md transition-transform duration-300 hover:scale-125 mx-auto`}
                            ></div>
                        </div>

                        {/* Card */}
                        <div className="mt-4 p-6 border border-gray-200 rounded-xl w-64 h-72 flex flex-col items-center justify-between bg-white/10 text-center transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
                            <img
                                src={edu.image}
                                alt={edu.institution}
                                className="w-20 h-20 object-contain mb-2"
                            />
                            <div>
                                <h3 className="text-lg font-bold text-white">
                                    {edu.institution}
                                </h3>
                                <p className="text-gray-400 text-sm">{edu.location}</p>
                                <p className="text-blue-400 font-semibold text-sm mt-1">
                                    {edu.scoreType}: {edu.scoreValue}
                                </p>
                            </div>
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