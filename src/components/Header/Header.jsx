import { Layout, Text, Image, TitleBox } from "./style";

export const Header = ({ midDay, time }) => {
  return (
    <Layout>
      <TitleBox>
        <Text $fontSize="30px">{midDay}</Text>
        <Text $fontSize="60px">{time}</Text>
      </TitleBox>
    </Layout>
  );
};
