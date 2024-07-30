import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Services from './Components/Services'
import AboutUs from './Components/AboutUs'
import Testimonials from './Components/Testimonials'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

function App() {
    //   const [count, setCount] = useState(0)

    return (
        <>
            <div className='App'>
                <div className="pageCenter">
                    <div className="pageWrapper">
                        <Home />
                        <Services />
                        <AboutUs />
                        <Testimonials />
                        <ContactForm />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
