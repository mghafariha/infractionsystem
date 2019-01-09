import {SET_FIELD_VALUE} from './constant';
export const item=(state={'UnderWater':{}},action)=>{
    switch(action.type){
        case SET_FIELD_VALUE:
        return {...state,[action.index]:{...state[action.index],[action.field.internalName]:action.field.value}}
        default:
        return state;
    }
}