import "./testimonials.css"
import AVTR1 from "../../assets/AVTR1.jpg"
import AVTR2 from "../../assets/AVTR2.jpg"
import AVTR3 from "../../assets/AVTR3.jpg"
import AVTR4 from "../../assets/AVTR4.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination  } from "swiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data= [
  {
    avatar: AVTR1,
  name:'Anna Henderson',
  review:"lorem ipsum.............."
},
  {
  avatar: AVTR2,
  name:'Yemi Mcewen',
  review:"lorem ipsum.............."
  },
  {
  avatar: AVTR3,
  name:'Zsolt Podoba-Szalai',
  review:"lorem ipsum.............."
  },
  {
  avatar: AVTR4,
  name:'Sadik Tekin ',
  review:"lorem ipsum.............."
  },
]

const Testimonials = () => {
    return (
      <section id="testimonials">
        <h5>Colleague/Collaborator reviews</h5>
       <h2>Testimonials</h2>

       <Swiper className="container testimonials__container"

       modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review},index)=>{
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="collab__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="collab__name">{name}</h5>
                <small className="collab__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
       </Swiper>
      </section>
    )
  };
  
  export default Testimonials;