import React from 'react'

import Footer from '../components/footer/FooterComponent';
import SkillBar from '../components/home/skill/SkillBarComponent';
import Hero from '../components/home/hero/HeroComponent';
import Contribution from '../components/home/contri/Contribution';

export default function Intro() {
    return (
        <div>
            <Hero />
            <Contribution />
            <SkillBar />
            <Footer />
        </div>
    );
}