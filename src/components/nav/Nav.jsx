import "./nav.css"
import {BiHomeCircle} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
// import {GrServices} from 'react-icons/gr'
import {BiMessageAdd} from 'react-icons/bi'


const Nav = () => {
    return (
      <nav>
        <a href="#"><BiHomeCircle/></a>
        <a href="#about"><BiUserCircle/></a>
        <a href="#experience"><MdWorkOutline/></a>
        {/* <a href="#services"><GrServices/></a> */}
        <a href="#contact"><BiMessageAdd/></a>


      </nav>
    )
  };
  
  export default Nav;