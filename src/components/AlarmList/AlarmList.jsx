import React, { useState } from "react";
import * as S from "./style";

const AlarmList = (props) => {
    const [isOn, setIsOn] = useState(false);

    const toggleHandler = () => {
        setIsOn(!isOn);
    };

    return (
        <>
        <S.alarmWrapper>
            <S.textBox>
            <S.textWrapper>
                <p id="day">{props.day}</p>
                <p id="time">{props.time}</p>
            </S.textWrapper>
            <S.toggleContainer onClick={toggleHandler}>
                <S.Toggle isOn={isOn} />
            </S.toggleContainer>
            </S.textBox>
        </S.alarmWrapper>
        </>
    );
};

export default AlarmList;
