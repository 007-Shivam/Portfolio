import React from 'react';
import './CertificateComponent.css';
import Certificate1 from '../../../assets/certificates/Intro to Android Mobile Application Development.png';
import Certificate2 from '../../../assets/certificates/Principles of UXUI Design.png';
import Certificate3 from '../../../assets/certificates/Version Control.png';
import Certificate4 from '../../../assets/certificates/Create UI using Android Studio.png';
import Certificate5 from '../../../assets/certificates/Programming Fundamentals in Kotlin.png';
import Certificate6 from '../../../assets/certificates/Advanced Programming in Kotlin.png';
import Certificate7 from '../../../assets/certificates/Working with Data in Android.png';


export default function CertificateComponent() {
    const certificatesData = [
        {
            image: Certificate1,
            title: 'Meta - Intro to Android Mobile Application Development',
            text: '- Meta Inc, Coursera',
            link: 'https://www.coursera.org/account/accomplishments/certificate/EC2LAUP6DB75',
        },
        {
            image: Certificate2,
            title: 'Meta - Principles of UXUI Design',
            text: '- Meta Inc, Coursera',
            link: 'https://www.coursera.org/account/accomplishments/certificate/9WEHXFX58EQH',
        },
        {
            image: Certificate3,
            title: 'Meta - Version Control',
            text: '- Meta Inc, Coursera',
            link: 'https://www.coursera.org/account/accomplishments/certificate/GYHGF9J2EZSJ',
        },
        {
            image: Certificate4,
            title: 'Meta - Create UI using Android Studio',
            text: '- Meta Inc, Coursera',
            link: 'https://www.coursera.org/account/accomplishments/certificate/SDBADT6XQBT8',
        },
        {
            image: Certificate5,
            title: 'Meta - Programming Fundamentals in Kotlin',
            text: '- Meta Inc, Coursera',
            link: 'https://www.coursera.org/account/accomplishments/certificate/J4AR7LGH7YJB',
        },
        {
            image: Certificate6,
            title: 'Meta - Advanced Programming in Kotlin',
            text: '- Meta Inc, Coursera',
            link: 'https://www.coursera.org/account/accomplishments/certificate/DBDHR8KZCN76',
        },
        {
            image: Certificate7,
            title: 'Meta - Working with Data in Android',
            text: '- Meta Inc, Coursera',
            link: 'https://www.coursera.org/account/accomplishments/certificate/FPX9HY2JWM7V',
        },
    ];

    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className="certificate">
            <div className="my-prof-div">
                <p className="my-profiles">Certificates</p>
            </div>
            <ul className="all-cards">
                {certificatesData.map((certificate, index) => (
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
