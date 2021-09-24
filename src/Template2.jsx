import React from "react";
import "./csst/csst2.css";
import Rightpart from "./Rightpart";
import {Navbar} from "./Navbar/Navbar";

const Template2 = () => {
    return (
        <div>
           <Navbar/>
            <div className="maincontent">
                <div className="leftarea">
                    <h1 className="leftareachild">VIRTUAL HEALTH CARE FOR YOU</h1>
                    <p className="leftareachild">Lorem ipsum dolor sit, amet consectet Quam commodi, dolorem assumenda
                        iusto expedita corporis ipsum aperiape optio debitis, totam alias iusto porro quia provident,
                        iure placeat architecto cum ipsam autem distinctio iste? Aliquam ut accusantium perferendis
                        non.</p>
                    <button className="leftareabutton leftareachild">CONSULT TODAY</button>
                </div>
                <Rightpart/>
            </div>
        </div>
    )
};

export default Template2;


