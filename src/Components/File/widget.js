import React from 'react'

// import { Upload, message, Button, Icon } from 'antd';
// import 'antd/dist/antd.css';

 const FileWid=({internalName,onChange,deleteFile,values,multiple})=>(
     <div>
    <input type="file"  onChange={onChange} internalName={internalName}/>
    <div>
    {/* {
    <ui>
        values.map((item,index)=>{
            <li><a href={item} target='_blank' /><input type='button' onClick={deleteFile(item)} value='حذف'/> </li>
        })
        </ui>
    } */}
     </div>
       </div>
 )
 export default FileWid