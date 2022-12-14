import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
      <section id="experience">
       <h5>Skills</h5>
       <h2>Languages & Frameworks</h2>

        <div className="container experience__container">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                <h4>JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                <h4>React</h4>
              <small className="text-light">Advanced</small>
              </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                <h4>HTML</h4>
              <small className="text-light">Advanced</small>
              </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                <h4>Gatsby</h4>
              <small className="text-light">Basic</small>
              </div>
              </article>


            
            </div>

          </div>

          <div className="experience_backend">
            <h3>Backend Development</h3>
              <div className="experience__content">
                <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Java</h4>
              <small className="text-light">Intermediate</small>
              </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                <h4>SpringBoot</h4>
              <small className="text-light">Basic</small>
              </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                <h4>PostgreSQL</h4>
              <small className="text-light">Intermediate</small>
              </div>
             </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                <h4>NodeJS</h4>
              <small className="text-light">Intermediate</small>
              </div>
               </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div> 
                <h4>Git</h4>
              <small className="text-light">Advanced</small>
              </div>
              </article>


            
            </div>
          </div>
        </div>
      </section>
    )
  };
  
  export default Experience;