import { useState, useEffect } from "react";

export const useTime = () => {
  const [time, setTime] = useState("");
  const [midDay, setMidDay] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const isAM = hours < 12;
      const displayHours = hours % 12 || 12; // 12시간제 포맷으로 변환
      const formattedTime = `${displayHours}:${minutes}`;

      setTime(formattedTime);
      setMidDay(isAM ? "오전" : "오후");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // 1초마다 시간 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return { time, midDay };
};
