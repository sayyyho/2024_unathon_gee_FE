import { Layout } from "./style";
import { Header, Title, Scratch, OffBtn } from "../components";
import { useTime } from "../hooks/useTime";

export const LuckyWaiting = () => {
  const { time, midDay } = useTime();
  return (
    <Layout>
      <Header midDay={midDay} time={time} />
      <Title>스크래치를 긁어서 오늘의 운세를 확인하세요</Title>
      <Scratch />
      <OffBtn disabled={true} />
    </Layout>
  );
};
