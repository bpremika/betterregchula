import React from "react";
import chulalogo from './Chulalogo.png';
import "../App.css";
function RegisterLogo(){
    return(
        <div className="TitleLogo">
            <div className="Groupoftitle"> 
                <h3 id="Thaititle" >สำนักงานการทะเบียน (สนท.)</h3>
                <h3 id="Englishtitle">OFFICE OF THE REGISTRAR</h3>
            </div>
            <div className="imagelogo">
                <img src={chulalogo} alt="Logo" width="50px" height="75px"/> 
            </div> 
        </div>
    )
}
export default RegisterLogo