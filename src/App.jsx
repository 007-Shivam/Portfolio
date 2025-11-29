import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import { AnimatedBackground } from "animated-backgrounds";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./pages/HeroSection.jsx";
import "./App.css";
import Projects from './pages/Projects.jsx';
import Footer from './components/Footer.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import Experience from './pages/Experience.jsx';
import Education from './pages/Education.jsx';
import Publications from './pages/Publication.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Contribution from './pages/Contribution.jsx';

function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground
        preset="portfolio"
        animationName="neuralNetwork"
        interactive={true}
        interactionConfig={{
          effect: "burst",
          strength: 1,
          radius: 50,
          continuous: true
        }}
        enablePerformanceMonitoring={true}
        style={{
          pointerEvents: "auto",
          position: "fixed",
          inset: 0,
          zIndex: 0
        }}
      />

      <div className="fixed inset-0 bg-black/30 z-[1] pointer-events-none" />

      <div className="relative z-[2]">
        <Navbar />
        <ScrollToTop />
        <HeroSection />
        <Experience />
        <Projects />
        <Contribution />
        <Skills />
        <Education />
        <Publications />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}

export default App;