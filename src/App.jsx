import React from "react";
import { styled, ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";

const Frame = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Content = styled.div`
  flex-grow: 1;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  return (
    <Frame>
      <Wrapper>
        <Content>
          <Outlet />
        </Content>
      </Wrapper>
    </Frame>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
