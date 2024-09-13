import React, { useState } from "react";
import * as S from "./style";

const AlarmList = (props) => {
    const [isOn, setIsOn] = useState(false);

    const toggleHandler = () => {
        setIsOn(!isOn);
    };

    return (
        <S.alarmWrapper>
            <S.textBox>
                <S.textWrapper>
                    <p id="day">{props.day} AM</p>
                    <p id="time">{props.time} 8:00</p>
                </S.textWrapper>
                <S.toggleContainer onClick={toggleHandler}>
                    <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`}>
                        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}></div>
                    </div>
                </S.toggleContainer>
            </S.textBox>
            <S.Bar><hr/></S.Bar>
        </S.alarmWrapper>
    );
};

export default AlarmList;
