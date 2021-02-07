import 'date-fns';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker, {registerLocale} from 'react-datepicker';
import moment from 'moment';
import enGb from 'date-fns/locale/en-GB';
import {setMinutes, setHours} from "date-fns";
import calendar from './images/calendar.png';
import dropdown from './images/dropdown.png';
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css';


export default function MaterialUIPickers() {
  // Pathname for changing dateformat 
  const [pathname, setPathname] = useState('/');
  const location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const handleColorChange = () => {
      const dateInput = document.getElementById("date-time-form");
      console.log(dateInput)
      dateInput.style.backgroundColor = "#E4E7F3";
  }

  const handleDateClick = () => {
    const dateInput = document.getElementById("date-time-form");
    console.log(dateInput)
    dateInput.style.backgroundColor = "#ACB4D8";
  }

let hour=parseInt (new Date().getHours())
// let min=parseInt (new Date().getMinutes())
  const [startDate, setStartDate] = React.useState(
    setHours(setMinutes(new Date(), 30), hour)
  );

// Box close (Done)
   // const handleClickDoneButton = () => {
    //  const dateBox = document.querySelector("react-datepicker");
     // console.log(dateBox);
      //dateBox.style.display = "none";
  //  } 


  return (
  <div className="date-time-person-dropdown-flex">
    <form onClick={handleDateClick} id="date-time-form" className="date-time-form">
      <img className="calendar-position" src={calendar} alt="/" />
      <img className='downArrow' src={dropdown} alt="/" />

      { pathname === '/reservation/' ?(
        
              <DatePicker
              onCalendarClose={handleColorChange}
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
              minDate={new Date()}
              timeFormat="HH:mm"
              todayButton="Clear all"
              
              shouldCloseOnSelect={false}
              timeIntervals={15}
              formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
              timeCaption="Arrival Time"
              dateFormat="d MMM HH:mm"
              > 
              <input type="button" value="DONE" className="close-button" />
              </DatePicker> 
              
            ) : (
              <DatePicker
              onCalendarClose={handleColorChange}
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            minDate={new Date()}
            timeFormat="HH:mm"
            shouldCloseOnSelect={false}
            todayButton="Clear all"
            timeIntervals={15}
            formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
            timeCaption="Arrival Time"
            dateFormat="d MMM HH:mm"
            value="Date & Time"
            >
              <input type="button" value="DONE" className="close-button" />
            </DatePicker>
            
            )}

    </form>
  </div>
  );
}