import React from 'react';
import {connect} from 'react-redux';
import Label from '../Label';
import NumberWid from '../Number/widget';
import Number from '../Number';
import TextWid from '../Text/widget';
import Text from '../Text';
import Span from '../Span';
import DateWid from '../Date/widget';
import Date from '../Date';
import SelectWid from '../Select/widget';
import Select from '../Select';
import TextAreaWid from '../TextArea/widget';
import TextArea from '../TextArea';
import CheckBoxWid from '../CheckBox/widget';
import CheckBox from '../CheckBox';
import FileWid from '../File/widget';
import File from '../File';
import LookupWid from '../Lookup/widget';
import Lookup from '../Lookup';
import {getItem} from '../../api';
import moment from 'moment-jalaali';


class Field extends React.Component{
   render() {
   
    let formName=this.props.formName;
   
    
    let { accessor, type ,Options, Header,errorMessge,isDisabled } = this.props
   
   // console.log(this.props.internalName, this.props.fields)
    return (<div className='field-item' >
        <fieldset className={this.props.uniqueName} >

            <Label value={Header} htmlFor={this.props.internalName} />
            <div>
                {(() => {
                    switch (type) {

                        case 'String':
                        return (
                            <div className='item-view'>
                              {formName!='Display' ? 
                              <Text render={TextWid}  {...this.props}   /> :
                              <Span internalName={this.props.internalName} value={this.props.item[accessor]} />}
                            </div>
                          );
                        case 'Int32':
                        case 'Decimal':
                            return (
                                <div className= 'item-view' >
                                    {formName!='Display'?<Number render={NumberWid} {...this.props} />:
                                    <Span internalName={this.props.internalName} value={this.props.item[accessor]} /> }
                                </div>
                            ) 
                           case 'DateTime':
                          
                            return(
                            <div className='item-view'>
                                {formName!='Display' ? <Date   className={'input input-' + this.props.InternalName}  {...this.props}/> :
                                <Span internalName={this.props.internalName} value={this.props.item[accessor]?moment(this.props.item[accessor]).format('jYYYY/jMM/jDD'):undefined} /> } 
                            </div>
                            ) 
                         case 'Select':
                         
                                return ( 
                                <div className='item-view' >
                                {formName!='Display'? <Select
                                render={SelectWid}  
                                className={'input input-' + this.props.InternalName}
                                {...this.props}
                        
                                />: 
                                <Span internalName={this.props.internalName} value={this.props.item[accessor]}  />}
                                 </div>
                            )
                         case 'MultiChoice':
                                return(<div className='item-view'>
                                    {formName!='Display'?
                                    <Select
                                render={SelectWid}
                                   
                                    className={'input input-' + this.props.InternalName}
                                    {...this.props}
                                />:
                                <Span  internalName={this.props.internalName} value={this.props.item[accessor]} />}

                                </div>
                                )
                                // case 'Lookup' :
                              
                                // //  value&&Options?  this.loadValue(value,Options[0],TitleField):'';
                                
                                // return(<div className='item-view'>
                                //     {formName!='Display1'?
                                //     <Lookup
                                //     render={LookupWid}
                                  
                                //     className={'input input'+this.props.InternalName}
                                  
                                //     formName={formName}
                                //     {...this.props}
                                //      />:
                                //      null
                                //     //  <Span internalName={this.props.internalName} value={vvv}  srcName={Options[0]} titleField={TitleField} lookup={true}  />
                                //      }
                                // </div>)
                         case 'Note':
                           return(
                           <div>
                           {formName!='Display' ? <TextArea render={TextAreaWid}  className={'input note' + this.props.InternalName} {...this.props} /> :
                            <Span internalName={this.props.internalName} value={this.props.item[accessor]}  />}
                            </div>)
                           
                         
                        case 'Boolean':
                             return(<div>
                                {formName!='Display'? <CheckBox render={CheckBoxWid} 
                            
                             className={'input input-' + this.props.InternalName}
                           {...this.props}
                             />:
                             <Span internalName={this.props.internalName} value={this.props.item[accessor]} />}
                             </div>
                             )
                             case 'File':
                             
                             return(<div>
                                 {formName!='Display'?  <File render={FileWid} 
                                
                                 className={'input input-'+ this.props.InternalName}
                                {...this.props}
                                  />
                                 :
                                 <a  href={this.props.item[accessor]} target='_blank' >{Header} </a>}
                             </div>
                             )

                    }
                })()}
                <span style={{color: 'red'}}>{errorMessge || ''}</span>
            </div>


        </fieldset>
</div>
    );

}


}


const mapStateToProps=(state,props)=>(
    {field:state.columns[props.storeIndex].find((field)=>field.accessor==props.internalName),fields:state.columns[props.storeIndex],item:state.item[props.storeIndex]} )                                     
export default connect()(Field)