import React from 'react';
 const NumberWid=({value,internalName,onChange,isDisabled})=>(

    <input id={internalName}
    name={internalName}
    type='number'
    
    onChange={onChange}
    value={value || ''}
    disabled={isDisabled}
   
/>
 )
 export default NumberWid