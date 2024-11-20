import React from "react";
import styled from "styled-components";
import StorageBackground from "../../assets/StorageBackground.jpeg"; // 이미지 경로

const Box = styled.div`
  width: 175px;
  height: 175px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #aabda2;

  &:hover {
    background-image: url(${StorageBackground});
    background-size: cover;
    background-position: center;
    transform: scale(1.05); /* 크기 확대 */
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.25);
  }
`;

export default function Storage() {
  return <Box></Box>;
}
