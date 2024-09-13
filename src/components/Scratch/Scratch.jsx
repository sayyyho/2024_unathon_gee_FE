import React from "react";
import { useScratch } from "../../hooks/useScratch";
import { Layout, MsgView } from "./style";
import LUCKY_IMAGE from "../../assets/images/lucky.png";

export const Scratch = () => {
  const {
    canvasRef,
    startDrawing,
    endDrawing,
    handleMouseMove,
    handleTouchMove,
    revealed,
    messageShow,
  } = useScratch(LUCKY_IMAGE);

  return (
    <>
      <Layout
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={handleMouseMove}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onTouchStart={startDrawing}
        onTouchMove={handleTouchMove}
        onTouchEnd={endDrawing}
      />
      {revealed && messageShow && (
        <MsgView>
          <div>행운의 기운이 넘쳐나네요.</div>
          <div>기분 좋은 하루가 될 거에요!</div>
        </MsgView>
      )}
    </>
  );
};
