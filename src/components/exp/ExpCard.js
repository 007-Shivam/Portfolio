import React from 'react'
import './ExpCard.css'

import ACM from '../../assets/projects/acm.jpg'
import AIESEC from '../../assets/exp/aiesec.png'
import Edunet from '../../assets/exp/edunet.png'



export default function ExpCard() {
  return (
    <div className="exp-main">
      <div className="my-prof-div">
        <p className="my-profiles">My Experience</p>
      </div>

      <ul className="exp-cards">
        <li className="exp-cards_item">
          <div className="exp-card">
            <div className="exp-card_image"><img src={ACM} alt="mixed vegetable salad in a mason jar. " /></div>
            <div className="exp-card_content">
              <h2 className="exp-card_title">Association for Computing Machinery BVPDET-NM</h2>
              <h2 className="exp-card_title">Web Master<br />Full Time<br />Sept 2023 - Present</h2>
              <div className="exp-card_text">
                <p className="exp-des">
                  &bull; Website management and content updates.<br />
                  &bull; User experience and design enhancements.<br />
                  &bull; Collaboration with ACM teams.<br />
                  &bull; Implementing new web technologies strategically.<br />
                  &bull; Collaborated with a team of 5 members to implement innovative features on the website.<br />
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="exp-cards_item">
          <div className="exp-card">
            <div className="exp-card_image"><img src={Edunet} alt="mixed vegetable salad in a mason jar. " /></div>
            <div className="exp-card_content">
              <h2 className="exp-card_title">Edunet Foundation</h2>
              <h2 className="exp-card_title">Artificial Intelligence Intern<br />Internship<br />Jun 2023 - Jul 2023</h2>
              <div className="exp-card_text">
              <p className="exp-des">
                  &bull; Completed assigned tasks and milestone.<br />
                  &bull; Delivering a project presentation.<br />
                  &bull; Solving real-world challenges in AI.<br />
                  &bull; Valuable experience enhancing skills in AI and professional growth.<br />
                  &bull; Earned certifications from IBM and Edunet Foundation.<br />
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="exp-cards_item">
          <div className="exp-card">
            <div className="exp-card_image"><img src={AIESEC} alt="mixed vegetable salad in a mason jar. " /></div>
            <div className="exp-card_content">
              <h2 className="exp-card_title">AIESEC</h2>
              <h2 className="exp-card_title">Facilitator<br />One day Volunteer<br />April 2023</h2>
              <div className="exp-card_text">
              <p className="exp-des">
                  &bull; Empowering youth through education initiatives.<br />
                  &bull; Facilitating transformative learning experiences.<br />
                  &bull; Empowering young minds for global impact.<br />
                  &bull; Educating and inspiring for positive change.<br />
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
