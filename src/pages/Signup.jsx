import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #e29f91;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Signup() {
  return <Background>Signup 페이지 입니다.</Background>;
}
