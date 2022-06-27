import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {SignupData} from "../../Redux/Actions/RagisterAction"

const Ragister = () => {
    const [state, setstate] = useState({
        User_id : "",
    });

    const Dispatch = useDispatch()
    const Navigate = useNavigate()
     
    const Data = (e)=>{
      const {name , value} = e.target;
      setstate({...state, [name]:value})
    }
    

    
    const handleSubmit = (event) => {
      event.preventDefault();
    Dispatch(SignupData(state , Navigate))
  };


  return (
    <div className="singup">
    <Box sx={{ width: "400px", margin: "auto", marginTop: "15%" }}>
      <Typography sx={{ margin: "10px", width: "400px" }} variant="h4">
        SIGNUP
      </Typography>

      <TextField
        sx={{ margin: "10px", width: "400px" }}
        name="User_id"
        type="user"
        placeholder="user name"
        onChange={Data}
        label="user name"
      />
        <Button
          onClick={handleSubmit}
          sx={{ margin: "10px", width: "400px" }}
          variant="outlined"
        >
          SIGNUP your account
        </Button>
    </Box>
    </div>
  );
};

export default Ragister;
