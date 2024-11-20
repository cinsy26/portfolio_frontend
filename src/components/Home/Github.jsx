import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: 455px;
  height: 175px;
  border-radius: 50px;
  background: #4a4e4d;

  &:hover {
    background: #6c757d; /* 배경색 변경 */
    transform: scale(1.05); /* 크기 확대 */
  }
`;

const Text = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  padding: 50px;
  box-sizing: border-box;
`;

export default function Github() {
  return (
    <Box>
      <Text>Github</Text>
    </Box>
  );
}
