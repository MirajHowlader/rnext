import React from 'react'

import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'
import './Portifolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portifolio_container">
        <article className="portfolio_items">
          <div className="fortfolio_item_image">
            <img src={Img1} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
           <div className="portfolio_items_cta">
           <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/popular/web-design" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className="portfolio_items">
          <div className="fortfolio_item_image">
            <img src={Img2} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
           <div className="portfolio_items_cta">
           <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/popular/web-design" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className="portfolio_items">
          <div className="fortfolio_item_image">
            <img src={Img3} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
           <div className="portfolio_items_cta">
           <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/popular/web-design" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className="portfolio_items">
          <div className="fortfolio_item_image">
            <img src={Img4} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
           <div className="portfolio_items_cta">
           <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/popular/web-design" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className="portfolio_items">
          <div className="fortfolio_item_image">
            <img src={Img5} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
           <div className="portfolio_items_cta">
           <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/popular/web-design" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className="portfolio_items">
          <div className="fortfolio_item_image">
            <img src={Img6} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
           <div className="portfolio_items_cta">
           <a href="https://github.com/" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/popular/web-design" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
       
      </div>
    </section>
  )
}

export default Portfolio