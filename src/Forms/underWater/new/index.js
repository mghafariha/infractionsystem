import React from 'react';
import {connect} from 'react-redux';
import '../../../styles/style.css';
import {legalFields,illegalFields,wellTypes,infractionTypesLegal,infractionTypesIllegal} from './fields';
import Field from '../../../Components/Field';
import CheckboxContainer from './components/Checkbox';
import { setFieldValue } from '../../../store/action';

class UnderWaterNew extends React.Component
{
    constructor(props){
        super(props);
        this.state={showCommonFields:false,commonFields:[],fields:[]}
    }
    handleChangeType=(e)=>{
       if (e.target.value!=null)
       this.setState({showCommonFields:true}) ;
        e.target.value=='legal'?this.setState({commonFields:legalFields.filter(a=>a.group=='Moshtarak'),checkBoxTypes:infractionTypesLegal,fields:legalFields.filter(a=>a.group!='Moshtarak')}):this.setState({commonFields:illegalFields.filter(a=>a.group=='MoshtarakGhair'),checkBoxTypes:infractionTypesIllegal,fields:legalFields.filter(a=>a.group!='MoshtarakGhair')});
        
      }
    render()
    {
        console.log('welltypes',wellTypes);
        // let commonFields=fields.filter(a=>a.group=='');
        return (  <form onSubmit={this.handleSubmit}>
            <h1></h1>
            <div> <select onChange={this.handleChangeType}  >              
                    {wellTypes.map((opt,index)=>(<option key={opt.key} value={opt.key}>{opt.value}</option>))} 
                </select></div>
             {/* <div><Field field={accessor:'WellType', type:'Select' Options="چاه مجاز , چاه غیر مجاز" Header='نوع چاه' onChange={this.WellTypeChange} ></Field></div> */}
             {this.state.showCommonFields?<div> <div className='form-contents'>{this.state.commonFields.map((a,index)=><Field key={index} {...a} storeIndex='UnderWater'></Field>)}</div>
                                                <div> نوع تخلف
                                                <CheckboxContainer checkBoxTypes={this.state.checkBoxTypes} storeIndex='UnderWater' accessor='infractionTypes'/>

                                                </div>
                                            </div> :null}
                                            <div >
                                            {this.state.fields.filter(a=>a.group.indexOf(this.props.infractionTypes)!=-1).map((a,index)=><Field key={index} {...a} storeIndex='UnderWater'></Field>)}
                                            </div>
                                     </form>);
    }
    
}
const mapStateToProps=(state,props)=>(console.log('itemmmm',state.item[props.storeIndex]),{
    item:state.item['UnderWater'],
    infractionTypes:state.item['UnderWater']['infractionTypes'].split(',')
    
 })

export default connect()(UnderWaterNew);
