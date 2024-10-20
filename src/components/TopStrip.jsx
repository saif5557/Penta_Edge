import React from 'react'

import "./topstrip.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

function TopStrip() {
  return (
    <div>
      <div className="topstripwraper">
        <div className="topstripcontainer">
            <div className="topstipleft">
                <div className="phonewrapper flex">
                <FontAwesomeIcon className='faIcon' icon={faPhone} />
                <p className='topStripText'>9900228810</p>
                </div>
                <div className="emailwrapper flex">
                <FontAwesomeIcon className='faIcon' icon={faEnvelope} />
                <p className='topStripText' >Test@test.com</p>               
                 </div>
            </div>
            <div className="topstripright flex">
                <div className="topstripbutton">
                    <button>Login</button>
                </div>
                <div className="topstripicon flex">
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ margin: '10px' }} />
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ margin: '10px' }} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopStrip
