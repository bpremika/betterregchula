import React from "react";
import {FaBars} from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { IoInformationCircleSharp } from 'react-icons/io5'
import { IoDocumentsSharp } from 'react-icons/io5';
import { MdOutlineSubject } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';

export const SidebarData = [
    {
        title: "หน้าหลัก",
        icon: < AiFillHome />,
        path: "/home"
    },
    {
        title: "ข้อมูลทั่วไป",
        icon: <IoInformationCircleSharp />,
        path: "/information",
        iconClosed:<RiArrowDownSLine/>,
        iconOpened:<RiArrowUpSLine/>,
        subNav: [
            {
                title: "ตารางสอน",
                path: "/information/CourseSchedule"
            },
            {
                title: "ตารางสอบ",
                path: "/information/ExamSchedule"
            },
            {
                title: "รหัสอาคาร",
                path: "/information/building"
            },
            {
                title: "รหัสคณะ",
                path: "/information/Faculty"
            },
        ]
    },
    {
        title: "เอกสารสำคัญ",
        icon: <IoDocumentsSharp />,
        path: "/document",
        iconClosed:<RiArrowDownSLine/>,
        iconOpened:<RiArrowUpSLine/>,
        subNav: [
            {
                title: "จท19",
                path: "/document/JT19"
            },
            {
                title: "จท20/20ก",
                path: "/document/CR20-Cr20G"
            },
            {
                title: "หลักฐานรับรองแสดงสถานภาพการเป็นนิสิต",
                path: "/document/CertificateofStudentStatus "
            },
            {
                title: "ทะเบียนชื่อ/ระเบียนประวัติ",
                path: "/document/StudentPersonalRecords"
            },
        ]
    },
    {
        title: "วิชาเรียน",
        icon: <MdOutlineSubject />,
        path: "/Subject",
        iconClosed:<RiArrowDownSLine/>,
        iconOpened:<RiArrowUpSLine/>,
        subNav: [
            {
                title: "ลงทะเบียนเรียน",
                path: "/Subject/Registration"
            },
            {
                title: "ถอนรายวิชา",
                path: "/Subject/Course Withdraw"
            },
            {
                title: "ผลการลงทะเบียนเรียน",
                path: "/Subject/RegistrationResult"
            },
            {
                title: "ผลการเรียน",
                path: "/Subject/EducateResult"
            },
        ]
    },
];
