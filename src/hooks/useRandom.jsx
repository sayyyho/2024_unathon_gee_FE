import { useState, useEffect } from "react";

export const useRandom = () => {
  const [luckyIndex, setLuckyIndex] = useState(null);

  useEffect(() => {
    const today = new Date().toLocaleDateString(); // 오늘 날짜를 문자열로 저장
    const storedLuckyIndex = localStorage.getItem("luckyIndex");
    const storedDate = localStorage.getItem("luckyIndexDate");

    if (storedDate === today && storedLuckyIndex) {
      // 오늘 날짜와 동일하면 저장된 값을 사용
      setLuckyIndex(storedLuckyIndex);
    } else {
      // 오늘의 랜덤 행운지수 생성
      const randomLuckyIndex = Math.floor(Math.random() * 31) + 70;
      setLuckyIndex(randomLuckyIndex);
      // 값을 localStorage에 저장
      localStorage.setItem("luckyIndex", randomLuckyIndex);
      localStorage.setItem("luckyIndexDate", today);
    }
  }, []);

  return luckyIndex;
};
