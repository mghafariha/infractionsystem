import React from 'react';
import Select from 'react-select';
import '../../styles/style.css'

const SelectWid=({value,internalName,multiple,options,onChange,isDisabled})=>(
    <Select id={internalName}
         className={isDisabled?'disabled' :''}
           onChange={onChange}
           isMulti={multiple}
           name={internalName} 
           options={options}
           placeholder='انتخاب ...'
           value={value}
           disabled={isDisabled}

           
    />
    //  <option value={null}>----</option>
    // {options.map((opt,index)=>(<option key={index} value={opt} selected={opt==value?'selected':''} >{opt}</option>))}

    // </select> 
)
export default SelectWid



