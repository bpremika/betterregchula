import React, { useState } from "react";
import "../App.css";
import {SidebarData} from './SidebarData'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa';
import {IoArrowBack} from 'react-icons/io5';
import SubMenu from "./SubMenu";
import {BiLogOut} from 'react-icons/bi';

import { useHistory } from "react-router-dom";

//ส่วนรอบปุ่ม
const Nav=styled.div`
    background:#5B5B5B;
    width:80px;
    height: 100%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    border-radius:0px 20px 20px 0px;
`;

//ไอคอนกดเปิดปิด
const NavIcon=styled(Link)`
    margin-left:2rem;
    font-size:1rem;
    height:80px;
    display:flex;
    justify-content:flex-start;
    align-items: center;
    color:white;
   
`;//แถบsidebar
const SidebarNav = styled.nav`
    background:#545454;
    width:270px;
    height:100vh;
    display:flex;
    justify-content:center;
    position:fixed;
    top:0;
    left:${({ sidebar})=>(sidebar ? '0' :'-100%')};
    transition:350ms;
    z-index:10;
`;

const SideberWrap=styled.nav`
    width:100%;
`;



const StudentID="6400000021"
const Name="Firstname Lastname"


const Sidebar=({Logout})=>{
    const[sidebar,setSidebar]=useState(false)
    const showSidebar=()=>setSidebar(!sidebar)

 
// const Logout = () =>{ 
//     let history = useHistory();
//     let path = `.src/App`; 
//     history.push(path);
// }
        
    return(
        <>
            <Nav>
                <NavIcon to="#">
                    <FaBars onClick={showSidebar}/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SideberWrap>
                    <NavIcon to="#">
                        <IoArrowBack onClick={showSidebar}/>
                    </NavIcon>
                    <div className="UserProfile">
                        {StudentID} 
                        {Name}
                    </div>
                        {SidebarData.map((item,index)=>{
                                return <SubMenu item={item} key={index}/>;

                        })}
                    <div className="Logout" onClick={Logout}><BiLogOut/></div>

                </SideberWrap>
            </SidebarNav>
        </>
    )
}
export default Sidebar