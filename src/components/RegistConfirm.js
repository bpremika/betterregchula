import React, { createContext, useContext, useState } from "react"
import"../App.css";
import"./Registration.css";
import"./RegistConfirm.css";

import ContentBox from "./ContentBox";

var q = (id) => document.getElementById(id)

//-------------------ลองข้อมูล-- แสดงวิชาที่เลือก--------------//
var chosenCourses = [
    {
        "courseName": "Alchemy I",
        "courseNo": "2356789",
        "credits": 6,
        "selectedSect": 3
    },
    {
        "courseName": "Astrology I",
        "courseNo": "2398765",
        "credits": 3,
        "selectedSect": "only"
    },
    {
        "courseName": "Magic Spell I",
        "courseNo": "2309987",
        "credits": 5,
        "selectedSect": "1"
    }
]


const chosenCoursesCtx = createContext();
const RegistConfirm=()=>{ //-----------main-------------------------------------------------------------//
    var [nowChosens, setNowChosens] = useState([]); // global in this app for list of chosen courses

    var CourseRow_list = chosenCourses.map((courseData, index) => <CourseRow courseData={courseData} index={index+1}/>);

    return(
    <chosenCoursesCtx.Provider value={{get: nowChosens, set: setNowChosens}}>
        <div className="heading">รายวิชาที่ต้องการลงทะเบียนเรียน</div>    
        <ContentBox title="รายวิชาที่ต้องการลงทะเบียนเรียน" content={
            <>
            <TableCtn content={CourseRow_list}/>             
            
            </>
        }/>
            
    </chosenCoursesCtx.Provider>
    )
}

//--------------------------------------------------------------//
const TableCtn = (props) =>{
    return(
        <div className="cardCtn" id="cardCtn">
            <table className="table1">
                <tr>
                    <th>ลำดับที่</th>
                    <th>รหัสรายวิชา</th>
                    <th>ชื่อย่อรายวิชา</th>
                    <th>ตอนเรียน</th>
                    <th>หน่วยกิต</th>
                    <th className="invisCell"></th>
                </tr>
                {props.content}
            </table>
            
        </div>
    )
}

const CourseRow = (props) => {
    const courseData = props.courseData;

    return(
        <tr>
            <td>{props.index}</td>
            <td>{courseData.courseNo}</td>
            <td>{courseData.courseName}</td>
            <td>{courseData.selectedSect}</td>
            <td>{courseData.credits}</td>
            <td><button>ลบ</button></td>
        </tr>
    )
}

//-----------------------------------------------------------------//

export default RegistConfirm