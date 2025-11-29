import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import LogoImage from '../assets/lg.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
    
    const navRefs = useRef({});

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'publications', label: 'Publications' },
        { id: 'education', label: 'Education' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            if (window.scrollY < 100) {
                setActiveSection('home');
            }
        };

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -60% 0px', 
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && window.scrollY >= 100) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        navLinks.forEach(link => {
            const section = document.getElementById(link.id);
            if (section) observer.observe(section);
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const activeTab = navRefs.current[activeSection];
        
        if (activeTab) {
            setIndicatorStyle({
                left: activeTab.offsetLeft,
                width: activeTab.offsetWidth,
                opacity: 1
            });
        } else {
            setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [activeSection]);

    const scrollToSection = (sectionId) => {
        setIsOpen(false);
        setActiveSection(sectionId); 

        setTimeout(() => {
            if (sectionId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.getElementById(sectionId);
                if (element) {
                    const isMobile = window.innerWidth < 768;
                    const navbarOffset = isMobile ? 80 : 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navbarOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        }, 300);
    };

    return (
        <nav
            className={`bg-black/50 backdrop-blur-md text-white sticky top-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                ? 'mx-0 mt-0 md:rounded-none rounded-lg shadow-lg shadow-gray-700/50'
                : 'mx-4 mt-3 md:mx-6 md:mt-4 md:rounded-2xl rounded-lg shadow-md shadow-gray-700/40'
                }`}
        >

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between px-8 py-4 relative">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center cursor-pointer"
                    >
                        <img src={LogoImage} alt="Logo" className="h-8 w-10" />
                    </button>
                </div>

                <div className="flex items-center relative">
                    
                    <div 
                        className="absolute bg-gray-700/80 rounded-full transition-all duration-300 ease-out h-9 -z-10"
                        style={{
                            left: `${indicatorStyle.left}px`,
                            width: `${indicatorStyle.width}px`,
                            opacity: indicatorStyle.opacity,
                        }}
                    />

                    <div className="flex items-center space-x-2"> 
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                ref={el => navRefs.current[link.id] = el}
                                onClick={() => scrollToSection(link.id)}
                                className={`px-4 py-1.5 rounded-full transition-colors duration-300 z-10 ${
                                    activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>

                <a
                    href="https://drive.google.com/file/d/1cjUFet02qS2myK64I6MvOtS86W6pxu6K/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-full transition"
                >
                    Resume
                </a>

            </div>

            {/* Mobile Navigation (Unchanged mostly, just using map) */}
            <div className="md:hidden">
                <div className="flex items-center justify-between px-6 py-4">
                    <button onClick={() => scrollToSection('home')} className="flex items-center">
                        <img src={LogoImage} alt="Logo" className="h-8 w-10" />
                    </button>
                    <button onClick={toggleMenu} className="p-2 hover:bg-gray-900 rounded transition">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="px-6 pb-6 space-y-1">
                        <div className="border-t border-gray-800 pt-4">
                            {navLinks.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="w-full flex items-center justify-between py-4 text-xl font-serif hover:text-gray-300 transition"
                                >
                                    <span>{link.label}</span>
                                </button>
                            ))}
                            
                            <a
                                href="https://drive.google.com/file/d/1cjUFet02qS2myK64I6MvOtS86W6pxu6K/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition mt-6"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;