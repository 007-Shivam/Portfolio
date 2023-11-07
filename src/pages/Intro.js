import React from 'react'
import Footer from '../components/footer/FooterComponent';
import SkillBar from '../components/skill/SkillBarComponent';
import Hero from '../components/hero/HeroComponent';

export default function Intro() {
    return (
        <div>
            <Hero/>
            <SkillBar/>
            <Footer/>
        </div>
    );
}