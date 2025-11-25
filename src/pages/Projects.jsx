import React, { useRef, useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import projectsData from '../json/Projects.json';

const Projects = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const originalCards = projectsData; // ✅ Use the imported JSON

  const displayCards = useMemo(() => {
    const cardsToClone = originalCards.slice(0, 3);
    return [
      ...originalCards,
      ...cardsToClone.map(card => ({ ...card, id: `clone-${card.id}` }))
    ];
  }, [originalCards]);

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(true);
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.card')?.offsetWidth || 0;
      const gap = 16;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const checkInfiniteLoop = () => {
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;
      const cardWidth = carouselRef.current.querySelector('.card')?.offsetWidth || 0;
      if (cardWidth === 0) return;
      const gap = 16;
      const originalListWidth = (cardWidth + gap) * originalCards.length;

      if (scrollLeft >= originalListWidth) {
        carouselRef.current.scrollTo({
          left: scrollLeft % originalListWidth,
          behavior: 'instant'
        });
      }
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      updateScrollButtons();
      checkInfiniteLoop();
    };

    handleScroll();
    carousel.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    let isPaused = false;

    const scrollNext = () => {
      if (isPaused || !carouselRef.current) return;
      const cardWidth = carousel.querySelector('.card')?.offsetWidth || 0;
      if (cardWidth === 0) return;
      const gap = 16;
      const scrollAmount = cardWidth + gap;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const interval = setInterval(scrollNext, 3000);
    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => (isPaused = false);

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(interval);
    };
  }, [originalCards.length]);

  return (
    <div id='projects' className=" w-full flex flex-col items-center justify-center p-4 md:p-4 lg:p-1 mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        My Projects
      </h2>
      <div className="w-24 sm:w-30 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>

      <div className="relative w-full max-w-7xl">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-8 px-4 md:px-8"
        >
          {displayCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="card flex-shrink-0 w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[400px] bg-zinc-900/70 rounded-2xl shadow-2xl border border-zinc-800 overflow-hidden snap-start relative"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-xl relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 flex flex-wrap gap-2">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="bg-yellow-400 text-xs text-black font-semibold px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between gap-6 min-h-[200px]">
                <div className="space-y-3">
                  <h3 className="text-white text-xl font-semibold">{card.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{card.description}</p>
                </div>

                <div className="flex gap-4">
                  {card.learnMoreLink && (
                    <a
                      href={card.learnMoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-yellow-400 text-sm font-medium group"
                    >
                      <span className="w-7 h-7 bg-yellow-400 rounded flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                        <ArrowRight className="w-3 h-3 text-black" />
                      </span>
                      Code
                    </a>
                  )}

                  {card.demoLink && (
                    <a
                      href={card.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium group"
                    >
                      <span className="w-7 h-7 bg-cyan-400 rounded flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                        <ExternalLink className="w-3 h-3 text-black" />
                      </span>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-1">
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-lg border border-yellow-400 text-yellow-400 flex items-center justify-center 
                         hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed 
                         transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Scroll back"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-lg border border-yellow-400 text-yellow-400 flex items-center justify-center 
                         hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed 
                         transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Scroll forward"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Projects;
