import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // React Router의 Link 컴포넌트
import InputBox from "../components/Share/InputBox";

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fdfbf8;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 350px;

  border: 1px solid black;
  box-sizing: border-box;
`;

const TitleText = styled.div`
  width: 90px;
  height: 40px;
  color: #000;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  margin-left: 130px;
`;

const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #000;
  background: #aabda2;

  color: #fdfbf8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 166.667% */

  margin-top: 50px;
  margin-left: 25px;
`;
const SignupText = styled(Link)`
  width: 70px;
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 200% */
  margin-left: 140px;
  margin-top: 10px;
  text-decoration: none; /* 기본 밑줄 제거 */
  &:hover {
    text-decoration: underline; /* 호버 시 밑줄 표시 */
  }
`;
export default function Login() {
  return (
    <Background>
      <Box>
        <TitleText>로그인</TitleText>
        <InputBox
          label="이메일"
          type="email"
          placeholder="이메일을 입력하세요"></InputBox>
        <InputBox
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"></InputBox>
        <LoginButton>로그인</LoginButton>
        <SignupText to="/signup">Sign Up</SignupText>
      </Box>
    </Background>
  );
}
