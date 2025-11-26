import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    // Scroll effect to make navbar full width
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Inside Navbar.jsx

    const scrollToSection = (sectionId) => {
        // 1. Close the menu immediately
        setIsOpen(false);

        // 2. Use a timeout to allow the menu to close and layout to shift UP before calculating
        setTimeout(() => {
            if (sectionId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.getElementById(sectionId);
                if (element) {
                    // Adjust offset based on screen width (Mobile usually needs less offset than desktop)
                    const isMobile = window.innerWidth < 768;
                    const navbarOffset = isMobile ? 80 : 100; // 80px for mobile, 100px for desktop

                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navbarOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        }, 300); // 300ms delay to match the closing animation/layout shift
    };

    return (
        <nav
            className={`bg-black/50 backdrop-blur-md text-white sticky top-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                ? 'mx-0 mt-0 md:rounded-none rounded-lg shadow-lg shadow-gray-700/50'
                : 'mx-4 mt-3 md:mx-6 md:mt-4 md:rounded-2xl rounded-lg shadow-md shadow-gray-700/40'
                }`}
        >

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between px-8 py-4">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center cursor-pointer"
                    >
                        <Terminal size={28} className="text-white hover:text-gray-300 transition" />
                    </button>
                </div>

                <div className="flex items-center space-x-8">
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="flex items-center space-x-1 hover:text-gray-300 transition"
                    >
                        <span>Experience</span>
                    </button>


                    <button
                        onClick={() => scrollToSection('projects')}
                        className="flex items-center space-x-1 hover:text-gray-300 transition"
                    >
                        <span>Projects</span>
                    </button>

                    <button
                        onClick={() => scrollToSection('publications')}
                        className="flex items-center space-x-1 hover:text-gray-300 transition"
                    >
                        <span>Publications</span>
                    </button>

                    <button
                        onClick={() => scrollToSection('education')}
                        className="flex items-center space-x-1 hover:text-gray-300 transition"
                    >
                        <span>Education</span>
                    </button>



                    <button
                        onClick={() => scrollToSection('skills')}
                        className="flex items-center space-x-1 hover:text-gray-300 transition"
                    >
                        Skills
                    </button>

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="flex items-center space-x-1 hover:text-gray-300 transition"
                    >
                        Contact
                    </button>
                </div>

                <a
                    href="https://drive.google.com/file/d/1cjUFet02qS2myK64I6MvOtS86W6pxu6K/view?usp=sharing" // Replace with your actual URL
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-full transition"
                >
                    Resume
                </a>

            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-6 py-4">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center"
                    >
                        <Terminal size={26} className="text-white hover:text-gray-300 transition" />
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="p-2 hover:bg-gray-900 rounded transition"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="px-6 pb-6 space-y-1">
                        <div className="border-t border-gray-800 pt-4">

                            <button
                                onClick={() => {
                                    scrollToSection('experience');
                                }}
                                className="w-full flex items-center justify-between py-4 text-xl font-serif hover:text-gray-300 transition"
                            >
                                <span>Experience</span>

                            </button>


                            <button
                                onClick={() => scrollToSection('projects')}
                                className="block w-full text-left py-4 text-xl font-serif hover:text-gray-300 transition"
                            >
                                Projects
                            </button>

                            <button
                                onClick={() => scrollToSection('publications')}
                                className="block w-full text-left py-4 text-xl font-serif hover:text-gray-300 transition"
                            >
                                Publications
                            </button>

                            <button
                                onClick={() => {
                                    scrollToSection('education');
                                }}
                                className="w-full flex items-center justify-between py-4 text-xl font-serif hover:text-gray-300 transition"
                            >
                                <span>Education</span>

                            </button>



                            <button
                                onClick={() => {
                                    scrollToSection('skills');
                                }}
                                className="w-full flex items-center justify-between py-4 text-xl font-serif hover:text-gray-300 transition"
                            >
                                <span>Skills</span>
                            </button>

                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left py-4 text-xl font-serif hover:text-gray-300 transition border-b border-gray-800"
                            >
                                Contact
                            </button>
                        </div>

                        <a
                            href="https://drive.google.com/file/d/1cjUFet02qS2myK64I6MvOtS86W6pxu6K/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block text-center bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition mt-6"
                        >
                            Resume
                        </a>

                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;