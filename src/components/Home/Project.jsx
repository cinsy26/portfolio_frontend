import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  border-radius: 50px;
  background: #aabda2;

  &:hover {
    box-shadow: 8px 8px 15px 0px rgba(0, 0, 0, 0.3);
    background: #c6d5b9; /* 배경색 변경 */
    transform: scale(1.05); /* 크기 확대 */
=  }
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

export default function Project() {
  return (
    <Box>
      <Text>Project</Text>
    </Box>
  );
}
