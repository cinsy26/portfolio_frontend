import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed; /* 화면 고정 */
  top: 50%; /* 화면의 정중앙 */
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */

  width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4a4e4d;
  background: #ffffff;
  z-index: 1000; /* 배경보다 위로 */
`;

const Left = styled.div`
  width: 50px;
  height: 400px;

  border: 1px solid black;
  box-sizing: border-box;
`;

const Right = styled.div`
  width: 50px;
  height: 400px;

  border: 1px solid black;
  box-sizing: border-box;
`;

const Box = styled.div`
  width: 400px;
  height: 400px;
`;

const TitleText = styled.div`
  height: 35px;

  color: #4a4e4d;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-top: 20px;
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center;

  border: 1px solid black;
`;

const SubText = styled.div`
  height: 30px;
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const DateText = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DateInput = styled.div`
  height: 30px;
  width: 150px;
  border: 1px solid black;
  border-radius: 10px;
`;

export default function TimelineModal() {
  return (
    <Modal>
      <Left></Left>
      <Box>
        <TitleText>Timeline 추가</TitleText>
      </Box>
      <Right></Right>
    </Modal>
  );
}
