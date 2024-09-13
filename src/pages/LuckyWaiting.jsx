import { Layout } from "./style";
import { Header, Title, Scratch, OffBtn } from "../components";
import { useTime } from "../hooks/useTime";

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
