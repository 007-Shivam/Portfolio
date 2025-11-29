import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const buttonStyle = {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    // Glassmorphism Magic
    background: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(10px)", 
    WebkitBackdropFilter: "blur(10px)",
    color: "#fff",
    cursor: "pointer",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
    // Animation logic
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.4s ease-in-out",
    pointerEvents: isVisible ? "auto" : "none",
    // Hover logic override
    ...(isHovered && {
      background: "rgba(0, 0, 0, 0.8)",
      transform: "translateY(-5px)",
    }),
  };

  return (
    <button
      onClick={scrollToTop}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Scroll to top"
    >
      <svg color="yellow"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  );
};

export default ScrollToTop;