import React from 'react'
import './EduComponent.css'

import BVP from '../../../assets/edu/bvp.png'
import NMF from '../../../assets/edu/nmf.png'
import OPS from '../../../assets/edu/ops.png'


export default function EducationComponent() {
    const educationData = [
        {
            institution: "Bharati Vidyapeeth Deemed University Department of Engineering & Technology, Navi Mumbai",
            duration: "2021 - Present",
            description: "I am currently pursuing my B.Tech, and my current CGPA is 9.92.",
            image: BVP, 
        },
        {
            institution: "Nirmala Memorial Foundation College of Commerce & Science, Mumbai",
            duration: "2019 - 2021",
            description: "I have successfully completed my intermediate education from the HSC board with a remarkable score of 94.33%.",
            image: NMF, 
        },
        {
            institution: "Oxford Public School",
            duration: "2006 - 2019",
            description: "I have completed my matriculation from the SSC board with a score of 86.40%.",
            image: OPS, 
        },
        
    ];
    return (
        <>
            <div className="timeline">
                {educationData.map((edu, index) => (
                    <div key={index} className={`edu-container ${index % 2 === 0 ? 'left-container' : 'right-container'}`}>
                        <img src={edu.image} alt="" />
                        <div className="text-box">
                            <h2>{edu.institution}</h2>
                            <small>{edu.duration}</small>
                            <p className='edu-des'>{edu.description}</p>
                            <span className={index % 2 === 0 ? 'left-container-arrow' : 'right-container-arrow'}></span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
