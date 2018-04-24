import {combineReducers} from 'redux'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'
import idReducer from './idReducer'
import roomReducer from './roomReducer'


const rootReducer = combineReducers({
    user: userReducer,
    loading: loadingReducer,
    cardId: idReducer,
    chatRoom: roomReducer
})

export default rootReducer;