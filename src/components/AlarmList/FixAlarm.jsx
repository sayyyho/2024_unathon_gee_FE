import React, { useState } from "react";
import * as S from "./style";

const FixAlarm = (props) => {
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
                <S.arrowIcon src="/src/assets/images/ArrowIcon.png"></S.arrowIcon>
            </S.textBox>
            <S.fixIcon src="/src/assets/images/fixIcon.png" alt="수정 아이콘" /> {/* self-closing 태그로 수정 */}
            <S.Bar><hr /></S.Bar>
        </S.alarmWrapper>
    );
};

export default FixAlarm;

