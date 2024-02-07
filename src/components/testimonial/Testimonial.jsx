import React from "react";


import Av1 from "../../assets/avatar1.jpg";
import Av2 from "../../assets/avatar2.jpg";
import Av3 from "../../assets/avatar3.jpg";
import Av4 from "../../assets/avatar4.jpg";


import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const  data = [
  {
    avatar: Av1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum, mollitia animi excepturi porro, labore optio voluptas doloremque ducimus, ex nisi cumque iste repudiandae deserunt nulla dolore ut architecto saepe.",
  },
  {
    avatar: Av2,
    name: "Shatta Wale",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum, mollitia animi excepturi porro, labore optio voluptas doloremque ducimus, ex nisi cumque iste repudiandae deserunt nulla dolore ut architecto saepe.",
  },
  {
    avatar: Av3,
    name: "Kwame",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum, mollitia animi excepturi porro, labore optio voluptas doloremque ducimus, ex nisi cumque iste repudiandae deserunt nulla dolore ut architecto saepe.",
  },
  {
    avatar: Av4,
    name: "Jane",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum, mollitia animi excepturi porro, labore optio voluptas doloremque ducimus, ex nisi cumque iste repudiandae deserunt nulla dolore ut architecto saepe.",
  },
];


import "./Testimonial.css";
const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index ) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar}  />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
