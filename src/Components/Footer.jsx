import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Stylesheets/Footer.css'
import BitmapLogo from '../assets/Logo/Bitmaplogo.png'

const Footer = () => {

    // var axios = require('axios');
    const [FooterData, setFooterData] = useState({})


    useEffect(() => {
        const config = {
            method: 'get',
            url: 'http://3.7.81.243:3253/api/settings/fetch-frontend-details',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                // const Data1 = JSON.stringify(response.data)
                setFooterData(response.data.data);
                // console.log('Footer Data: ', response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    // const FTData = FooterData
    // console.log('Footer Data: ', FooterData);

    // const {address, id, contact_mail} = FooterData.data

    return (
        <div className='FooterComp' key={FooterData.id}>
            <div className="FooterInner">
                <div className="FooterLeft">
                    <div className="ft-left-cont">
                        <h4>Tagline will go here. Lorem ipsum d oler sit amet…</h4>
                        <span id='ft-email'>{FooterData.inquiry_mail}</span>
                    </div>
                </div>
                <div className="verticalLine"></div>
                <div className="FooterRight">
                    <div className="FTAddress">
                        <h5>Address</h5>
                        <p>
                            {FooterData.address}
                        </p>
                    </div>
                    <div className="FTContacts">
                        <h5>Contacts</h5>
                        <p>
                            {FooterData.contact_mail} <br />
                            {FooterData.contact_no}
                        </p>
                    </div>
                </div>
            </div>
            <div className="FooterBottom">
                <div className="Logo">
                    <img src={BitmapLogo} alt="" />
                </div>
                <div className="FooterLink">
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className="Copyrights">
                    <span>￼© 2022. All rights reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
