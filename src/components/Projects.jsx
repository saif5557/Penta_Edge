import React from 'react'
import './projects.css';

import rajConnect from '../img/rajconnect.png'


export default function Projects() {
  return (
    <div>


        <div className="projectsCardWrapper" id='projects'>
        <h2 style={{textAlign:"center",backgroundColor:"#E5B8F4",width:"100%"}}>Featured Projects</h2>

            <div className="projectsCardContainer">
                <div className="projectsCardArea">
                    <div className="projectsCardText">
                    <h4 className='boldtext '>Raj-Connect</h4>
                    <p className='pColor'>ExpressJs|ReactJs|MongoDB</p>
                    </div>
                
                <div className="projectsCardDesc">
                The social media app offers user registration/authentication, profile creation/customization, news feed with posts and updates, social interactions (likes, comments), photo/video sharing, user discovery/search,  and responsive design.
                </div>
                <div className="projectCardButtonos">
                <a href="https://github.com/rajat55/Raj_Connect_FrontEnd_ReactJs">  <p>Client Code</p> </a> 
                <a href="https://github.com/rajat55/Raj_Connect_Backend_MERN">  <p>Server Code</p> </a>  

                <a href="https://rajatplusmern2.netlify.app/"> <p>Live </p> </a> 
                </div>
                <div className='dot'>Live</div>
            </div>

            <div className="projectsCardArea">
                    <div className="projectsCardText">
                    <h4 className='boldtext '>Raj-Shop</h4>
                    <p className='pColor'>ReactJs|Springboot|Hibernate</p>
                    </div>
                
                <div className="projectsCardDesc">
                The ecommerce app includes user registration/authentication, product browsing/searching, shopping cart management, personalized user profiles, order tracking, customer reviews and ratings,  inventory management.
                </div>
                <div className="projectCardButtonos">
                <a href="https://github.com/rajat55/Raj_Shop_FrontEnd_Springboot">  <p>Code</p> </a> 
                <a href="https://rajatplusspring2.netlify.app/"> <p>Live </p> </a> 
                </div>
                <div className='dot'>Live</div>
            </div>

            <div className="projectsCardArea">
                    <div className="projectsCardText">
                    <h4 className='boldtext '>Raj-Bookings</h4>
                    <p className='pColor'>NodeJs|ReactJs|MongoDB</p>
                    </div>
                
                <div className="projectsCardDesc">
                The hotel booking app offers user registration/authentication, search and filtering options, user reviews and ratings,  booking management, customer support, location-based recommendations.

                </div>
                <div className="projectCardButtonos">
                <a href="https://github.com/rajat55/Raj_Bookings_FrontEnd_ReactJs">  <p>Code</p> </a> 
                <a href="https://rajatplusmern4.netlify.app/"> <p>Live </p> </a> 
                </div>
                <div className='dot'>Live</div>
            </div>

            <div className="projectsCardArea">
                    <div className="projectsCardText">
                    <h4 className='boldtext '>Raj-Vlog</h4>
                    <p className='pColor'>ExpressJs|ReactJs|MongoDB</p>
                    </div>
                
                <div className="projectsCardDesc">
                The blogging app includes user registration/authentication, customizable user profiles, blog post creation/management, user can share their blogs .

                </div>
                <div className="projectCardButtonos">
                <a href="https://github.com/rajat55/Raj-Blog_FrontEnd_MERN">  <p>Client Code</p> </a>
                <a href="https://github.com/rajat55/BlogAppBackend">  <p>Server Code</p> </a>  
                <a href="https://rajatplusmern1.netlify.app"> <p>Live </p> </a> 
                </div>
                <div className='dot'>Live</div>
            </div>


            </div>
        </div>
    </div>
  )
}
