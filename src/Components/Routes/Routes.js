import  Login  from "../Login/Login"
import { Route, Routes } from "react-router"
import FeedData from "../FeedData/FeedData"
import Ragister from "../Ragister/Ragister"

export const All_Routers= ()=>{


    return(
        <>
         <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/feeddata' element={<FeedData/>} />
      <Route path='/Ragister' element={<Ragister/>} />
      </Routes>
        </>
    )
}