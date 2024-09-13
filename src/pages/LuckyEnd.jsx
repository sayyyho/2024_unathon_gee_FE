import React from "react";
import styled from "styled-components";
import { Layout } from "./style";
import { Header, Title, OffBtn } from "../components";
import { useTime } from "../hooks/useTime";
import { useRandom } from "../hooks/useRandom";
import LOGO from "../assets/images/logo.png";
import { useFortune } from "../hooks/useFortune";

const Result = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: rgba(242, 242, 242, 0.5); */
  margin-top: 1rem;
  border: 1px solid #c0c0c0;
`;

export const LuckyEnd = () => {
  const { midDay, time } = useTime();
  const luckyIndex = useRandom();
  const fortune = useFortune();
  return (
    <Layout>
      <Header midDay={midDay} time={time} />
      <Title />
      <Result>
        <img src={LOGO} alt="" />
        <div>오늘의 행운지수: {luckyIndex}</div>
        <div
          style={{
            marginTop: "1rem",
          }}
        >
          {fortune}
        </div>
      </Result>
      <OffBtn backgroundColor={"#E2FFCD"} />
    </Layout>
  );
};
