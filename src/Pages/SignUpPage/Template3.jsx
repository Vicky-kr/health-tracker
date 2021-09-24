import React from "react";
import  "./Template3.css";
import Rightpart from "../../Rightpart";
import background from '../../bgimg.png';
import {Navbar} from "../../Navbar/Navbar";



const Template3 = () =>
{
         return(
             <>
         <Navbar/>
             <div className = "mainc3">
                 <div className  = "lp3" style={{ backgroundImage: `url(${background})` }}>
        

                 <h1 className ="heading">SIGN UP</h1>
            
                 <label for="emailid" >@</label>
                  <input   type="text" id="emailid" name="emailid" placeholder = "Enter your email id"></input>
                 <label  for="password">eye</label>
                 <input   type="text" id="password" name="password" placeholder = "Create your password"></input>
                 <label  for="password">eye</label>
                 <input   type="text" id="password" name="password" placeholder = "Conform your password"></input>
                 
                 <button className = "subleft btnn ">sign up</button>
                 <div className = "account subleft "> 
                  <span> Don't have an account ?</span>
                  <button className = "subleft btnn">create one </button>
                 </div>





                 </div>
                 <div className = "rp3">
                 <Rightpart/>
                 </div>
             </div>

        
         </>
    )
};

export default Template3;

