import React, { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function Contribution() {
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/007-Shivam/events?per_page=15')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) setActivity(data);
            })
            .catch(err => console.error("Error fetching GitHub activity:", err));
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const formatEvent = (event) => {
        switch (event.type) {
            case 'PushEvent':
                const commitCount = event.payload.size || event.payload.commits?.length || 1;
                return `Pushed ${commitCount} commit(s) to`;
            case 'CreateEvent':
                return `Created ${event.payload.ref_type}`;
            case 'WatchEvent':
                return 'Starred repository';
            case 'PullRequestEvent':
                return 'Opened pull request in';
            case 'ForkEvent':
                return 'Forked';
            case 'IssuesEvent':
                return 'Opened issue in';
            default:
                return 'Contributed to';
        }
    };

    const theme = {
        light: ["rgba(255, 255, 255, 0.1)", "#fef08a", "#facc15", "#eab308", "#ca8a04"],
        dark: ["rgba(255, 255, 255, 0.08)", "#422006", "#854d0e", "#ca8a04", "#facc15"],
    };

    return (
        <div className="w-full py-10 px-4 font-sans text-white flex flex-col items-center justify-center">
            
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #1f2937; /* gray-800 */
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #facc15; /* yellow-400 */
                    border-radius: 10px;
                    border: 2px solid #1f2937; /* Creates padding effect */
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #eab308; /* yellow-500 */
                }
            `}</style>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                My Open Source Contributions
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto mb-10 rounded-full"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl">

                <div className="lg:col-span-4 flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">Recent Activity</h3>
                    
                    <div className="custom-scrollbar bg-white/5 border border-white/10 rounded-xl p-4 h-[320px] overflow-y-auto">
                        {activity.length > 0 ? (
                            <div className="space-y-4">
                                {activity.map((event) => (
                                    <div key={event.id} className="flex items-start gap-3 text-sm border-b border-white/10 pb-3 last:border-0">
                                        <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-yellow-500"></div>
                                        <div>
                                            <p className="text-gray-300">
                                                {formatEvent(event)} <span className="text-yellow-400 font-medium break-all">{event.repo.name}</span>
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">{formatDate(event.created_at)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 text-center mt-10">Loading activity...</p>
                        )}
                    </div>
                </div>

                <div className="lg:col-span-8 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4 lg:self-start">Contribution Graph</h3>
                    
                    <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-yellow-400 transition-colors shadow-lg min-w-fit mx-auto lg:mx-0 w-max">
                            <GitHubCalendar
                                username="007-Shivam"
                                blockSize={14}
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

            </div>

            <ReactTooltip
                id="react-tooltip"
                style={{
                    backgroundColor: "#1a1a1a",
                    color: "#facc15",
                    border: "1px solid #333",
                    borderRadius: "8px",
                    zIndex: 50
                }}
            />
        </div>
    );
}