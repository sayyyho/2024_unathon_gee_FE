import React from "react";
import styled from "styled-components";
import { Layout } from "./style";
import { Header, Title } from "../components";
import { useTime } from "../hooks/useTime";
import { useRandom } from "../hooks/useRandom";
import { useFortune } from "../hooks/useFortune";
import LOGO from "../assets/images/logo.png";

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

export const Main = () => {
  const { midDay, time } = useTime();
  const luckyIndex = useRandom();
  const fortune = useFortune();
  return (
    <Layout>
      <Header midDay={midDay} time={time} />
      <Title>반갑습니다! 운리미입니다!</Title>
      <Result>
        <img src={LOGO} alt="" />
        <div
          style={{
            marginTop: "1rem",
          }}
        ></div>
      </Result>
    </Layout>
  );
};
