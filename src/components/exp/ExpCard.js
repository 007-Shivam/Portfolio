import { React, useEffect } from 'react'
import './ExpCard.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import ACM from '../../assets/projects/acm.jpg'
import AIESEC from '../../assets/exp/aiesec.png'
import Edunet from '../../assets/exp/edunet.png'

export default function ExpCard() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const experiences = [
    {
      title: "Association for Computing Machinery BVPDET-NM",
      role: "Web Master",
      type: "Full Time",
      duration: "Sept 2023 - Present",
      responsibilities: [
        "Website management and content updates.",
        "User experience and design enhancements.",
        "Collaboration with ACM teams.",
        "Implementing new web technologies strategically.",
        "Collaborated with a team of 5 members to implement innovative features on the website."
      ],
      image: ACM
    },
    {
      title: "Edunet Foundation",
      role: "Artificial Intelligence Intern",
      type: "Internship",
      duration: "Jun 2023 - Jul 2023",
      responsibilities: [
        "Completed assigned tasks and milestone.",
        "Delivering a project presentation.",
        "Solving real-world challenges in AI.",
        "Valuable experience enhancing skills in AI and professional growth.",
        "Earned certifications from IBM and Edunet Foundation."
      ],
      image: Edunet
    },
    {
      title: "AIESEC",
      role: "Facilitator",
      type: "One day Volunteer",
      duration: "April 2023",
      responsibilities: [
        "Empowering youth through education initiatives.",
        "Facilitating transformative learning experiences.",
        "Empowering young minds for global impact.",
        "Educating and inspiring for positive change."
      ],
      image: AIESEC
    },
  ];

  return (
    <div className="exp-main">
      <div className="my-prof-div">
        <p className="my-profiles">My Experience</p>
      </div>

      <ul className="exp-cards">
        {experiences.map((exp, index) => (
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
