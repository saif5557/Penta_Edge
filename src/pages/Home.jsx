import React from 'react'

import Topbar from '../components/Topbar';
import Slider from '../components/Slider';
import CardArea from '../components/CardArea';

import Footer from '../components/Footer';
import TopStrip from '../components/TopStrip';

import MainContainer from '../components/MainContainer';
import ExpertHelp from "../components/ExpertHelp";
import FooterLogolinks from '../components/FooterLogolinks';



export default function Home() {

  let title='INVEST SCIENTIFICALLY BACKED BY BEST SERVICES';
  let content='Every Investments must have a scientific approach. Wealth Redefine delivers the mutual fund services based on scientific research and services by our experts. You can only earn more when you approach your investments logically and scientifically. Wealth Redefine helps you on delivering the best services.';
 
  let title2='MAKE YOUR PORTFOLIO SMART';
  let content2='Wealth Redefine helps to make a customised portfolio for you with its own strategy and services. Different strategies and approach on your portfolio will help your portfolio to become SMART and reach your GOAL much faster than before.';

  let title3 = 'AUTO TRACK YOUR PORTFOLIO';
  let content3= 'Wealth Redefine provides online and app based portfolio management. You can track your portfolio as well as changes in your portfolio if you want. You can auto track your portfolio anytime anywhere.'
 
  return (
    <div>
      <TopStrip/>
      <Topbar/>
      <Slider/>
     
      <MainContainer textProp={{title:title,content:content}} imgTag="https://images.pexels.com/photos/6266693/pexels-photo-6266693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <ExpertHelp/>
      
      <MainContainer dir='R' textProp={{title:title2,content:content2}} imgTag="https://images.pexels.com/photos/7412043/pexels-photo-7412043.jpeg?auto=compress&cs=tinysrgb&w=600"/>
  
     
      <CardArea/>
      <MainContainer  textProp={{title:title3,content:content3}} imgTag="https://img.freepik.com/premium-vector/person-studies-investment-reports-using-laptop-surrounded-by-financial-charts-graphs-analyzing-investment-reports-company-using-flat-illustration_585735-39286.jpg?w=826"/>
      
      {/* <Skills/>
      <Projects/>
      <Profile/> */}
      <Footer/>
      <FooterLogolinks title='text' linkarr={['a','b']}/>
        
    </div>
  )
}
