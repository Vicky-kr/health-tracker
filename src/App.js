import React from "react";
import Template2 from './Template2';
import {Route , Switch} from "react-router-dom"
import Authenticate from "./Pages/FaceAuthenticationPage/Authenticate";
import UserDuotone from "./Pages/FaceAuthenticationPage/UserDuotone";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Template3 from "./Pages/SignUpPage/Template3";
import Template4 from "./Pages/LoginPage/Template4";
import Template5 from "./Pages/FillInformationPage/Template5";
import DashboardBottom from "./Pages/Dashboard/DashboardBottom";
import Error from "./Error";








const App = () =>
{
    return(
        <>
        <Switch>
            <Route  exact path = '/' component = {Template2}/>
            <Route exact path = '/loginpage' component = {Template4}/>
            <Route exact path = '/signuppage' component = {Template3}/>
            <Route exact path = '/fillformpage' component = {Template5}/>
            <Route exact path = './dashboard' component = {Dashboard}/>
            <Route exact path = './userduotone' component = {UserDuotone}/>
            <Route exact path = './authenticate' component = {Authenticate}/>
            <Route exact path = './dashboardbottom' component = {DashboardBottom}/>
            <Route component = {Error}/>
        </Switch>
    
    </>
    );
};

export default App;
