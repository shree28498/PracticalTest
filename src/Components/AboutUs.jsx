import React from 'react'
import AboutUsBanner from '../assets/Images/2480559about-banner.png'
import Process1 from '../assets/Images/Asset 1progress1.png'
import Process2 from '../assets/Images/Asset 1 Copyprogress2.png'
import Process3 from '../assets/Images/Asset 1 Copy 2progress3.png'
import '../Stylesheets/AboutUs.css'

const AboutUs = () => {
    return (
        <div id='AboutUs'>
            <div className="AboutUsComp">
                <div className="AboutUsInner">
                    <div className="AboutUsCont">
                        <div className="AboutUsLeft">
                            <h1>About us</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                Lorem ipsum dolor sit amet consetetur sadipscing elitr
                            </p>
                            <button className='button'>About Us</button>
                        </div>
                        <div className="AboutUsRight">
                            <div className="AboutUsRightImg">
                                <img src={AboutUsBanner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OurProcessCont">
                    <h1>Our Process</h1>
                    <div className="OurProcessMainCont">
                        <div className="process">
                            <img src={Process1} alt="" />
                        </div>
                        <div className="process">
                            <img src={Process2} alt="" />
                        </div>
                        <div className="process">
                            <img src={Process3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
