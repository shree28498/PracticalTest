import React from 'react'
import PersonCard from '../assets/Images/Card 1testimonial1.png'
import '../Stylesheets/Testimonials.css'
import Blogs from '../Child Comp/Blogs'

const Testimonials = () => {
    return (
        <div className='Testimonials' id='Testimonials'>
            <div className="TestimonialsInner">
                <div className="TestimonialsCont">
                    <h1>Testimonials</h1>
                    <div className="TestimonialsFlexBox">
                        <div className="TestimonialsLeft">
                            <img src={PersonCard} alt="" />
                        </div>
                        <div className="TestimonialsRight">
                            <img src={PersonCard} alt="" />
                        </div>
                    </div>
                </div>
                <Blogs />
            </div>
        </div>
    )
}

export default Testimonials