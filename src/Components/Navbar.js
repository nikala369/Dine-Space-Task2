import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import dineoutgrey from './images/dineoutgrey.png'
import dineoutwhite from './images/dineoutwhite.png'
import reservation from './images/reservation.png'
import reservationWhite from './images/reservationWhite.png';
import pickup from './images/pickup.png'


function Navbar() {
 const [click, setClick] = useState('active');


const handleClick1 = () => {
   setClick(!click);
  }
 const handleClick2 = () => {
  
  }
 

  return(
    <>
    <div className="section-menu">
     <div className="navbar-container container">
       <nav className="navbar-menu">
        <ul className="ul-control">
         <li><NavLink exact to="/Dine-Space-Task2" activeClassName="active" className="dine-out-button "><img className="img-space" src={click ? dineoutwhite : dineoutgrey} />Dine Out</NavLink></li>
         <li className="nav-link2"><NavLink exact to="/reservation" activeClassName="active" className='reservation-button'><img className="img-space"  src={click ? reservationWhite : reservation} />Reservation</NavLink></li>
         <li><NavLink to="/Pick-up" onClick={handleClick1} className="pick-up-button "><img className="img-space" src={pickup} />Pick Up</NavLink></li>
         <div className="underline-grey"></div>
        </ul>
       </nav>
     </div>
     </div>
    </>
  )
}

export default Navbar;