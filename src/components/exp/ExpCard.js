import { React, useEffect } from 'react'
import './ExpCard.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Experience from '../../JSON/Experience.json'


export default function ExpCard() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className="exp-main">
      <div className="my-prof-div">
        <p className="my-profiles">My Experience</p>
      </div>

      <ul className="exp-cards">
        {Experience.map((exp, index) => (
          <li className="exp-cards_item" key={index} data-aos="fade-up">
            <div className="exp-card">
              <div className="exp-card_image">
                <img src={exp.image} alt="Experience" />
              </div>
              <div className="exp-card_content">
                <h2 className="exp-card_title">{exp.title}</h2>
                <h2 className="exp-card_title">
                  {exp.role} <br />
                  {exp.type} <br />
                  {exp.duration}
                </h2>
                <div className="exp-card_text">
                  <p className="exp-des">
                    {exp.responsibilities.map((res, index) => (
                      <>&bull; {res}<br /></>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
