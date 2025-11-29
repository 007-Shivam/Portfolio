import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si'; 


export default function Footer() {
    const socialIcons = [
        { icon: <Instagram size={24} />, key: 'instagram', link: 'https://instagram.com/shivam__2709' },
        { icon: <Linkedin size={24} />, key: 'linkedin', link: 'https://linkedin.com/in/shivambhosle007' },
        { icon: <Github size={24} />, key: 'github', link: 'https://github.com/007-Shivam' },
        { icon: <Mail size={24} />, key: 'email', link: 'mailto:shivambhosle.work@gmail.com' },
                { icon: <SiLeetcode size={24} />, key: 'leetcode', link: 'https://leetcode.com/u/Shivam__007/' }, // added LeetCode
        
    ];

    return (
        <footer className="w-full bg-black-900/70 backdrop-blur-md text-white mt-2">
            <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col items-center">

                {/* Social Icons */}
                <div className="flex space-x-4 sm:space-x-6 mb-6">
                    {socialIcons.map((item) => (
                        <a
                            key={item.key}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit my ${item.key} profile`}
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-700/50 hover:bg-yellow-400/20 text-yellow-400 rounded-full transition-all duration-300"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div className="text-center">
                    <p className="text-gray-200">
                        &copy; 2025 Designed by{' '}
                        <span className="uppercase tracking-widest font-medium text-white">
                            Shivam Bhosle
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
