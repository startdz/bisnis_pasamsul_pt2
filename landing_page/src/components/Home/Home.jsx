import React from 'react'
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import Section from './Content/Section'

const Home = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Content/>
            <Section/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home