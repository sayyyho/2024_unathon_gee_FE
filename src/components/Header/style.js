import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ececec;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${(props) => props.$fontSize};
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Image = styled.img`
  src: ${(props) => props.src};
`;
