import React from 'react'
import './ProfilesComponent.css'
import Zoom from 'react-reveal/Zoom';

import CodingProfiles from '../../../JSON/CodingProfiles.json'

export default function ProfilesComponent() {

    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className="courses-main">
            <div className="my-prof-div">
                <p className="my-profiles">My Profiles</p>
            </div>
            <Zoom top>
                <div className="edu-courses">
                    {CodingProfiles.map((course, index) => (
                        <img
                            key={index}
                            className="course-name"
                            src={course.image}
                            alt={`Course ${index + 1}`}
                            onClick={() => handleClick(course.link)}
                            style={{ cursor: 'pointer', margin: '10px' }}
                        />
                    ))}
                </div>
            </Zoom>
        </div>
    )
}
