import React from 'react'
import { BrowserRouter as R, Route } from "react-router-dom";
import Signup from './signup'   
import Login from './login'                               
import Homepage from './homepage';
import Schedule from './schedule';




const CustomRouter = () => {
        return (
            <R>
               <Route path='/' exact component={Signup}></Route>
               <Route path='/login/' component={Login}></Route>
               <Route path='/signup/' component={Signup}></Route>
               <Route path='/homepage/' component={Homepage}></Route>
               <Route path='/schedule/' component={Schedule}></Route> 
            </R>
        )
    
 }

 export default CustomRouter
