import React from 'react'
import './EduComponent.css'

import Education from '../../../JSON/Education.json'


export default function EducationComponent() {
    return (
        <>
            <div className="timeline">
                {Education.map((edu, index) => (
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
