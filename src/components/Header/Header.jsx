import { Layout, Text, Image, TitleBox } from "./style";
import LUCKY_IMAGE from "../../assets/images/lucky.png";

export const Header = ({ midDay, time }) => {
  return (
    <Layout>
      <Image src={LUCKY_IMAGE} />
      <TitleBox>
        <Text $fontSize="30px">{midDay}</Text>
        <Text $fontSize="60px">{time}</Text>
      </TitleBox>
    </Layout>
  );
};
