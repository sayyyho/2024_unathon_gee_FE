import { useState, useEffect, useRef } from "react";

export const useScratch = (backgroundImage, threshold = 5) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const background = new Image();
    background.src = backgroundImage;
    background.onload = () => {
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      // 회색 레이어 생성
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "gray";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
  }, [backgroundImage]);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    checkReveal();
  };

  const draw = (x, y) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; // 투명도를 조절하여 점진적으로 드러나게
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    // 매번 그릴 때마다 긁힌 영역이 일정 이상이면 전체를 벗기도록 체크
    checkReveal();
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

  const checkReveal = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let scratched = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] < 128) {
        // 투명도가 50% 이하인 픽셀을 셈
        scratched++;
      }
    }

    const total = pixels.length / 4;
    const percentScratched = (scratched / total) * 100;

    if (percentScratched > threshold) {
      setRevealed(true);

      // 전체를 드러나게 하는 동작
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const background = new Image();
      background.src = backgroundImage;
      background.onload = () => {
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      };
    }
  };

  return {
    canvasRef,
    startDrawing,
    endDrawing,
    handleMouseMove,
    handleTouchMove,
    revealed,
  };
};
