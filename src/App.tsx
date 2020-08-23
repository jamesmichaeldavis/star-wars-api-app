import React from "react";
import styled from "styled-components";

import { AppHeader, AppFooter } from "./core";
import Characters from "./components/Characters";

import Space from "./assets/images/space.jpg";

const Layout = styled.div`
  padding: 0 30px;
  min-height: 100vh;

  background-image: url(${Space});
`;

export const App = () => {
  return (
    <Layout>
      <AppHeader />
      <Characters />
      <AppFooter />
    </Layout>
  );
};

export default App;
