
import {createStore} from "redux"
import thunk from "redux-thunk"
import { combineReducers  } from "redux"
import { applyMiddleware } from "redux"
import { Signupreducer } from "./Reducer/RagisterReducer"
import { Loginreducer } from "./Reducer/LoginReducer"


const rootReducer = combineReducers({
    SignupFatch : Signupreducer,
    LoginFatch : Loginreducer
})

export const  store = createStore(rootReducer , applyMiddleware(thunk))