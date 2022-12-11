import React, { FC } from 'react'
import './../support/support.css'
import shieldIcon from './../../assets/images/shieldIcon.svg'
import supportIcon from './../../assets/images/supportIcon.svg'
import customizeIcon from './../../assets/images/customizeIcon.svg'

const Support: FC = () => {
    return (
        <div className='container'>
            {/* <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="ThreeColSimple__DecoratorBlob-sc-jpeq8t-6 jzdUZk"><g transform="translate(300,300)"><path d="M125,-160.4C159.9,-146.7,184.6,-107.3,178.8,-70.9C173.1,-34.4,137,-0.8,128.8,47.3C120.7,95.5,140.6,158.2,123.8,198.4C107,238.6,53.5,256.3,5.4,248.9C-42.7,241.5,-85.4,208.9,-112.7,172.1C-140,135.3,-151.8,94.2,-146.3,59.7C-140.8,25.1,-117.9,-2.9,-104,-30.1C-90.1,-57.3,-85,-83.7,-69.1,-103.5C-53.3,-123.4,-26.6,-136.7,9.2,-149.4C45.1,-162,90.1,-174,125,-160.4Z" fill="#FFB4BC"></path></g></svg> */}
            <div className='support'>
                <div className="supportContainer">
                    <div className="supportBlock">
                        <img src={shieldIcon} alt="" />
                        <h4>Secure</h4>
                        <p>We strictly only deal with vendors that provide top notch security.</p>
                        <div className="learnMore">
                        <a href="!#">Learn More </a>
                        <svg viewBox="0 0 31.49 31.49" className="icon"><path fill="currentColor" d="M21.205 5.007c-.429-.444-1.143-.444-1.587 0-.429.429-.429 1.143 0 1.571l8.047 8.047H1.111C.492 14.626 0 15.118 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587.444.444 1.159.444 1.587 0l9.952-9.952c.444-.429.444-1.143 0-1.571l-9.952-9.953z"></path></svg>
                        </div>
                    </div>
                    <div className="supportBlock">
                        <img src={supportIcon} alt="" />
                        <h4>24/7 Support</h4>
                        <p>Lorem ipsum donor amet siti ceali placeholder text</p>
                        <div className="learnMore">
                        <a href="!#">Learn More </a>
                        <svg viewBox="0 0 31.49 31.49" className="icon"><path fill="currentColor" d="M21.205 5.007c-.429-.444-1.143-.444-1.587 0-.429.429-.429 1.143 0 1.571l8.047 8.047H1.111C.492 14.626 0 15.118 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587.444.444 1.159.444 1.587 0l9.952-9.952c.444-.429.444-1.143 0-1.571l-9.952-9.953z"></path></svg>
                        </div>
                    </div>
                    <div className="supportBlock">
                        <img src={customizeIcon} alt="" />
                        <h4>Customizable</h4>
                        <p>Lorem ipsum donor amet siti ceali placeholder text</p>
                        <div className="learnMore">
                        <a href="!#">Learn More</a>
                        <svg viewBox="0 0 31.49 31.49" className="icon"><path fill="currentColor" d="M21.205 5.007c-.429-.444-1.143-.444-1.587 0-.429.429-.429 1.143 0 1.571l8.047 8.047H1.111C.492 14.626 0 15.118 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587.444.444 1.159.444 1.587 0l9.952-9.952c.444-.429.444-1.143 0-1.571l-9.952-9.953z"></path></svg>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Support