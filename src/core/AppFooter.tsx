import React from "react";
import styled from "styled-components";
import Theme from "../styles/Theme";

const Footer = styled.footer`
  padding: 60px 0;

  color: white;
  font-size: ${Theme.FONT_SIZE_TEXT_XS};
  text-align: center;
`;

export const AppFooter = () => {
  return (
    <Footer>
      <p>A small app created by James Michael Davis.</p>
    </Footer>
  );
};
