import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { useLocation } from 'react-router-dom';
import dineoutgrey from './images/dineoutgrey.png'
import dineoutwhite from './images/dineoutwhite.png'
import reservation from './images/reservation.png'
import reservationWhite from './images/reservationWhite.png';
import pickup from './images/pickup.png'


function Navbar() {
  const [pathname, setPathname] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return(
    <>
  <div className="section-menu">
    <div className="navbar-container container">
      <nav className="navbar-menu">
        <ul className="ul-control">
            <li>
              <NavLink exact to="/Dine-Space-Task2"
            
            activeClassName='active' className="dine-out-button ">
              { pathname === '/Dine-Space-Task2' ?(
              <img className="img-space" src={dineoutwhite}/>
            ) : (
              <img className="img-space" src={dineoutgrey}/>
            )}Dine Out</NavLink>
            </li>
            <li className="nav-link2"><NavLink exact to="/reservation" className='reservation-button'>{ pathname === '/reservation' ?(
              <img className="img-space" src={reservationWhite}/>
            ) : (
              <img className="img-space" src={reservation}/>
            )}Reservation</NavLink></li>
            <li><NavLink to="/Pick-up" className="pick-up-button "><img className="img-space" src={pickup} />Pick Up</NavLink></li>
            <div className="underline-grey"></div>
        </ul>
      </nav>
      <div className="date-time-person-dropdown-flex">
          <form className='date-time-form' noValidate>
            <TextField
              id="datetime-local"
              label="Date&Time"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>

      </div>
    </div>
  </div>
    </>
  )
};

export default Navbar;