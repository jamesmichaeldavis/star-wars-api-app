import React from "react";
import styled from "styled-components";
import Theme from "../styles/Theme";

import logo from "../assets/svgs/logo.svg";

const Header = styled.header`
  padding: 60px 0;

  color: white;
  font-size: ${Theme.FONT_SIZE_TEXT_DEFAULT};
  text-align: center;
`;

const Logo = styled.div`
  img {
    margin-bottom: 30px;
    height: 80px;

    @media (min-width: 30em) {
      height: 160px;
    }
  }
`;

export const AppHeader = () => {
  return (
    <Header>
      <Logo>
        <img src={logo} alt="Star Wars logo" />
      </Logo>
      <p>Search your favourite Star Wars characters below.</p>
    </Header>
  );
};
