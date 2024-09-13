import React, { useState } from "react";
import * as S from "./style"; // 스타일을 가져오는 부분

const Modal_add = ({ onClose }) => {
  const [ampm, setAmpm] = useState("오전"); // 오전/오후 상태
  const [hour, setHour] = useState(12); // 시간 상태
  const [minute, setMinute] = useState(9); // 분 상태

  const increaseHour = () => {
    setHour((prev) => (prev === 12 ? 1 : prev + 1));
  };

  const decreaseHour = () => {
    setHour((prev) => (prev === 1 ? 12 : prev - 1));
  };

  const increaseMinute = () => {
    setMinute((prev) => (prev === 59 ? 0 : prev + 1));
  };

  const decreaseMinute = () => {
    setMinute((prev) => (prev === 0 ? 59 : prev - 1));
  };

  const toggleAmpm = () => {
    setAmpm((prev) => (prev === "오전" ? "오후" : "오전"));
  };

  return (
    <S.ModalOverlay>
      <S.ModalBox>
        <S.ModalTitle>알람 추가</S.ModalTitle>
        <S.DatePicker>
          <div className="time-selector">
            <button onClick={toggleAmpm}>▲</button>
            <button onClick={increaseHour}>▲</button>
            <button onClick={increaseMinute}>▲</button>
          </div>
          <div className="time-display">
            <p>{ampm}</p>
            <p>{hour.toString().padStart(2, "0")}</p>
            <p>{minute.toString().padStart(2, "0")}</p>
          </div>
          <div className="time-selector">
            <button onClick={toggleAmpm}>▼</button>
            <button onClick={decreaseHour}>▼</button>
            <button onClick={decreaseMinute}>▼</button>
          </div>
        </S.DatePicker>
        <S.Submit>저장하기</S.Submit>
        <S.Exit onClick={onClose} src="/src/assets/images/exitIcon.png" alt="닫기" />
      </S.ModalBox>
    </S.ModalOverlay>
  );
};

export default Modal_add;
