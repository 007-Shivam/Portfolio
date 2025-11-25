import { React } from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { SiLeetcode } from 'react-icons/si'; // import LeetCode icon

export default function HeroSection() {
    const socialIcons = [
        { icon: <Instagram size={24} />, key: 'instagram', link: 'https://instagram.com/shivam__2709' },
        { icon: <Linkedin size={24} />, key: 'linkedin', link: 'https://linkedin.com/in/shivambhosle007' },
        { icon: <Github size={24} />, key: 'github', link: 'https://github.com/007-Shivam' },
        { icon: <Mail size={24} />, key: 'email', link: 'mailto:sbhosle@usc.com' },
        { icon: <SiLeetcode size={24} />, key: 'leetcode', link: 'https://leetcode.com/u/Shivam__007/' }, // added LeetCode
    ];

    return (
        <section className="min-h-screen font-['Inter',_sans-serif] text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 text-center">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-10">
                
                {/* Name Section */}
                <div className="relative inline-block text-left">
                    <span className="absolute -top-6 left-3 text-xl sm:text-2xl text-gray-400">I’m</span>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
                        Shivam Bhosle.
                    </h1>
                    <div className="w-24 sm:w-28 h-1.5 bg-yellow-400 mt-6 mx-auto rounded-full"></div>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl px-2">
                    I am a passionate{' '}
                    <span className="text-yellow-400 font-semibold">
                        <Typewriter
                            words={[
                                'Software Developer',
                                'Machine Learning Engineer',
                                'AI Engineer',
                                'Full Stack Developer',
                                'Android Developer',
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={90}
                            deleteSpeed={60}
                            delaySpeed={1500}
                        />
                    </span>
                    .
                </p>

                {/* Social Icons */}
                <div className="flex space-x-4 sm:space-x-6 mt-2">
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
            </div>
        </section>
    );
}
