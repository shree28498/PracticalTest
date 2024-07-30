import React from 'react'
import '../Stylesheets/Home.css'
import Asset from '../assets/Images/Asset 1@4xbanner.png'
import Header from '../Child Comp/Header'

const Home = () => {
    return (
        <div className='HomeComp'>
            <div className="HomeCompBG"></div>
            <Header />
            <div className="HomeMain">
                <div className="HomeLeft">
                    <div className="HomeLeftContent">
                        <h1>How much could you save?</h1>
                        <p>
                            Answer the questions below to get a fixed price quotation for us
                            to take your accountancy hassles away from you.
                        </p>
                    </div>
                </div>
                <div className="banner">
                    <img src={Asset} alt="Banner" />
                </div>
            </div>
            <div className="HomeReactWr">
                <div className="HomeRectangle">
                    <h2>Is your turnover expected to be more than £85k?</h2>
                    <span>Yes</span><span>No</span>
                </div>
                <span>Takes less than 30 seconds</span>
            </div>
        </div>
    )
}

export default Home
