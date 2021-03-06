import React from 'react';
import {connect} from 'react-redux';
 import { setFieldValue } from '../../store/action';



class TextArea extends React.Component {

    constructor(props) {

        super(props);
    }
    handleChange=(e)=>{
       this.props.dispatch(setFieldValue(this.props.accessor,e.target.value))
       this.setState({value:e.target.value});
    }
    // if not arrow function you should bind handleChange in constructor => this.handleChange =  this.handleChange.bind(this)
    
    render() { 
        let value=this.state.value|| null;
        return this.props.render({value:value,internalName:this.props.internalName,onChange:this.handleChange})
        }
}
const mapStateToProps=(state,props)=>({item:state.item,
    field:state.columns[props.storeIndex].find((field)=>field.accessor==props.internalName)})
export default (TextArea)