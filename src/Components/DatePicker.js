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


  return (
  <div className="date-time-person-dropdown-flex">
    <form  className="date-time-form">
      <img className="calendar-position" src={calendar} alt="/" />
      <img className='downArrow' src={dropdown} alt="/" />

      { pathname === '/reservation/' ?(
              <DatePicker
              className="date-time-control"
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
              minDate={new Date()}
              timeFormat="HH:mm"
              
              timeIntervals={15}
              formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
              timeCaption="Arrival Time"
              dateFormat="d MMM HH:mm"
              />
            ) : (
              <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            minDate={new Date()}
            timeFormat="HH:mm"
            timeIntervals={15}
            formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
            timeCaption="Arrival Time"
            dateFormat="d MMM HH:mm"
            value="Date & Time"
            />
            
            )}

    </form>
  </div>
  );
}