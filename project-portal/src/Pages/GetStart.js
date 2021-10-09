import React from 'react'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'

function GetStart() {
    return (
        <div>
            <HeroSection/>
            <Footer
                sx={{
                    mt:60
                }}
            />
        </div>
    )
}

export default GetStart
