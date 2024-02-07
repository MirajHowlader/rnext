import React from 'react'


import './Contact.css'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qlmpvlv', 'template_pmtmi2l', form.current, 'ciEEo_MvhWphBRuLo')
     
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail  className='contact_option_icon'/>
             <h4>Email</h4>
             <h5>mirajhowlader9999@gmail.com</h5>
             <a href="mailto:mirajhowlader9999@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsMessenger  className='contact_option_icon'/>
             <h4>Messenger</h4>
             <h5>mirajhowlader9999@gmail.com</h5>
             <a href="https://www.facebook.com/miraj.howlader.7127" target='__blank'>Send a Message</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp  className='contact_option_icon'/>
             <h4>Whats' Up</h4>
             <h5>+88 01731458068</h5>
             <a href="https://www.instagram.com/mirajhowlader4/" target='__blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name'required />
          <input type="email" name='email' placeholder='Your full email'required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact