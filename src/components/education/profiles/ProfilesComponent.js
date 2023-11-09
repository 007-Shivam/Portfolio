import React from 'react'
import './ProfilesComponent.css'
import Cloud from '../../../assets/profiles/cloud.png'
import Gfg from '../../../assets/profiles/gfg.png'
import Developer from '../../../assets/profiles/developer.png'
import Leet from '../../../assets/profiles/leet.png'
import Ninja from '../../../assets/profiles/ninja.png'
import Holopin from '../../../assets/profiles/holopin.png'
import Coursera from '../../../assets/profiles/coursera.png'



export default function ProfilesComponent() {
    const coursesData = [
        { image: Cloud, link: 'https://www.cloudskillsboost.google/public_profiles/23454fc6-c786-4c24-bd69-24ffd7f1f623' },
        { image: Coursera, link: 'https://www.coursera.org/user/f45cc77023d02dc4401b398505cb28ae' },
        { image: Gfg, link: 'https://www.google.com/' },
        { image: Leet, link: 'https://www.google.com/' },
        { image: Holopin, link: 'https://www.holopin.io/@007shivam#' },
        { image: Ninja, link: 'https://www.google.com/' },
        { image: Developer, link: 'https://developers.google.com/profile/u/106620164304455197428' },
    ];

    const handleClick = (link) => {
        window.open(link, '_blank');
      };


    return (
        <div className="courses-main">
            <div className="my-prof-div">
                <p className="my-profiles">My Profiles</p>
            </div>
            <div className="edu-courses">
                {coursesData.map((course, index) => (
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
        </div>
    )
}
