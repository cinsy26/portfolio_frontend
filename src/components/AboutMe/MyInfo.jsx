import React from "react";
import styled from "styled-components";
import emailIcon from "../../assets/icon/email.png"; // email.png 경로
import githubIcon from "../../assets/icon/github.png"; // github.png 경로
import birthdayIcon from "../../assets/icon/birthday.png";
import universityIcon from "../../assets/icon/graduate.png";

const Box = styled.div`
  display: flex; /* Flexbox로 설정 */
  align-items: flex-start;
  width: 1040px;
  height: auto;

  margin-bottom: 50px;

  border: 1px solid yellow;
  box-sizing: border-box;
`;

const Image = styled.div`
  height: 250px;
  width: 250px;
  margin-left: 30px;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Info = styled.div`
  height: auto;
  width: 1040px;
  border: 1px solid green;
`;

const NameText = styled.div`
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
`;

const Text = styled.div`
  display: flex; /* 아이콘과 텍스트를 가로로 배치 */
  align-items: center; /* 아이콘과 텍스트 세로 정렬 */
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  margin-left: 30px;
`;

const ClickableText = styled(Text)`
  cursor: pointer; /* 마우스 포인터 변경 */
  &:hover {
    color: #e29f91; /* Hover 시 색상 변경 */
  }
`;

const LinkText = styled.a`
  display: flex; /* 아이콘과 텍스트를 가로로 배치 */
  align-items: center; /* 아이콘과 텍스트 세로 정렬 */
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  margin-left: 30px;
  text-decoration: none; /* 밑줄 제거 */
  &:hover {
    color: #e29f91; /* Hover 시 색상 변경 */
  }
`;

const IconWrapper = styled.div`
  display: flex; /* Flexbox로 아이콘 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 (선택적) */
  margin-right: 20px; /* 아이콘과 텍스트 사이 간격 */
`;

const IconImage = styled.img`
  width: 30px; /* 아이콘 너비 */
  height: 30px; /* 아이콘 높이 */
`;

export default function MyInfo() {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("kiteyeonn@gmail.com").then(() => {
      alert("이메일 주소가 복사되었습니다!");
    });
  };
  return (
    <Box>
      <Image></Image>

      <Info>
        <NameText>임세연</NameText>
        <Text>
          <IconWrapper>
            <IconImage src={birthdayIcon} alt="birthday Icon"></IconImage>
          </IconWrapper>
          2002.12.02
        </Text>
        <Text>
          <IconWrapper>
            <IconImage src={universityIcon} alt="University Icon"></IconImage>
          </IconWrapper>
          서울여자대학교
        </Text>
        <ClickableText onClick={handleEmailClick}>
          <IconWrapper>
            <IconImage src={emailIcon} alt="Email Icon" />
          </IconWrapper>
          kiteyeonn@gmail.com
        </ClickableText>
        <LinkText
          href="https://github.com/cinsy26"
          target="_blank"
          rel="noopener noreferrer">
          <IconWrapper>
            <IconImage src={githubIcon} alt="GitHub Icon" />
          </IconWrapper>
          https://github.com/cinsy26
        </LinkText>
      </Info>
    </Box>
  );
}
