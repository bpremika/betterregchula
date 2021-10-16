import React from "react"
import App from "../App"
import"../App.css";
import {IoMegaphone} from 'react-icons/io5';
const ContentBox=(props)=>{
    return(
        <div className="content">
            <div className="headercontent">
                <div className="announcementbox">
                    <div id="announceicon"><IoMegaphone/></div>
                    <div id="announcetitle">{props.title}</div>                                        
                </div>
            </div>
            <div className="contentDiv">
                {props.content}
            </div>
        </div>        
        
    )
}
export default ContentBox