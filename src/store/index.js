import thunk from 'redux-thunk'
import {item} from './reducer'
import {
 combineReducers,
 createStore,
 applyMiddleware

} from 'redux';
const reducer=combineReducers({
    
    item,
    
});
const store=createStore(reducer,applyMiddleware(thunk))
export default store