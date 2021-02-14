import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data.js'

function Services() {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Services
