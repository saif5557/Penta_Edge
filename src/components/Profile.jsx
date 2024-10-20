import React from 'react'
import './profile.css'


import git from '../img/git3.png';
import gfg from '../img/gfgf.jfif';
import leetcode from '../img/LeetCode.png';
import codechef from '../img/codechef.jfif';
import linked from '../img/linked.png';

export default function Profile() {
  return (
    <div>
        <div className="ProfileWrapper" id='about'>
            <div className="ProfileContainer">
                <div className="profileImgArea">
                    <img src={''} alt="" />

                </div>
                <div className="profileDescriptionArea">
                    <div className="profileName textCenter">
                        Rajat Raj Gupta

                    </div>
                    <div className="profileDesc textCenter">
                        B-Tech ECE  (2019-2023)
                        <p>Galgotais College of Engineering and Technology</p>

                    </div>
                    <div className="profileLinks">

                        <a href="https://www.linkedin.com/in/rajat-raj-gupta-117a4b169/"><img className='iconLogo' src={linked} alt="" /></a>
                        <a href="https://auth.geeksforgeeks.org/user/rajatrajgupta19/practice"><img className='iconLogo' src={gfg} alt="" /></a>
                        <a href="https://github.com/rajat55"><img className='iconLogo' src={git} alt="" /></a>
                        <a href="https://leetcode.com/rajatonleetcode/"><img className='iconLogo' src={leetcode} alt="" /></a>
                        <a href="https://www.codechef.com/users/rajatoncodchef"><img className='iconLogo' src={codechef} alt="" /></a>

                    </div>
                    <div className="profileArticle">
                    In my self-learning journey, I have focused on practical skills, particularly in coding and development. With a proactive approach, I have taken the initiative to acquire these skills on my own. Regularly dedicating time to coding and development, I have worked on various projects to enhance my abilities. <br/>I have honed my problem-solving abilities through coding exercises and challenges. With discipline and motivation, I have established a strong foundation in the fundamentals and continue to grow my skills in programming.
                    </div>

                </div>
            </div>
        </div>



    </div>
  )
}
