import React from 'react'
import ImgContainer from './ImgContainer.jsx'
import MainTextArea from './MainTextArea'

import './maincontainer.css'

function MainContainer(prop) {
  let {imgTag,textProp,dir='N'} = prop;
  let classMain = `maincont ${dir=='N'?'flex':'flexR'}`;
  return (
    <div>
        <div className="maincontainerwrapper">
            <div className={classMain}>
              <div className='MTAImg'>
              <ImgContainer img={imgTag}/>
              </div>
         <div className="MTAtext">
            <MainTextArea title={textProp.title} content={textProp.content
            }/>
            </div>
            </div>
        </div> 
      
    </div>
  )
}

export default MainContainer
