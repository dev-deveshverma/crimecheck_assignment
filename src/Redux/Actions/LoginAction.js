import axios from "axios";


export const LOGIN_PANDING = "LOGIN_PANDING"
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT"


export const loginPanding = ()=>({type:LOGIN_PANDING})
export const loginError = ()=>({type:LOGIN_ERROR})
export const loginSuccess = (payload) =>({type:LOGIN_SUCCESS , payload})
export const logout = () =>({ type: LOGOUT })


export const LoginData = (login)=>(Dispatch)=>{
    Dispatch(loginPanding())
    axios.post("https://crime-check-api.herokuapp.com/user/login" , login).then((res)=>{
        setTimeout(() => {
            Dispatch(loginSuccess(res.data)) 
        }, 700);
    }).catch((err)=>{
        setTimeout(() => {
            Dispatch(loginError())    
            alert("something is wrong please try again ") 
        }, 700);
    })
}