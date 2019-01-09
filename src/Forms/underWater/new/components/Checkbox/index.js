import React from 'react';
import {connect} from 'react-redux';
import Checkbox from './widget';
import { setFieldValue } from '../../../../../store/action';


class CheckboxContainer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        checkedItems: new Map(),
        // checkedItems:props.checkBoxTypes.map((itm,index)=>({...itm,isChecked:false}))
      }
  
     
    }
  
      handleChange=(e) =>{
        const item = e.target.name;
      const isChecked = e.target.checked;
    
      this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
      console.log('tttttt',...this.state.checkedItems);
      let map1 = new Map(
        [...this.state.checkedItems] // step 1
        .filter(([k, v]) => v) // step 2
        );
        this.props.dispatch(setFieldValue(this.props.accessor,[...map1.keys()].join(','),this.props.storeIndex));
      
      }
      // this.setState((prvState)=>{checkedItems:prvState.checkedItems.map(itm=>(item==itm.key)?itm:{...itm,isChecked:isChecked})})
    
    
  
    render() {
    
      return (
        <React.Fragment>
          {
            this.props.checkBoxTypes.map(item => (
              <label key={item.key}>
                {item.name}
                <Checkbox name={item.key} checked={this.state.checkedItems.get(item.key)} onChange={this.handleChange} />
              </label>
            ))
          }
        </React.Fragment>
      );
    }
  }
  
  export default connect()(CheckboxContainer);