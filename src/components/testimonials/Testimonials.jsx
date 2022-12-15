import "./testimonials.css"
import AVTR2 from "../../assets/AVTR2.jpg"
import AVTR3 from "../../assets/AVTR3.jpg"
import AVTR4 from "../../assets/AVTR4.jpg"
import AVTR5 from "../../assets/AVTR5.jpg"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination  } from "swiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data= [
//   {
//     avatar: AVTR1,
//   name:'Anna Henderson',
//   review:"lorem ipsum.............."
// },
  {
  avatar: AVTR2,
  name:<a href="https://www.linkedin.com/in/yemi-m-30700141/" target="_blank" >Yemi Mcewen</a>,
  title:'Senior Software Engineer, Tax Systems',
  review:"lorem ipsum.............."
  },
  {
  avatar: AVTR3,
  name:'Zsolt Podoba-Szalai',
  title:'Instructor, Bright Network Technology Academy',
  review:"lorem ipsum.............."
  },
  {
  avatar: AVTR4,
  name:<a href="https://www.linkedin.com/in/stekin/" target="_blank" >Sadik Tekin</a>,
  title:'Azure (DevSecOps) Engineer, HSBC',
  review:"lorem ipsum.............."
  },
{
  avatar: AVTR5,
  name:<a href="https://www.linkedin.com/in/stekin/" target="_blank" >Suraaj Leal</a>,
  title:'Software Engineer, ATOS',
  
  review:"As a Bright Network Academy Mentor and now Engineer at Atos, I've had the pleasure of working with Ravi on several projects. His communication skills are top-notch and is always able to clearly articulate his thoughts and ideas. Additionally, they have a strong ability to learn and ask the right questions, which has helped to ensure the success of our projects. I highly recommend this engineer for any team."
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
          data.map(({avatar, name, title, review},index)=>{
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="collab__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="collab__name">{name}</h5>
                <h6 className="collab_title">{title}</h6>
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