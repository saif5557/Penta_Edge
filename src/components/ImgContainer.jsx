import React from 'react'

import './imgcontainer.css'

export default function ImgContainer(prop) {
  let {img} = prop;
  return (
    <div>

        <div className="imgcontainerWrapper">
            <div className="imgconatainerContainer">
             <img src={img} alt="" className='Imgset' />
            </div>
        </div>
      
    </div>
  )
}
