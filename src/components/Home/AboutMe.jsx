import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: 500px;
  height: 359px;
  border-radius: 50px;
  background: #f6d7d2;

  &:hover {
    background: #f8e0da; /* 배경색 변경 */
    transform: scale(1.05); /* 크기 확대 */
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.25);
  }
`;

const Text = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  padding: 50px;
  box-sizing: border-box;
`;

export default function AboutMe() {
  return (
    <Box>
      <Text>About Me</Text>
    </Box>
  );
}
