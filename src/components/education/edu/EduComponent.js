import React from 'react'
import './EduComponent.css'

import BVP from '../../../assets/edu/bvp.png'
import NMF from '../../../assets/edu/nmf.png'
import OPS from '../../../assets/edu/ops.png'


export default function EducationComponent() {
    return (
        <>
            <div className="timeline">
                <div className="edu-container left-container">
                    <img src={BVP} alt="" />
                    <div className="text-box">
                        <h2>Bharati Vidyapeeth Deemed University Department of Engineering & Technology, Navi Mumbai</h2>
                        <small>2021 - Present</small>
                        <p className='edu-des'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="edu-container right-container">
                    <img src={NMF} alt="" />
                    <div className="text-box">
                        <h2>Nirmala Memorial Foundation College of Commerce & Science, Mumbai</h2>
                        <small>2019 - 2021</small>
                        <p className='edu-des'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        <span className="right-container-arrow"></span>

                    </div>
                </div>

                <div className="edu-container left-container">
                    <img src={OPS} alt="" />
                    <div className="text-box">
                        <h2>Oxford Public School</h2>
                        <small>2006 - 2019</small>
                        <p className='edu-des'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
            </div>
        </>

    );
}
