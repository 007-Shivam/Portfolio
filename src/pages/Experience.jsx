import React, { useState } from "react";
import experienceData from "../JSON/Experience.json";

export default function Experience() {
    const [selected, setSelected] = useState(null);

    return (
        <div id="experience" className="p-6 min-h-screen">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Experience
            </h2>
            <div className="w-24 sm:w-30 h-1.5 bg-yellow-400 mx-auto mb-5 rounded-full"></div>

            <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
                {experienceData.map((exp, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelected(exp)}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-md cursor-pointer overflow-hidden transform hover:scale-105 transition-all duration-300 w-64"
                    >
                        <img
                            src={exp.image}
                            alt={exp.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-3 text-center">
                            <h2 className="text-white font-bold text-lg">{exp.role}</h2>
                            <p className="text-gray-600 text-sm">{exp.title}</p>
                            <p className="text-gray-400 text-xs">{exp.duration}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 flex justify-center items-center z-50 px-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={() => setSelected(null)}
                    ></div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full p-6 relative shadow-2xl z-10 animate-fade-in-up">
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors text-2xl font-bold"
                        >
                            &times;
                        </button>

                        <img
                            src={selected.image}
                            alt={selected.title}
                            className="w-full h-56 object-cover rounded-lg mb-4 shadow-sm"
                        />
                        <h2 className="text-white text-2xl font-bold mb-1">{selected.role}</h2>
                        <p className="text-white font-medium mb-1">{selected.title}</p>
                        <p className="text-gray-500 text-sm mb-4 border-b pb-2">
                            {selected.duration} • {selected.type}
                        </p>

                        <ul className="text-white list-disc list-inside space-y-2 text-sm max-h-60 overflow-y-auto">
                            {selected.responsibilities.map((res, i) => (
                                <li key={i} className="leading-relaxed">
                                    {res}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}