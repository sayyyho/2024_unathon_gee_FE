import { useState, useEffect } from "react";
import { FORTUNE_LIST } from "../constant/fortune";

export const useFortune = () => {
  const [fortune, setFortune] = useState(null);

  useEffect(() => {
    const getStoredFortune = () => {
      const storedFortune = localStorage.getItem("dailyFortune");
      const storedDate = localStorage.getItem("fortuneDate");

      // 오늘 날짜와 로컬 스토리지에 저장된 날짜를 비교
      const today = new Date().toLocaleDateString();
      if (storedFortune && storedDate === today) {
        return storedFortune;
      }

      return null;
    };

    const setDailyFortune = () => {
      const storedFortune = getStoredFortune();

      if (storedFortune) {
        setFortune(storedFortune);
      } else {
        // FORTUNE_LIST 배열에서 랜덤으로 하나의 운세 선택
        const randomIndex = Math.floor(Math.random() * FORTUNE_LIST.length);
        const newFortune = FORTUNE_LIST[randomIndex];

        // 로컬 스토리지에 오늘 날짜와 함께 저장
        localStorage.setItem("dailyFortune", newFortune);
        localStorage.setItem("fortuneDate", new Date().toLocaleDateString());
        setFortune(newFortune);
      }
    };

    setDailyFortune();
  }, []);

  return fortune;
};
