import { React, useEffect } from 'react'
import './CertificateComponent.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

import Certificate from '../../../JSON/Certificates.json'


export default function CertificateComponent() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const handleClick = (link) => {
        window.open(link, '_blank', 'noreferrer');
    };

    return (
        <div className="certificate" data-aos="fade-up">
            <div className="my-prof-div">
                <p className="my-profiles">Certificates</p>
            </div>
            <ul className="all-cards">
                {Certificate.map((certificate, index) => (
                    <li key={index} className="main_cards_item">
                        <div className="the-card" onClick={() => handleClick(certificate.link)} style={{ cursor: 'pointer' }}>
                            <div className="card_image">
                                <img className="certificate-img" src={certificate.image} alt={`Certificate ${index + 1}`} />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">{certificate.title}</h2>
                                <p className="card_text">{certificate.text}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
