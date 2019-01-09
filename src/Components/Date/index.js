import React from 'react'
import { connect } from 'react-redux'

import moment from 'moment-jalaali';
 import { setFieldValue } from '../../store/action'
import {DatePicker} from "react-advance-jalaali-datepicker";
import '../../styles/style.css'


class Date extends React.Component {
    constructor(props)
    {
        super(props); 
      
          this.state = {
            renderWrappedComponent: false,
            date : '',
            isDisabled:false
          }
    }
 

    componentDidMount() {
      setTimeout(() => {
        
      this.setState({date:this.props.value,renderWrappedComponent: true,isDisabled:this.props.isDisabled})
      }, 500
       );
    }
 
    onChange=(unix, formatted)=>{
      
       console.log('unix',unix) // returns timestamp of the selected value, for example.
       this.props.dispatch(setFieldValue(this.props.accessor,moment(formatted,'jYYYY/jMM/jDD').toISOString(),this.props.storeIndex));
        // console.log('formatted',formatted) // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
        this.setState({date:formatted})
    }
    render() {
      const { renderWrappedComponent } = this.state;
      
           return renderWrappedComponent?  <DatePicker
           containerClass={this.props.isDisabled?'disabled' :''}
                preSelected={this.state.date}
                  onChange={this.onChange}
                 
                   inputClassName="datepicker-input"
                 //  placeholder="Enter new date"
                   dir="auto"
                   format="jYYYY/jMM/jDD"
                 
                   /> : <div>Loading...</div>
         
    }
}
const mapStateToProps =(state,props)=> 
(
 {item:state.item[props.storeIndex],
    field:state.columns[props.storeIndex].find((field)=>field.accessor==props.internalName),
})

export default (Date)