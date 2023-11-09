import React from 'react'
import Footer from '../components/footer/FooterComponent'
import EducationComponent from '../components/education/edu/EduComponent'
import ProfilesComponent from '../components/education/profiles/ProfilesComponent'
import CertificateComponent from '../components/education/certificates/CertificateComponent'

export default function Education() {
  return (
    <div>
      <ProfilesComponent />
      <EducationComponent />
      <CertificateComponent />
      <Footer/>
    </div>
    
  )
}
