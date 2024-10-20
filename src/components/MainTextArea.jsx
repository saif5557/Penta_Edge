import React from 'react'
import './maintextarea.css'

function MainTextArea(prop) {
  let {title,content} = prop;
  return (
    <div>
      <div className="maintextareawrapper">
        <div className="maintextareacontainer">
        <p className='MTCP1'>{title}</p>
        <p className='MTCP2'>{content}</p>    
        </div>
      </div>
    </div>
  )
}

export default MainTextArea
