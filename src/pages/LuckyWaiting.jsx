import styled from "styled-components";
import { Header, Title, Scratch, OffBtn } from "../components";
import { useTime } from "../hooks/useTime";
const Layout = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LuckyWaiting = () => {
  const { time, midDay } = useTime();
  return (
    <Layout>
      <Header midDay={midDay} time={time} />
      <Title />
      <Scratch />
      <OffBtn />
    </Layout>
  );
};
