import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

import "./App.css";
import Sidebar from "./components/Sidebar";
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import RegisterLogo from "./components/RegisterLogo";
import { render } from "react-dom";
import {components} from 'react'
import Home from "./components/Home"
import Registration from "./components/Registration";

const information=()=><div className="heading"></div>
const CourseSchedule=()=><div className="heading">ตารางสอน</div>
const ExamSchedule=()=><div className="heading">ตารางสอบ</div>
const building=()=><div className="heading">รหัสอาคาร</div>
const Faculty=()=><div className="heading">รหัสคณะ</div>
const document=()=><div className="heading"></div>
const JT19=()=><div className="heading">จท19</div>
const CR20CR20G=()=><div className="heading">จท20</div>
const CertificateofStudentStatus=()=><div className="heading">หลักฐานรับรองแสดงสถานภาพการเป็นนิสิต</div>
const StudentPersonalRecords=()=><div className="heading">ทะเบียนชื่อ</div>
const Subject=()=><div className="heading"></div>

const CourseWithdraw=()=><div className="heading">ถอนรายวิชา</div>
const RegistrationResult=()=><div className="heading">ผลการลงทะเบียนเรียน</div>
const EducateResult=()=><div className="heading">ผลการเรียน</div>

function App() {
  const adminUser = {
    name: 'Firstname Lastname',
    stu_id: '6000000000',
    password: '12345'
  }
  const [user, setUser] = useState({stu_id: ''});
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);

    if (details.stu_id === adminUser.stu_id && details.password === adminUser.password){
      console.log('Login!');
      setUser({
        stu_id: details.stu_id,
      })
    }
    else{
      console.log('Not Match!');
      setError('Not Match!');
    }
  }
  const Logout = () => {
    setUser({stu_id: ''});
  }





      return (
        <div className="Appcontainer">
          {(user.stu_id !=='') ? (
          <Router>
              <Route path="/Home" component={Home}/>
              <Route path="/information" component={information}/>
              <Route path="/information/CourseSchedule" component={CourseSchedule}/>
              <Route path="/information/ExamSchedule" component={ExamSchedule}/>
              <Route path="/information/building" component={building}/>
              <Route path="/information/Faculty" component={Faculty}/>
              <Route path="/document" component={document}/>
              <Route path="/document/JT19" component={JT19}/>
              <Route path="/document/CR20-Cr20G" component={CR20CR20G}/>
              <Route path="/document/CertificateofStudentStatus" component={CertificateofStudentStatus}/>
              <Route path="/document/StudentPersonalRecords" component={StudentPersonalRecords}/>
              <Route path="/Subject" component={Subject}/>
              <Route path="/Subject/Registration" component={Registration}/>
              <Route path="/Subject/Course Withdraw" component={CourseWithdraw}/>
              <Route path="/Subject/RegistrationResult" component={RegistrationResult}/>
              <Route path="/Subject/EducateResult" component={EducateResult}/>
              <RegisterLogo/>
              <Sidebar Logout={Logout}/>
              
              <div className="bottombg"></div>
          </Router>
          ) : (
        <LoginForm Login={Login} error={error}/>
      )}

        </div>
      );
    }


export default App;