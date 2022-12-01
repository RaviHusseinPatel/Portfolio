import "./portfolio.css"
import WorldPin from '../../assets/WorldPin.jpg'
import tictactoe from  '../../assets/tictactoe.jpg'
import {VscSourceControl} from 'react-icons/vsc'

const data =[
{
id: 1,
image: WorldPin,
title:'WorldPin-React API',
github: "https://github.com/bendesousa/bnta_capstone_project",
demo:  "www.google.com",
},
{
id: 2,
image: tictactoe,
title: 'TicTacToe- SpringBoot API',
github: "https://github.com/RaviHusseinPatel/TicTacToe-2player-", 
demo:"www.google.com",
},
{
id: 3,
image:WorldPin,
title: "insert project here",
github: "https://github.com/bendesousa/bnta_capstone_project",
demo:"www.google.com",
}
]


const Portfolio = () => {
    return (
      <section id="portfolio">
       <h5> My Recent Work </h5>
       <h2>Portfolio</h2>

       <div className="container portfolio__container">
        {
        data.map(({id, image, title, github, demo}) => {
          return(
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn"><VscSourceControl/>Source Code</a>
              <a href={demo} className="btn btn-primary" target="_blank">Code Walkthrough</a>
            </div>
        </article>
    )
})
}

       </div>
      </section>
    ) }
  
  export default Portfolio;