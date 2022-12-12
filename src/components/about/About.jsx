import "./about.css"
import dp from '../../assets/dp.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BiGitBranch} from 'react-icons/bi'

const About = () => {
    return (
      <section id="about">
       <h5> A little </h5>
       <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={dp} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <BiGitBranch className="about_icon"/>
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>
          </div>
          <p>
I am an aspiring React Developer with a years experience in creating both Backend and Frontend APIs. I am an Economics Graduate with 2+ years in client facing roles, providing me with base skills every developer needs - the ability to not only explain your code, but ask the right questions and understand how others program. This is something I was able to showcase at the BrightNetwork Bootcamp, with our final group projects shown below. </p>

          <a href="#contact" className="btn btn-primary">Reach Out</a>
        </div>
      </div>
      <br></br>
      <h2>Why I Program</h2>
      </section>
    )
  };
  
  export default About;