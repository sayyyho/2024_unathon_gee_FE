import { Button } from "./style";
import { useNavigate } from "react-router-dom";

export const OffBtn = ({ backgroundColor, disabled }) => {
  const navigate = useNavigate();
  return (
    <Button
      $background={backgroundColor}
      disabled={disabled}
      onClick={() => {
        navigate("/");
      }}
    >
      알람 해제하기
    </Button>
  );
};
