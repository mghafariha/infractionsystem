import React from 'react'
import moment from 'moment-jalaali'
//import moment from 'moment';
//import {DatePicker} from "react-advance-jalaali-datepicker";
// import { Calendar, DatePicker } from 'react-persian-datepicker';
 //import 'react-datepicker-persian/dist/react-datepicker-persian.min.css';
 //import {Datepicker} from 'react-jalaali-datepicker';

const DateWid=({internalName,value,onChange,open})=>(
              <div className="datePicker">
                {/* <DatePicker
                    placeholder="انتخاب تاریخ"
                    format="jYYYY/jMM/jDD"
                    onChange={onChange}
                    id="datePicker"
                    preSelect={value}
                    />  */}

                     {/* <DatePicker
                    date={value}
                    
                    onChange={onChange}
                    className="datepicker-wrapper"
                    inputClassName="datepicker-input"
                    placeholder="Enter new date"
                    dir="auto"
                    open={open}
                    /> */}
                </div>
)

export default DateWid

const styles = {
    calendarContainer: "calendarContainer",
    dayPickerContainer: "dayPickerContainer",
    monthsList: "monthsList",
    daysOfWeek: "daysOfWeek",
    dayWrapper: "dayWrapper",
    selected: "selected",
    heading: "heading",
    next: "next",
    prev: "prev",
    title: "title",
    }
{/* <div><DatePicker onChange={onChange}  calendarStyles={styles} value={value} inputFormat="jYYYY/jM/jD" /></div> */}