import { React, useEffect } from 'react'
import './SkillBarComponent.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function SkillBar() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <mainContainer>
            <div className="skill_cont">
                <div className="font-bold sub-title" data-aos="fade-up">
                    <h2>Programming Skills</h2>
                </div>

                <div className="skill_row" data-aos="fade-up">
                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">HTML</div>
                                <div className="progress-bar" value="80%">
                                    <div className="progress-line" style={{ maxWidth: '80%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Php</div>
                                <div className="progress-bar" value="50%">
                                    <div className="progress-line" style={{ maxWidth: '50%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Kotlin</div>
                                <div className="progress-bar" value="60%">
                                    <div className="progress-line" style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">C</div>
                                <div className="progress-bar" value="40%">
                                    <div className="progress-line" style={{ maxWidth: '40%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">SQLite</div>
                                <div className="progress-bar" value="30%">
                                    <div className="progress-line" style={{ maxWidth: '30%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">CSS</div>
                                <div className="progress-bar" value="70%">
                                    <div className="progress-line" style={{ maxWidth: '70%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Java</div>
                                <div className="progress-bar" value="55%">
                                    <div className="progress-line" style={{ maxWidth: '55%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Dart</div>
                                <div className="progress-bar" value="25%">
                                    <div className="progress-line" style={{ maxWidth: '25%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Data Structures</div>
                                <div className="progress-bar" value="50%">
                                    <div className="progress-line" style={{ maxWidth: '50%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">JavaScript</div>
                                <div className="progress-bar" value="50%">
                                    <div className="progress-line" style={{ maxWidth: '50%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Python</div>
                                <div className="progress-bar" value="60%">
                                    <div className="progress-line" style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">MySQL</div>
                                <div className="progress-bar" value="60%">
                                    <div className="progress-line" style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">DBMS</div>
                                <div className="progress-bar" value="40%">
                                    <div className="progress-line" style={{ maxWidth: '40%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="font-bold sub-title" data-aos="fade-up">
                    <h2>Libraries / Frameworks</h2>
                </div>
                <div className="skill_row" data-aos="fade-up">
                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">Pandas</div>
                                <div className="progress-bar" value="50%">
                                    <div className="progress-line" style={{ maxWidth: '50%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Sci-kit learn</div>
                                <div className="progress-bar" value="65%">
                                    <div className="progress-line" style={{ maxWidth: '65%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Tailwind CSS</div>
                                <div className="progress-bar" value="30%">
                                    <div className="progress-line" style={{ maxWidth: '30%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">React Native</div>
                                <div className="progress-bar" value="25%">
                                    <div className="progress-line" style={{ maxWidth: '25%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">Numpy</div>
                                <div className="progress-bar" value="50%">
                                    <div className="progress-line" style={{ maxWidth: '50%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">React JS</div>
                                <div className="progress-bar" value="60%">
                                    <div className="progress-line" style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Beautiful Soup</div>
                                <div className="progress-bar" value="40%">
                                    <div className="progress-line" style={{ maxWidth: '40%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">Flask</div>
                                <div className="progress-bar" value="30%">
                                    <div className="progress-line" style={{ maxWidth: '30%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Jetpack Compose</div>
                                <div className="progress-bar" value="60%">
                                    <div className="progress-line" style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Selenium</div>
                                <div className="progress-bar" value="30%">
                                    <div className="progress-line" style={{ maxWidth: '30%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="font-bold sub-title" data-aos="fade-up">
                    <h2>Tools / Platforms</h2>
                </div>

                <div className="skill_row" data-aos="fade-up">
                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">Windows</div>
                                <div className="progress-bar" value="70%">
                                    <div className="progress-line" style={{ maxWidth: '70%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Canva</div>
                                <div className="progress-bar" value="60%">
                                    <div className="progress-line" style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">Ubuntu</div>
                                <div className="progress-bar" value="30%">
                                    <div className="progress-line" style={{ maxWidth: '30%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Git</div>
                                <div className="progress-bar" value="70%">
                                    <div className="progress-line" style={{ maxWidth: '70%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">Figma</div>
                                <div className="progress-bar" value="75%">
                                    <div className="progress-line" style={{ maxWidth: '75%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="font-bold sub-title" data-aos="fade-up">
                    <h2>Softskills</h2>
                </div>
                <div className="skill_row" data-aos="fade-up">
                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">Teamwork</div>
                                <div className="progress-bar" value="90%">
                                    <div className="progress-line" style={{ maxWidth: '90%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Leadership</div>
                                <div className="progress-bar" value="60%">
                                    <div className="progress-line" style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">Problem Solving</div>
                                <div className="progress-bar" value="80%">
                                    <div className="progress-line" style={{ maxWidth: '80%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Communication</div>
                                <div className="progress-bar" value="65%">
                                    <div className="progress-line" style={{ maxWidth: '65%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="skill_col">
                        <div className="skills-container">
                            <div className="skill">
                                <div className="subject">Attention to detail</div>
                                <div className="progress-bar" value="85%">
                                    <div className="progress-line" style={{ maxWidth: '85%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="subject">Multi-tasking</div>
                                <div className="progress-bar" value="70%">
                                    <div className="progress-line" style={{ maxWidth: '70%' }}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </mainContainer>
    );
}