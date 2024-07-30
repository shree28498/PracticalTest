import React from 'react'
import Card1 from '../assets/Logo/001-budgetservice2.png'
import Card2 from '../assets/Logo/002-searchservice1.png'
import Card3 from '../assets/Logo/003-revenueservice3.png'
import Card4 from '../assets/Logo/004-settingservice4.png'
import Card5 from '../assets/Logo/005-taxservice5.png'
import Card6 from '../assets/Logo/006-statisticsservice6.png'
import '../Stylesheets/Services.css'

const Services = () => {
    return (
        <div id='Services'>
            <div className="servicesCont">
                <div className="servicesInner">
                    <h1>Services</h1>
                    <div className="cards">
                        <div className="card">
                            <div className="cardImg">
                                <img src={Card1} alt="" />
                            </div>
                            <div className="CardText">
                                <h4>Audit & Account</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImg">
                                <img src={Card2} alt="" />
                            </div>
                            <div className="CardText">
                                <h4>Budget & Projections</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImg">
                                <img src={Card3} alt="" />
                            </div>
                            <div className="CardText">
                                <h4>Payroll & Bookkeeping</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImg">
                                <img src={Card4} alt="" />
                            </div>
                            <div className="CardText">
                                <h4>Software Training & IT</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImg">
                                <img src={Card5} alt="" />
                            </div>
                            <div className="CardText">
                                <h4>Tax planning & Returns</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImg">
                                <img src={Card6} alt="" />
                            </div>
                            <div className="CardText">
                                <h4>Management Information</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
