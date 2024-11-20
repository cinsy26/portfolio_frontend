import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 350px;
  height: 90px;
  margin-top: 5px;

  display: flex; /* Flexbox 활성화 */
  flex-direction: column; /* 세로 정렬 */
  align-items: flex-start;
`;

const Input = styled.div`
  width: 350px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #000;
  background: #fdfbf8;
`;

const Text = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

export default function InputBox({ label }) {
  return (
    <Box>
      <Text>{label}</Text>
      <Input></Input>
    </Box>
  );
}
