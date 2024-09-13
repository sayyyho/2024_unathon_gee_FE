import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useScratch = (threshold = 400) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [scratchedArea, setScratchedArea] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 회색 배경 레이어 생성
    ctx.fillStyle = "rgba(242, 242, 242, 0.50)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = () => {
    if (!revealed) {
      setIsDrawing(true);
      setRevealed(true); // 첫 터치 시 revealed를 true로 설정하여 이미지와 텍스트를 영구적으로 숨김
    }
  };

  const endDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
    }
  };

  const draw = (x, y) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 검정색으로 선을 그리기 위해 설정
    ctx.fillStyle = "black"; // 검정색으로 설정
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2); // 원형으로 긁기
    ctx.fill();

    // 긁힌 영역을 추적
    const area = Math.PI * 20 * 20; // 원의 면적 계산
    setScratchedArea((prevArea) => prevArea + area);

    // 전체 캔버스 면적과 비교하여 비율 계산
    const totalArea = canvas.width * canvas.height;
    const percentScratched = (scratchedArea / totalArea) * 100;

    if (percentScratched > threshold) {
      navigate("/lucky/end"); // 일정 비율 이상 긁히면 페이지 이동
    }
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    draw(x, y);
  };

  const handleTouchMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    draw(x, y);
  };

  const handleTouchStart = (e) => {
    startDrawing();
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    draw(x, y);
  };

  return {
    canvasRef,
    startDrawing,
    endDrawing,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    revealed,
    isDrawing,
  };
};
