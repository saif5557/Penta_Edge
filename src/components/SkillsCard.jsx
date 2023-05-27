import React from 'react'
import './skillscard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'



export default function SkillsCard(p) {
  return (
    <div>
       <div className="fullSkillCard ">
        <div className="SkillsCardWrapper">
            <div className="skillCardImg">
                <img src={p.data.img} alt="" />
            </div>
            <div className="SkillsCardWrapperTextArea SkillsCardText">
                <p className='boldtext'>{p.data.name}</p> 
            </div>
            <div className="SkillsCardWrapperMarks SkillsCardText">
                <p>{p.data.mark}/10</p> 
            </div>
        </div>
        <div className={`descWrapper ${p.data.position === 'l' ? 'left-130' : ''} ${p.data.position === 'f' ? 'left-first':''}`} >
            <p>{p.data.desc} </p>
        </div>
        <div className="arrow">
        <FontAwesomeIcon icon={faCaretUp} style={{color: "#3670d3",}} />

        </div>

        </div>

    </div>
  )
}
