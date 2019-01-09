import {SET_FIELD_VALUE} from './constant';
export const setFieldValue=(internalName,value,index)=>({

    type:SET_FIELD_VALUE,
    field:{internalName,value},
    index:index
})