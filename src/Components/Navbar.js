import React, {useState, useEffect} from 'react';
import 'date-fns';
import { NavLink } from 'react-router-dom';
import './fonts/einafont.ttf';
import "./Navbar.css";
import { useLocation } from 'react-router-dom';
import dineoutgrey from './images/dineoutgrey.png';
import dineoutwhite from './images/dineoutwhite.png';
import reservation from './images/reservation.png';
import reservationWhite from './images/reservationWhite.png';
import pickup from './images/pickup.png';
import pickupWhite from './images/pickupWhite.png';
import personIcon from './images/personIcon.png';
import dropdown from './images/dropdown.png';
import vector from './images/vector.png';
import minusButtonInactive from './images/minusButtonInactive.png';
import plusButton from './images/plusButton.png';
import minusButtonActive from './images/minusButtonActive.png';
import MaterialUIPickers from './DatePicker'

  
function Navbar() {
  // Counting for plus minus buttons
  const [count, setCount] = React.useState(1);
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  const countChange = () => {
    setCount(5);
  }

  // Link image changed when === Pathname
  const [pathname, setPathname] = useState('/');
  const location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const personBoxDone = () => {
    setClick(!click);
  }
  //const personBoxClose = () => {
 // }

  return(
    <>
    
  <div className="section-menu" >
      <nav className="navbar-menu">
        <ul className="ul-control">
            <li>
              <NavLink exact to="/Dine-Space-Task2/"
            activeClassName='active' className="dine-out-button ">
              { pathname === '/Dine-Space-Task2/' ?(
              <img className="img-space" src={dineoutwhite} alt="/"/>
            ) : (
              <img className="img-space" src={dineoutgrey} alt="/"/>
            )}Dine Out</NavLink>
            </li>
            <li className="nav-link2"><NavLink exact to="/reservation/" onClick={countChange} className='reservation-button'>
              { pathname === '/reservation/' ?(
              <img className="img-space" src={reservationWhite} alt="/"/>
            ) : (
              <img className="img-space" src={reservation} alt="/"/>
            )}Reservation</NavLink></li>
            <li><NavLink to="/Pick-up/" className="pick-up-button ">
              { pathname === '/Pick-up/' ?(
              <img className="img-space" src={pickupWhite} alt="/"/>
            ) : (
              <img className="img-space" src={pickup} alt="/"/>
            )}Pick Up</NavLink></li>
            <div className="underline-grey"></div>
        </ul>
      </nav>
      
      <MaterialUIPickers />
      
          <div className={click ? "active-box-person": "person-box"}>
            <img className="person-icon" src={personIcon} alt="/" />  
              <p className="person-paragrap">{count} Person</p>
            <button onClick={handleClick} type="button" className={"button-dropdown"}>
            <img className="dropdown-button2" src={dropdown} alt="/" />
            
            </button>
            {click ? (
        <div className="drop-down-menu-active">
            <div className="first-row-drop-down">
              <div className="first-half">
                  <img className="img-space-person" src={vector}/>
                  <p>Group size</p>
              </div>
              <div className="second-half">
                {count <= 1 ? (<button className="button-dropdown" disabled>
                  { pathname === '/reservation' ?(<img src={minusButtonActive}/>) : (
                    <img src={count > 1 ? minusButtonActive :minusButtonInactive}/>)}
                </button>) : (
                  <button onClick={() => setCount(prevCount => prevCount - 1)}className="button-dropdown">
                    { pathname === '/reservation' ?(<img src={minusButtonActive}/>) : (
                    <img src={count > 1 ? minusButtonActive :minusButtonInactive}/>)}
                    </button>)}
                    <p className="eina-font person-font">{count} Person</p>
                  <button onClick={() => setCount(prevCount => prevCount + 1)} className="button-dropdown"><img src={plusButton}/></button>
                  <div className="column-divide-person-box"></div>
              </div>
            </div>
            <div className="second-row-drop-down">
              <p onClick={() => setCount(1)} className="eina-font positioning-clear-paragrap">Clear all</p>
              <button onClick={personBoxDone} className="button-done">DONE</button>
            </div>
        </div>
            ) : (
              <div className="dropdown-inactive"></div>
            )}
          </div>

      </div>
    </>
  )
};











export default Navbar;