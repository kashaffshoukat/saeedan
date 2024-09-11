import React from 'react'
import WebDevelopmentServicesTop from '../../components/WebDevelopmentServicesTop'
import WebServicesSlider from '../../components/WebServicesSlider'
import WebServicesCards from '../../components/WebServicesCards'
import Benefits from '../Landing/Benefits'
import Testimonial from '../Landing/Testimonial'
import TechnologyStack from '../Landing/TechnologyStack'
import FAQS from '../Landing/FAQS'
import GetInTouch from '../../components/GetInTouch/GetInTouch'
import MainFeatures from '../../components/MainFeatures'
import OurProcess from '../../components/OurProcess'
import TeamSlider from '../../components/TeamSlider'
const MobileAppServices = () => {
  return (
 <>
 <WebDevelopmentServicesTop/>
 <WebServicesSlider/>
 <div className='px-20 py-12'>
 <WebServicesCards/>
  <Benefits/>
  <Testimonial/>
  <TechnologyStack/>
  <MainFeatures/>
  <OurProcess/>
  {/* <TeamSlider/> */}
  {/* <FAQS/> */}
  {/* <GetInTouch /> */}
 </div>
 </>
  )
}

export default MobileAppServices
