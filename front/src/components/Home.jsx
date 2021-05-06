import React from 'react'

import Banner from './Banner'
import Card from './Card'
import Navbar from './Navbar'
import Buscador from './Buscador'
import Footer from './Footer'


export default () => {
    return (
        <div>
            <Navbar />
            <Buscador />
            <Banner />
            <Card />
            <Footer />
        </div>
    )
}

