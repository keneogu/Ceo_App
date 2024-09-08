import HeroSection from '@/components/about/hero-section'
import Manage from '@/components/about/manage'
import Mission from '@/components/about/mission'
import Team from '@/components/about/team'
import React from 'react'

const AboutUs = () => {
  return (
    <div className=''>
      <HeroSection />
      <Mission />
      <Team />
      <Manage />
    </div>
  )
}

export default AboutUs