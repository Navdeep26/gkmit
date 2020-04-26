import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import LoaderReducer from './LoaderReducer';


const rootReducers = combineReducers({
    UserReducer,
    LoaderReducer,
})

export default rootReducers;