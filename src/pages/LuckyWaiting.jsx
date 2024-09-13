import { Header } from "../components/Header/Header";
import styled from "styled-components";

const Layout = styled.div`
  width: 95%;
`;

export const LuckyWaiting = () => {
  return (
    <Layout>
      <Header midDay={"오전"} time={"05:00"} />
    </Layout>
  );
};
