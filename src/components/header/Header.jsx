import "./header.css"
import CTA from "./CTA";
import dp from '../../assets/dp.png'
import dp1 from '../../assets/dp.png'

import HeaderSocials from "./HeaderSocials";




const Header = () => {
    return (
      <header>
        <div className="container header__container">
          <h5>Hi, I'm</h5>
          <h1>Ravi Hussein-Patel</h1>
          <h5 className="text-light">FullStack Developer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="dp">
            <img src={dp} alt="me"/>
          </div>

          <a href="#contact" className='scroll__bottom'>Scroll To Bottom</a>

        </div>
      </header>
    )
  };
  
  export default Header;