import React from 'react'
import {connect} from 'react-redux';
import moment from 'moment-jalaali';
import {getAllVisitItem,removeItem} from '../../api';
import {setAllItems,deleteItem,setItem} from '../../store/action'
import 'react-table/react-table.css';
import Modal from 'react-modal';
import ReactTable from "react-table";
import { ReactTableDefaults } from "react-table";

Modal.setAppElement('#root');
const customStyles = {
  content : {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '20%',
    bottom: '40px',
    border: '1px solid rgb(204, 204, 204)',
    background: 'rgb(255, 255, 255)',
    overflow: 'auto',
    
    outline: 'none',
    padding: '20px'
}
 
  }

  class Table extends React.Component{

    constructor(props){
        super(props);
        this.state={column:[], 
          showModal: false,
          selectedItem:{},formName:'',
          showWorkflowModal:false,
          showViolationModal:false
        }
    }
    
    handleClick(event) {  // switch the value of the showModal state
      this.setState({
        showModal: !this.state.showModal
      });
    }
    handleOpenModal =(e)=> {
      this.setState({ showModal: true });
    }
    
    handleCloseModal =(e)=> {
      this.setState({ showModal: false });
      this.props.dispatch(setItem({},this.props.storeIndex));
      this.setState({selectedItem:{}})
    }
    handleOpenWorkFlowModal =(e)=> {
          
          this.setState({ showWorkflowModal: true });
    }
    
    handleCloseWorkFlowModal =(e)=> {
      this.setState({ showWorkflowModal: false });
      this.props.dispatch(setItem({},this.props.storeIndex));
      this.setState({selectedItem:{}})
    }
    handleOpenViolationModal =(e)=> {
                
            this.setState({ showViolationModal: true });
      }

      handleCloseViolationModal =(e)=> {
        this.setState({ showViolationModal: false });
        this.props.dispatch(setItem({},this.props.storeIndex));
        this.setState({selectedItem:{}})
      }
    removeClick=(row)=>{
     removeItem(row['ID']).then((response)=>{
     this.props.dispatch(deleteItem(row))
      }).catch((e)=>console.log(e))
    }
    componentDidMount=(e)=>{
          this.setState({itemIndex:this.props.itemIndex}) 
    }

  defaultFilterMethod = (filter, row, column) => {
    const id = filter.pivotId || filter.id;
     if(column.type=='DateTime')
      return (row[filter.id]!=null?moment(String(row[filter.id])).format('jYYYY/jMM/jDD').indexOf(filter.value)>=0:false) 
     else return String(row[filter.id]).indexOf(filter.value)>=0

  }
  render(){


    // const TagName = this.components[this.props.itemIndex || 'foo'];
   
    Object.assign(ReactTableDefaults, {
      defaultPageSize: 5,
      minRows: 3
      // etc...
    });

   
 let columns = this.props.columns.filter(col=>col.isChecked);
 var clm=  columns.map((column)=>({
  Header: column.Header,
  id: column.accessor,
  type:column.type,
 // accessor:  props => <div> {moment(props.value).format('YY/MM/DD')} </div>
  accessor:column.accessor,
 Cell: ( row) => (
   <span>
   
    {(() => { 
             switch (column.type) {
                 case 'DateTime':
                    return(
                     row.value=  row.value!=null?moment(row.value).format('jYYYY/jMM/jDD'):' ----- ')
                  case 'Lookup':
                  return(
                      row.Value=row.value!=null? row.original[(column.accessor.substring(0,column.accessor.length-2))][column['TitleField']]:'-----'
                   )
                  case 'File':
                  return (
               
                     <a href={row.value}>{column.Header}</a>
                  )
                  default:
                  return (
                    row.value
                  )
                }
            })()
                
     }
                                                                
    </span>
  
       ) 

 }))

{console.log('clm',clm)};

 clm.push({
  Header: 'عملیات',
  id: 'action',
 // accessor:  props => <div> {moment(props.value).format('YY/MM/DD')} </div>
 accessor:'Action',
 Cell: (row) => (
   <span className='operation-feild' >
       <button alt='نمایش' className='view-item  fa fa-eye fa-lg ' onClick={ ()=> {this.setState({ showModal: true,selectedItem:row.original,formName:'Display' });}}></button>
      { this.props.showEdit ?<button className='edit-item fa fa-pencil-square-o fa-lg ' onClick={ ()=> {this.setState({ showModal: true,selectedItem:row.original,formName:'Edit' });}}></button>:null}
      { this.props.showRemove? <button className='delet-item edit-item fa fa fa-trash-o fa-lg ' onClick={()=> { removeItem(row.original['ID'],this.props.storeIndex).then((response)=>{
                                                                this.props.dispatch(deleteItem(row.original,this.props.storeIndex))
                                                                alert('آیتم با موفقیت حذف شد')
     }).catch((e)=>console.log(e))}} ></button> :null  }
     {this.props.violation?<button className='edit-item fa fa-pencil-square-o fa-lg ' onClick={ ()=> {this.setState({ showViolationModal: true,selectedItem:row.original });}}></button>:null}

     {this.props.workFlow? <button className='fa fa-retweet fa-lg  '  onClick={()=>{this.setState({showWorkflowModal:true,selectedItem:row.original});}}> </button>:null}                                                           
   </span>
),


})

  return(
     <div className='data-grid' >
        <ReactTable
              data={this.props.items.map((itm,index)=>({...itm,key:index}))}
              noDataText="اطلاعاتی وجود ندارد"
              filterable
              defaultFilterMethod={this.defaultFilterMethod}    
               // String(row[filter.id]).startsWith( filter.value)
         
              columns={clm}
              className="-striped -highlight"
          />
          {(this.props.showNew)? <button  className='fa fa-plus-square fa-lg'  onClick={ ()=> {this.setState({ showModal: true,formName:'New'});}}></button>:null}

           <div>
                <Modal 
                   isOpen={this.state.showModal}
                   contentLabel="onRequestClose Example"
                   onRequestClose={this.handleCloseModal}
                   shouldCloseOnOverlayClick={false}
                   style={customStyles}
                >
                 <div className='close-btt' onClick={this.handleCloseModal}>✖</div>
                  <this.props.itemIndex formName={this.state.formName} selectedItem={this.state.selectedItem} storeIndex={this.props.storeIndex} closeAfterSave={this.handleCloseModal}/>
                 
                </Modal>
              </div>
              
            { this.props.workFlow? <div>
               <Modal
                 style={customStyles}
                  isOpen={this.state.showWorkflowModal}
                  contentLabel="onRequestClose Example"
                  onRequestClose={this.handleCloseWorkFlowModal}
                  shouldCloseOnOverlayClick={false}
               >
                <div className='close-btt' onClick={this.handleCloseWorkFlowModal}>✖</div>
                 <this.props.workFlow selectedItem={this.state.selectedItem} storeIndex={this.props.storeIndex} closeAfterSave={this.handleCloseWorkFlowModal} />
                 
               </Modal> 
               </div>:null}
              { this.props.violation? <div>
                <Modal
                  style={customStyles}
                  isOpen={this.state.showViolationModal}
                  contentLabel="onRequestClose Example"
                  onRequestClose={this.handleCloseViolationModal}
                  shouldCloseOnOverlayClick={false}
                >
                <div className='close-btt' onClick={this.handleCloseViolationModal}>✖</div>
                <this.props.violation visitedItem={this.state.selectedItem} storeIndex='WellViolations' closeAfterSave={this.handleCloseViolationModal} />
                  
                </Modal> 
                </div>:null}

               }
      </div>
      //  <BootstrapTable   
      
      //     pagination={true}
      //     search={true}
      //     selectRow={this.state.selectRowProp} data={ this.state.datasource } columns={this.state.columns }  filter={ filterFactory() }
      //     keyField='ID' 
      //     /> 
       
  )

  }

}
const mapStateToProps=(state,props)=>({columns:state.columns[props.storeIndex],items:state.items[props.storeIndex]})
export default connect(mapStateToProps)(Table)