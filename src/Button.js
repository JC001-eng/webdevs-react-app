import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

// Styled components styling
const StyledButton = styled.button`
  background-color: #111;
  color: #fff;
  padding: 12px 28px;
  text-transform: uppercase;
  border: 1px solid #fff;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
`;

function Button() {
  return (
    <StyledButton>
      <p>
        <a href="goop.com" target="_blank" rel="noopener noreferrer">
          Shop Now
        </a>
      </p>
    </StyledButton>
  );
}

export default Button;
