import React from 'react'
import "../style/About.css";
import Sidebar from './Sidebar';
import Footer from './Footer';

const About = () => {
  return (

    <>
    <Sidebar />
    <div className="about">You are currently on the About Page</div>
   <Footer />
    </>
  )
}

export default About