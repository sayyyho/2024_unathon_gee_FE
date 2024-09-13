import React from "react";
import { Link } from "react-router-dom";
import AlarmList from "../../components/AlarmList/AlarmList";
import Header from "../../components/AlarmList/Header";
import FixAlarm from "../../components/AlarmList/FixAlarm";


const AlarmLsitPage =() =>{
    return(
        <>
            <Header/>
            <AlarmList/>
            <FixAlarm/>
        </>
    );
}

export default AlarmLsitPage;