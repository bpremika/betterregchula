import React from "react"
import App from "../App"
import"../App.css";
import {IoMegaphone} from 'react-icons/io5';
const Home=()=>{
    return(
        <div className="contentcontainer">
            <div className="heading">หน้าหลัก</div>
            <div className="content">
                <div className="headercontent">
                    <div className="announcementbox">
                        <div id="announceicon"><IoMegaphone/></div>
                        <div id="announcetitle">ประกาศ/สิ่งที่ต้องทำ</div>
                        
                    </div>
                </div>
            </div>

        </div>
        
        
    )
}
export default Home