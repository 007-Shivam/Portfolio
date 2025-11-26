import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip as ReactTooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css"; // Uncomment if you don't have global styles

export default function Contribution() {

    // Custom theme to match your dark portfolio
    const theme = {
        light: [
            "rgba(255, 255, 255, 0.1)",
            "#fef08a", // yellow-200
            "#facc15", // yellow-400
            "#eab308", // yellow-500
            "#ca8a04", // yellow-600
        ],
        dark: [
            "rgba(255, 255, 255, 0.08)", // Level 0
            "#422006", // Level 1
            "#854d0e", // Level 2
            "#ca8a04", // Level 3
            "#facc15", // Level 4
        ],
    };

    return (
        <div className="w-full py-10 px-4 font-sans text-white flex flex-col items-center justify-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                My Open Source Contributions
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto mb-10 rounded-full"></div>

            <div className="flex justify-center w-full max-w-5xl">
                <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-800">

                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-yellow-400 transition-colors shadow-lg min-w-fit mx-auto w-max">
                        <GitHubCalendar
                            username="007-Shivam"
                            blockSize={14} // Slightly smaller block size helps on mobile
                            blockMargin={4}
                            colorScheme="dark"
                            fontSize={16}
                            theme={theme}
                            renderBlock={(block, activity) =>
                                React.cloneElement(block, {
                                    "data-tooltip-id": "react-tooltip",
                                    "data-tooltip-html": `${activity.count} contributions on ${activity.date}`,
                                })
                            }
                            labels={{
                                totalCount: "{{count}} contributions in the last year",
                            }}
                        />
                    </div>
                </div>
            </div>

            <ReactTooltip
                id="react-tooltip"
                style={{
                    backgroundColor: "#1a1a1a",
                    color: "#facc15",
                    border: "1px solid #333",
                    borderRadius: "8px",
                    zIndex: 50 // Ensures tooltip appears above other elements
                }}
            />
        </div>
    );
}