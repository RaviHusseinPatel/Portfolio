import "./about.css"
import dp from '../../assets/dp.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BiGitBranch} from 'react-icons/bi'
import layer1 from '../../assets/layer1.svg'

const About = () => {
    return (
      <section id="about" className="space layer1">
          <img src={layer1}/>
         
        <h5> A little </h5>
        <h2>About Me & Why I program</h2>

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
            As an aspiring React developer with a year of experience building backend and frontend APIs, I have strong communication skills and a deep understanding of how to work with others. My experience in client-facing roles and as a tutor has given me the ability to ask the right questions and learn from others, which is a crucial skill for any developer.
            I was able to demonstrate these skills during the BrightNetwork Technology Academy, where our group's final projects received recognition for being both creative and efficient. <br/> <br/>
                </p>
                <p className="why">
                Programming is important because it allows us to harness the power of engineering to improve the lives of people on a daily basis. 
                This is what motivates me to code. The ability to be vreative and collaborate with like-minded individuals from around the world to solve complex problems using technology however, is what excites me about this field.
                </p>
                
            <a href="#contact" className="btn btn-primary" id="reachout">Reach Out</a>
          </div>
        </div>
        <img src={layer1}/>
      </section>
      
    )
  };
  
  export default About;