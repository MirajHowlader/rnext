import React from 'react'

import { IoCheckmarkOutline } from "react-icons/io5";
import './services.css'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

        <article className="services">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated consect.</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
          </ul>
        </article>


        <article className="services">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
          </ul>
        </article>


        
        <article className="services">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
            <li><IoCheckmarkOutline className='service_lis_icon'/>
              <p>Lorem ipsum dolor sit ametated  .</p>
            </li>
          </ul>
        </article>



      </div>
    </section>
  )
}

export default Services