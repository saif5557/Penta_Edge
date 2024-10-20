import React from 'react'
import './footerlogolinks.css'

export default function FooterLogolinks({title,linkarr}) {
  
  return (
    <div>
      <div className="footerlogolinkswrapper">
        <div className="footerlogolinkscontainer">
            <div className="footerlogolinkstitle">
                <p>{title}</p>
            </div>
            {
                linkarr.map((e,i)=>{return (
                    
                    <a key={i}> {e}</a>
                    
                )
                })
            }
        </div>
      </div>
    </div>
  )
}
