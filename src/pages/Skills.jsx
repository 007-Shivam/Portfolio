import React from 'react';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaApple, FaGitAlt, FaBrain, FaNodeJs, FaDocker, FaLinux, FaWindows } from 'react-icons/fa';
import { SiC, SiKotlin, SiMysql, SiR, SiTensorflow, SiPostman, SiGooglecloud, SiPandas, SiNumpy, SiPostgresql, SiHuggingface, SiFastapi, SiJetpackcompose, SiScikitlearn, SiSelenium, SiReact, SiFlutter, SiFigma, SiMongodb } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

// Reduced icon size to 24
const iconSize = 24;

const skillCategories = [
    {
        title: "Languages",
        items: [
            { name: 'C/C++', icon: <SiC size={iconSize} color="#00599C" /> },
            { name: 'Java', icon: <FaJava size={iconSize} color="#f89820" /> },
            { name: 'Python', icon: <FaPython size={iconSize} color="#3776AB" /> },
            { name: 'R', icon: <SiR size={iconSize} color="#276DC3" /> },
            { name: 'Kotlin', icon: <SiKotlin size={iconSize} color="#0095D5" /> },
            { name: 'PHP', icon: <FaPhp size={iconSize} color="#777BB4" /> },
            { name: 'HTML', icon: <FaHtml5 size={iconSize} color="#E34F26" /> },
            { name: 'CSS', icon: <FaCss3Alt size={iconSize} color="#1572B6" /> },
            { name: 'JavaScript', icon: <FaJs size={iconSize} color="#F7DF1E" /> },
            { name: 'MySQL', icon: <SiMysql size={iconSize} color="#4479A1" /> },
        ]
    },
    {
        title: "Libraries / Frameworks",
        items: [
            { name: 'Pandas', icon: <SiPandas size={iconSize} color="#150458" /> },
            { name: 'Numpy', icon: <SiNumpy size={iconSize} color="#F7931E" /> },
            { name: 'Scikit-learn', icon: <SiScikitlearn size={iconSize} color="#F7931E" /> },
            { name: 'TensorFlow', icon: <SiTensorflow size={iconSize} color="#FF6F00" /> },
            { name: 'Selenium', icon: <SiSelenium size={iconSize} color="#43B02A" /> },
            { name: 'ReactJS', icon: <SiReact size={iconSize} color="#61DAFB" /> },
            { name: 'Flutter', icon: <SiFlutter size={iconSize} color="#02569B" /> },
            { name: 'Jetpack Compose', icon: <SiJetpackcompose size={iconSize} color="#43B02A" /> },
            { name: 'FastAPI', icon: <SiFastapi size={iconSize} color="#009688" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql size={iconSize} color="#336791" /> },
        ]
    },
    {
        title: "Tools",
        items: [
            { name: 'Git', icon: <FaGitAlt size={iconSize} color="red" /> },
            { name: 'Hugging Face', icon: <SiHuggingface size={iconSize} color="#F58220" /> },
            { name: 'Docker', icon: <FaDocker size={iconSize} color="#2496ED" /> },
            { name: 'Node.js', icon: <FaNodeJs size={iconSize} color="#339933" /> },
            { name: 'MongoDB', icon: <SiMongodb size={iconSize} color="#47A248" /> },
            { name: 'LLMs', icon: <FaBrain size={iconSize} color="#FF6F61" /> },
            { name: 'Figma', icon: <SiFigma size={iconSize} color="#F24E1E" /> },
            { name: 'VS Code', icon: <VscVscode size={iconSize} color="#007ACC" /> },
            { name: 'Postman', icon: <SiPostman size={iconSize} color="#FF6C37" /> },
            { name: 'Google Cloud', icon: <SiGooglecloud size={iconSize} color="#4285F4" /> },
        ]
    },
    {
        title: "OS",
        items: [
            { name: 'Windows', icon: <FaWindows size={iconSize} color="#0078D6" /> },
            { name: 'Linux', icon: <FaLinux size={iconSize} color="#FCC624" /> },
            { name: 'macOS', icon: <FaApple size={iconSize} color="#ffffff" /> },
        ]
    }
];

export default function Skills() {
    return (
        <section id='skills' className="py-6 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-center">
                Skills
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-5 rounded-full"></div>

            <div className="max-w-6xl mx-auto space-y-8 ">
                {skillCategories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold text-gray-200 mb-3 border-l-4 border-yellow-400 pl-3">
                            {category.title}
                        </h3>
                        {/* Tighter grid gap and increased columns on large screens */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3">
                            {category.items.map((skill, idx) => (
                                <div key={idx} className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-2 shadow hover:scale-105 transition-transform duration-200">
                                    {skill.icon}
                                    <span className="mt-1 text-xs font-medium text-gray-800 dark:text-gray-200 text-center">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}