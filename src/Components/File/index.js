import React from 'react';
import {connect} from 'react-redux';
 import {setFieldValue} from '../../store/action';
import ReactFileReader from 'react-file-reader';
import {URL,uploadFile,deleteFile} from '../../api';
// import $ from 'jquery';
import Loader from '../Loader';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

//import ReactUploadFile from 'react-upload-file';
let fileReader;
class File extends React.Component{
  
  constructor(props){
        super(props); 
        this.state={files: '',
        }
    }
    
    deleteFile=(itm)=>{
    let newchar = '|'
     let fileAddress=this.state.files;
    
     
      confirmAlert({
        title: 'تایید حذف',
        message: 'آیا از حذف فایل مطمئن هستید؟',
        buttons: [
          {
            label: 'بله',
            onClick: () => {

              deleteFile(fileAddress).then(d=>{
                //this.setState({files:files})
               this.props.dispatch(setFieldValue(this.props.accessor,'',this.props.storeIndex))
                this.setState({file:''})

              }).catch((error)=>console.log('error',error));
            }
          },
          {
            label: 'خیر',
            onClick: () => alert('خیر')
          }
        ]
      })

      }
    
    componentDidMount(){

      let field=this.props.field;
      this.setState({file:this.props.value});
     }
    
    handleChange=(e) => {
    let fileSave=[];
    let value='';
    let files= (e.fileList);
      console.log(e.base64);
     for(var i=0;i<files.length;i++){
      let Title = files[i].name.substring(0,files[i].name.lastIndexOf('.'));
      let fileExtention = files[i].name.substring(files[i].name.lastIndexOf('.')+1, files[i].name.length) || Title;
       let FileName =Title+ '.' + fileExtention
        let Content=e.base64[i].split('base64,')[1];
         fileSave.push({FileName,Title,Content});
         
     }
      
    uploadFile(fileSave).then((result)=>{
                      console.log('ok');
                      value=fileSave.reduce((acc,itm)=>{return acc+ "/uploadedFiles/temp/"+itm.FileName + "|"},'')
                     this.props.dispatch(setFieldValue(this.props.accessor,value,this.props.storeIndex));
                      this.setState({files:value});
                      this.setState({loading:false})
                   }).catch((error)=>console.log('error',error));

      
    }
   
    render(){
     var filesShow=this.state.files.split('|');
     console.log('picture',this.props.field.IsMulti)
      return(!this.state.loading?<div>
        <ReactFileReader  base64={true} multipleFiles={this.props.field.IsMulti} handleFiles={this.handleChange}>
          <input type='button' value='آپلود'/>
        </ReactFileReader>
              { this.state.files!=''? 
              <div>
                 <ui>
                    {
                     filesShow.map(file=><li><a href={file} target='_blank' /><input type='button' onClick={deleteFile(file)} value='حذف'/>{this.props.field.Header}</li>)
                    
                    }
                  </ui>
               
              </div>:''} 
         </div>:<div className='sweet-loading'>
        <Loader
        sizeUnit={"px"}
        size={150}
        color={'#123abc'}
        loading={this.state.loading}
      />
    </div> )
    }
}
const handleFileRead = (e) => {
  const content = FileReader.result;
  console.log(content);
  // … do something with the 'content' …
};
// const getFileBuffer = data => {
//   var deferred = $.Deferred();
//   var reader = new FileReader();
//   reader.onloadend = function (e) {
//       deferred.resolve(e.target.result);
//   }
//   reader.onerror = function (e) {
//       deferred.reject(e.target.error);
//   }
//   reader.readAsDataURL(data);
//   return deferred.promise();
// }

const mapStateToProps=(state,props)=>( console.log('fileItem',state.item[props.storeIndex]),
  
  {item:state.item[props.storeIndex],field:state.columns[props.storeIndex].find((field)=>field.accessor==props.internalName),
    value:state.item[props.storeIndex][props.internalName]})
export default (File);


