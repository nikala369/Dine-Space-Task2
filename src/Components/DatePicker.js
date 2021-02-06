import 'date-fns';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
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
  const [startDate, setStartDate] = React.useState(new Date());


  return (
  <div className="date-time-person-dropdown-flex">
    <form className="date-time-form">
      <img className="calendar-position" src={calendar} alt="/" />
      <img className="downArrow" src={dropdown} alt="/" />

      { pathname === '/reservation/' ?(
              <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
              minDate={new Date()}
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
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
            timeCaption="time"
            dateFormat="d MMM HH:mm"
            value="Date & Time"
            />
            )}
        {/*
          <input
          type="time" 
          disableToolbar
          variant="inline"
          showTimeSelect
          excludeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17)
      ]}
          />
          */}

    </form>
   </div>
  );
}