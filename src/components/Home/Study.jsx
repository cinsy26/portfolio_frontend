import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: 330px;
  height: 175px;
  border-radius: 50px;
  background: #e29f91;

  &:hover {
    background: #f3b5a6; /* 배경색 변경 */
    transform: scale(1.05); /* 크기 확대 */
  }
`;

const Text = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  padding: 50px;
  box-sizing: border-box;
`;

export default function Study() {
  return (
    <Box>
      <Text>Study</Text>
    </Box>
  );
}
