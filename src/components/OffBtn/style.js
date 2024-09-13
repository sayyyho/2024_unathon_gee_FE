import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background: ${(props) => (props.$background ? props.$background : "#d9d9d9")};
  padding: 2rem 0;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border: none;
  margin-top: 2rem;
`;
