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

  
  // The first commit of Material-UI
  const [click, setClick] = React.useState(false);

  const [startDate, setStartDate] = React.useState(
    setHours(setMinutes(new Date(), 30), 13)
  );

// Box close (Done)
  const personBoxDone = () => {
    setClick(!click);
  }


  return (
  <div className="date-time-person-dropdown-flex">
    <form className={ 'input[type="text"]:focus' ?"date-time-form":"date-time-form-active"}>
      <img className="calendar-position" src={calendar} alt="/" />
      <img className='downArrow' src={dropdown} alt="/" />

      { pathname === '/reservation/' ?(
        
              <DatePicker
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
              <button onClick={personBoxDone}className="close-button">DONE</button>
              </DatePicker> 
              
            ) : (
              <DatePicker
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
              <button onClick={personBoxDone}className="close-button">DONE</button>
            </DatePicker>
            
            )}

    </form>
  </div>
  );
}