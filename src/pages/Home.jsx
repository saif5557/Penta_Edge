import React from 'react'

import Topbar from '../components/Topbar';
import Slider from '../components/Slider';
import CardArea from '../components/CardArea';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Topbar/>
      <Slider/>
      <CardArea/>
      <Skills/>
      <Projects/>
      <Profile/>
      <Footer/>
        
    </div>
  )
}
