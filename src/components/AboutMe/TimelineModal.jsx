import React, { useState } from "react";
import styled from "styled-components";
import closeicon from "../../assets/icon/close.png";
import { createActivity } from "../../api/AboutMe/Timeline";

const Modal = styled.div`
  position: fixed; /* 화면 고정 */
  top: 50%; /* 화면의 정중앙 */
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  border-radius: 10px;
  width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  z-index: 1000; /* 배경보다 위로 */
`;

const Left = styled.div`
  width: 50px;
  height: 400px;
`;

const Right = styled.div`
  width: 50px;
  height: 400px;
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

  margin-top: 30px;
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center;
`;

const SubText = styled.div`
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
`;

const DateContent = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Date = styled.div`
  display: flex; /* 가로 배치 */
  justify-content: space-between; /* 왼쪽과 오른쪽에 붙게 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const DateInput = styled.input`
  height: 30px;
  width: 150px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center; /* 텍스트와 체크박스를 세로로 중앙 정렬 */
  justify-content: flex-end; /* 오른쪽 정렬 */
  margin-top: 10px;
  margin-right: 20px;
  width: calc(100% - 20px);
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  margin-right: 8px; /* 텍스트와의 간격 */
`;

const Content = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex; /* Flexbox 사용 */
  flex-direction: column; /* 세로 방향 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

const ContentInput = styled.textarea`
  width: 400px;
  height: 80px; /* 높이를 늘려 여러 줄 입력 가능 */
  border-radius: 10px;
  border: 1px solid black;
  outline: none; /* 포커스 시 파란 테두리 제거 */
  resize: none; /* 사용자가 크기 조절하지 못하도록 설정 */
  padding: 10px; /* 내부 여백 추가 */
  font-family: Roboto, sans-serif; /* 텍스트 스타일 */
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
`;

const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
  margin-top: 10px;
`;

const PlusButton = styled.button`
  height: 35px;
  width: 100px;
  background-color: #fdfbf8;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;

  display: block; /* 기본 블록 요소로 설정 */
  margin: 20px auto;
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default function TimelineModal({ onClose }) {
  const [isOngoing, setIsOngoing] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [content, setContent] = useState("");

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`; // YYYY-MM-DD 형식 반환
  };

  const handleCheckboxChange = () => {
    const isNowOngoing = !isOngoing; // 체크박스 상태 반전
    setIsOngoing(isNowOngoing);
    if (isNowOngoing) {
      setEndDate(getCurrentDate()); // "진행중" 체크 시 오늘 날짜로 설정
    } else {
      setEndDate(""); // 체크 해제 시 초기화
    }
  };

  const formatDate = (value) => {
    const cleaned = value.replace(/\D/g, ""); // 숫자만 추출
    const year = cleaned.substring(0, 4);
    const month = cleaned.substring(4, 6);
    const day = cleaned.substring(6, 8);

    if (cleaned.length >= 8) {
      return `${year}-${month}-${day}`; // YYYY-MM-DD 형식
    } else if (cleaned.length >= 6) {
      return `${year}-${month}`; // YYYY-MM 형식
    } else if (cleaned.length >= 4) {
      return `${year}`; // YYYY 형식
    }
    return cleaned;
  };

  const handleStartDateBlur = () => {
    setStartDate(formatDate(startDate)); // 포맷 적용
  };

  const handleEndDateBlur = () => {
    setEndDate(formatDate(endDate)); // 포맷 적용
  };

  const handleSubmit = async () => {
    const activityData = {
      startdate: formatDate(startDate), // 포맷팅 적용
      enddate: isOngoing ? getCurrentDate() : formatDate(endDate), // "진행중"이면 오늘 날짜, 아니면 포맷팅
      content,
    };

    console.log("Sending activity data:", activityData); // 디버깅용
    try {
      await createActivity(activityData); // API 호출
      alert("활동이 성공적으로 추가되었습니다!");
      onClose(); // 모달 닫기
    } catch (error) {
      alert("활동 추가에 실패했습니다. 다시 시도해주세요.");
      console.error("Error while creating activity:", error);
    }
  };

  return (
    <Modal>
      <Left></Left>
      <Box>
        <TitleText>Timeline 추가</TitleText>
        <DateContent>
          <SubText>기간</SubText>
          <Date>
            <DateInput
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)} // 입력 도중에는 포맷팅하지 않음
              onBlur={handleStartDateBlur} // 입력 완료 후 포맷 적용
              placeholder="시작 날짜"
            />
            --
            <DateInput
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)} // 입력 도중에는 포맷팅하지 않음
              onBlur={handleEndDateBlur} // 입력 완료 후 포맷 적용
              placeholder="종료 날짜"
              disabled={isOngoing} // "진행중" 체크 시 비활성화
            />
          </Date>
          <CheckboxWrapper>
            <Checkbox checked={isOngoing} onChange={handleCheckboxChange} />
            진행중
          </CheckboxWrapper>
        </DateContent>
        <SubText>내용</SubText>
        <Content>
          <ContentInput
            value={content}
            onChange={(e) => setContent(e.target.value)} // 입력값 상태 저장
          />
        </Content>
        <PlusButton onClick={handleSubmit}>추가</PlusButton>
      </Box>
      <Right>
        <CloseIcon src={closeicon} onClick={onClose} />
      </Right>
    </Modal>
  );
}
