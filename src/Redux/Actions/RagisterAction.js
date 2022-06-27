import axios from "axios";

export const SIGNUP_PANDING = "SIGNUP_PANDING"
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";


export const signupPanding = ()=>({type:SIGNUP_PANDING})
export const signupError = ()=>({type:SIGNUP_ERROR})
export const signupSuccess = (paylod) =>({type:SIGNUP_SUCCESS , paylod})



export const SignupData = (signup , Navigate)=>(Dispatch)=>{
    Dispatch(signupPanding())
    axios.post("https://crime-check-api.herokuapp.com/user/register" , signup).then((res)=>{
        alert("signup Success")
        Dispatch(signupSuccess(res.data))
        Navigate("/")
    }).catch((err)=>{
        alert("something is wrong try again")
        Dispatch(signupError())
    })
}