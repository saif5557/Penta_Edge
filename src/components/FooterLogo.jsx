import React from 'react'
import './footerlogo.css'
import footerlogoimg from '../img/PentaLogo.jpg'

export default function FooterLogo() {
  return (
    <div>
      <div className="footerlogowrapper">
        <div className="footerlogocontainer">
            <div className="footerlogoimg">
                <img src={footerlogoimg} alt="" />
            </div>
            <div className="footerlogotext">
                <p>Penta Edge</p>
            </div>
            <div className="footerlogodiscription">
                <p>Wealth redefine is a specialized in various wealth managements. Our consultants have expertise in fund management, fund selection</p>
            </div>
        </div>
      </div>
    </div>
  )
}
