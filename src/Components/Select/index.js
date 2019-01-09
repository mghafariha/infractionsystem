import React from 'react';
import {connect} from 'react-redux';
import {setFieldValue} from '../../store/action';
// import {validArray} from '../Validation'


class Select extends React.Component{

    constructor(props)
    {
        super(props);
       this.state={ selectedOption: null, multiValue: [],isDisabled:false}
    }
    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.value !== this.props.value &&  nextProps.value) {
    //       this.setState({selectedOption: nextProps.value.split(',').map(itm=>({value:itm, label:itm}))});
    //     }
    //     if(nextProps.isDisabled !== this.props.isDisabled &&  nextProps.isDisabled) {
    //       this.setState({isDisabled:nextProps.isDisabled});
    //     }
    //   }
    handleChange=(selectedOption)=>{
        this.setState({ selectedOption });
       var options = selectedOption;
        if(Array.isArray(options))
       {
            var value = "";
          
         value=  options.reduce((acc, itm)=> {
            return acc + itm.value + ",";
          }, '');
            value.slice(0, -1);
            console.log('reduce',value)
            this.props.dispatch(setFieldValue(this.props.accessor, value.slice(0, -1),this.props.storeIndex))
            
         }
        else {
             this.props.dispatch(setFieldValue(this.props.accessor,selectedOption.value,this.props.storeIndex))
             if(selectedOption.value=='ندارد')
                {
                    // console.log('validArray',validArray);
                    // let valArray=  validArray[this.props.storeIndex].filter(v=>v.destField==this.props.field.accessor);
                    // (valArray).forEach(element => {
                    //   this.props.dispatch(disabledColumn(this.props.storeIndex,valArray?true:false,element.srcField))
                    // });
                
                }
                else 
                {
                  // console.log('validArray',validArray);
                  //   let valArray=  validArray[this.props.storeIndex].filter(v=>v.destField==this.props.field.accessor);
                  //   (valArray).forEach(element => {
                  //     this.props.dispatch(disabledColumn(this.props.storeIndex,false,element.srcField))
                  //   });
                }
              
         }
         console.log('field disable',this.props.fields)
    }
    componentDidMount(){
            console.log('selected ',this.props.value);
            this.props.dispatch(setFieldValue(this.props.accessor,this.props.value,this.props.storeIndex));
             this.setState({selectedOption:this.props.value?this.props.value.split(',').map(itm=>({value:itm, label:itm})):''})
            
    }
    render(){
        const { selectedOption } = this.state;
      //  let value=this.props.item[this.props.internalName] ;
           return this.props.render({value: selectedOption,internalName:this.props.accessor,multiple:this.props.IsMulti,options:this.props.Options.split(',').map(opt=>({value: opt, label: opt})), onChange: this.handleChange,isDisabled:this.props.isDisabled })
    }
}

 export default connect()(Select)