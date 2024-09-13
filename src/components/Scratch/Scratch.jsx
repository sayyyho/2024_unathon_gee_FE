import React from "react";
import { useScratch } from "../../hooks/useScratch";
import { CanvasLayout, Layout } from "./style";
import LUCKY_IMG from "../../assets/images/lucky.svg";

export const Scratch = () => {
  const {
    canvasRef,
    startDrawing,
    endDrawing,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    revealed,
  } = useScratch();

  return (
    <Layout>
      {!revealed && (
        <>
          <img
            src={LUCKY_IMG}
            alt="행운의 이미지"
            style={{
              position: "absolute",
              top: "25%",
              left: "33%",
            }}
          />
          <img
            src={LUCKY_IMG}
            alt="행운의 이미지"
            style={{
              position: "absolute",
              top: "35%",
              left: "58%",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "52%",
            }}
          >
            오늘은 어떤 행운이 기다리고 있을까?
          </div>
          <img
            src={LUCKY_IMG}
            alt="행운의 이미지"
            style={{
              position: "absolute",
              top: "60%",
              left: "40%",
            }}
          />
        </>
      )}

      <CanvasLayout
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={handleMouseMove}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={endDrawing}
      />
    </Layout>
  );
};
