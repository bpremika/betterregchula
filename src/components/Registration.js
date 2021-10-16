import React, { createContext, useContext, useState } from "react"
import"../App.css";
import"./Registration.css";
import {Link} from 'react-router-dom'
import SubMenu from "./SubMenu";
import ContentBox from "./ContentBox";
import styled from 'styled-components';

const ConfirmLink = styled(Link)`
color:blue;

`
var q = (id) => document.getElementById(id)

var Now = {
    chosens: [],
    searched: ''
};

//-------------------ลองข้อมูล----------------//
var received = {
    courses: [{
        name: 'Calculus I',
        credits: 6,
        No: '2301123',
        sects: [1, 2, 3, 4, 5, 'any']
    }, {
        name: 'Magic Spell I',
        credits: 5,
        No: '2309987',
        sects: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
        name: 'Muggle Studies I',
        credits: 4,
        No: '2355566',
        sects: [1, 2, 3, 'only', 'any']
    }, {
        name: 'Alchemy I',
        credits: 6,
        No: '2356789',
        sects: [1, 2, 3, 4]
    }, {
        name: 'Astrology I',
        credits: 3,
        No: '2398765',
        sects: ['only']
    }]
}

const nowChosensCtx = createContext();
const Registration=()=>{ //-----------main-------------------------------------------------------------//
    var [nowChosens, setNowChosens] = useState([]); // global in this app for list of chosen courses

    var CourseCard_list = received.courses.map((course) => 
        <CourseCard courseName={course.name} courseNo={course.No} credits={course.credits} sects={course.sects}/>);

    return(
    <nowChosensCtx.Provider value={{get: nowChosens, set: setNowChosens}}>
        <div className="heading">ลงทะเบียนเรียน</div>    
        <ContentBox title="ลงทะเบียนเรียน" content={
            <>
            <CardCtn content={CourseCard_list}/>             
            <BasketLabel/>
            </>
        }/>
            
    </nowChosensCtx.Provider>
    )
}

//--------------------------------------------------------------//
const CardCtn = (props) =>{
    return(
        <div className="cardCtn" id="cardCtn">
            {props.content}
        </div>
    )
}

const CourseCard = (props={courseName:'Cal I', courseNo:'23101', credits:5}) =>{
    var [isChosen, setIsChosen] = useState(false);
    const nowChosens = useContext(nowChosensCtx).get;
    const setNowChosens = useContext(nowChosensCtx).set;
    console.log('nowChosens', nowChosens)

    const [cardData, setCardData] = useState({
        courseName: props.courseName,
        courseNo: props.courseNo,
        credits: props.credits,
        selectedSect: props.sects[0]
    });

    const whenChosen = () => {
        if(!isChosen){
            Now.chosens.push(props);            
            console.log(Now.chosens);

            setNowChosens([...nowChosens, cardData]);
            //console.log('nowChosens from ctx', nowChosens);

            setIsChosen(true);
        }
        else{
            Now.chosens.splice(Now.chosens.indexOf(props), 1); //deletew 1 items at the index
            console.log(Now.chosens);

            let newChosensList = [...nowChosens] // ทำ arr ใหม่เพื่อลบออก //.splice ลบในตัวเอง ส่งกลับค่าที่ถูกลบ
            newChosensList.splice(nowChosens.indexOf(cardData, 1));
            setNowChosens(newChosensList);
            //console.log('nowChosens from ctx', nowChosens);

            setIsChosen(false);
        }
    }

    const setSect = () => {
        //whenChosen();
        setCardData({...cardData, selectedSect: q('sectSelect').value});        
        //whenChosen();
    }

    return(
    <div className="card">
        <div style={{flexGrow: 3}}>
            <p>{props.courseName} {props.courseNo}</p>
        </div>
        <div style={{flexGrow: 3}}>
            <p>{props.credits} หน่วยกิต</p>
        </div>
        <div style={{flexGrow: 6}}>
            <label htmlFor="sectSelect">ตอนเรียน : </label>
            <select name="section" id="sectSelect" onChange={setSect}>
                {props.sects.map((sect) => <option value={sect}>{sect}</option>)}                
            </select>
        </div>
        <div style={{flexGrow: 1}}>
            <button className="btn1" onClick={whenChosen}>
                {isChosen ? 'เลือกแล้ว' : 'เลือก'}
            </button>
        </div>
    </div>
    )
}

const BasketLabel = (props) => {
    //var [chosens, setChosens] = useState(Now.chosens);
    var nowChosens = useContext(nowChosensCtx).get;
    const whenFinished = () => {
        window.location.href='/Subject/RegistConfirm'
    }

    return(
        <div className="basKetDiv">
            <p id="totalchosen">เลือกแล้วจำนวน {nowChosens.length} วิชา</p>
            <ConfirmLink to= '/Subject/RegistConfirm'><button id="buttonchosen" >วิชาที่เลือก</button></ConfirmLink>
        </div>
    )
}

//-----------------------------------------------------------------//


export default Registration