import React from 'react'

import Me from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa6";
import './About.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>

            <article className='about_card'>
              <FaUserShield className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
              <FaFolderPlus className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis quibusdam in nisi, voluptates distinctio exercitationem cupiditate minima! Ab provident magni id aperiam architecto sunt minus debitis, incidunt officia saepe?</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About