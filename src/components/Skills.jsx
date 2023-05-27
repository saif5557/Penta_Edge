import React from 'react'
import './skills.css';
import SkillsCard from './SkillsCard';
import skillData from '../components/data'


export default function Skills() {
  return (
    <div>
        
        <div className="skillsContainer">
        <h2 style={{textAlign:"center",backgroundColor:"#E5B8F4",width:"100%"}}>Skills Logs</h2>
            <div className="skillsWrapper">

                {skillData.map((d)=>
                   (<SkillsCard  data={d}/>)
                )}
                
                
                
                
                
        
            </div>
        </div>
    </div>
  )
}
