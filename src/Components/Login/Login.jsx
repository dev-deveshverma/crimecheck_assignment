import React , {useState} from 'react';
import {Link} from "react-router-dom"
import TextField from '@mui/material/TextField';
import {Box, Typography , Button} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {LoginData} from "../../Redux/Actions/LoginAction";


const Login = () => {
  
    const [user , setuser] = useState({
        User_id : "",
    })


    
    const handleChange = (e)=>{
     let {name , value} = e.target;
     setuser({...user , [name]:value})
 }

   const Dispatch = useDispatch()
    const Navigate = useNavigate()
    const Data = useSelector((store)=>store.LoginFatch)
  
    if(Data.isLogged === true){
        Navigate("/feeddata")
    }



  const handleSubmit = (event) => {
    event.preventDefault();
    Dispatch(LoginData(user))
  };


     

    return (
      <div className="singup">
        <Box sx={{width:"400px" , margin:"auto" , marginTop:"15%"}}>
        
 <Typography sx={{margin:"10px" , width:"400px"}} variant='h4'>SIGNIN</Typography>


  <TextField
  sx={{margin:"10px" , width:"400px"}}
    name="User_id"
    type="user"
    placeholder="user name"
    onChange={handleChange}
    label="user name"
  />
  <Link style={{textDecoration:"none"}} to={`/feeddata?userId:${user}`}>
  <Button onClick={handleSubmit} sx={{margin:"10px" , width:"400px"}} variant="outlined">submit</Button>
  <Link style={{textDecoration:"none"}} to={"/Ragister"}>
        <Button sx={{margin:"10px" , width:"400px"}} variant='outlined'>SIGNUP </Button></Link>
 </Link>
        </Box>
        </div>
    );
    
}

export default Login;