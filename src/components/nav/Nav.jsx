import "./nav.css"
import {BiHomeCircle} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {BiMessageAdd} from 'react-icons/bi'
import { useState } from "react"
import { Link } from "react-scroll";


const Nav = () => {
   const [activeIcon, setActiveIcon] = useState('#')
    return (
      <nav>
        {/* <a href="#" onClick={()=> setActiveIcon('#')} className={activeIcon === '#'? 'active' : ''}><BiHomeCircle/></a> */}
        {/* <a href="#about" onClick={()=> setActiveIcon('#about')} className={activeIcon === '#about' ? 'active' : ''}><BiUserCircle/></a>
        <a href="#experience" onClick={()=> setActiveIcon('#experience')} className={activeIcon === '#experience'? 'active' : ''}><GiSkills/></a> */}
        {/* <a href="#contact" onClick={()=> setActiveIcon('#contact')} className={activeIcon === '#contact'? 'active' : ''}><BiMessageAdd/></a> */}
          <li>
              <Link activeClass="active" smooth spy to="header__container">
              <BiHomeCircle/>
              </Link>
          </li>
          <li>
              <Link activeClass="active" smooth spy to="about">
              <BiUserCircle/>
              </Link>
          </li>
          <li>
              <Link activeClass="active" smooth spy to="experience">
              <GiSkills/>
              </Link>
          </li>
          <li>
              <Link activeClass="active" smooth spy to="contact">
              <BiMessageAdd/>
              </Link>
           </li>
      </nav>
    )
  };
  
  export default Nav;