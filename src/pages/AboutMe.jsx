import React, { useState } from "react";
import styled from "styled-components";
import MyInfo from "../components/AboutMe/MyInfo";
import Icon from "../components/Share/Icon";
import Header from "../components/Header";
import TimelineComponent from "../components/AboutMe/Timeline";
import plusicon from "../assets/icon/plus.png";
import TimelineModal from "../components/AboutMe/TimelineModal";

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #e29f91;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 1440px;
  height: 910px;
  background: #fdfbf8;

  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* 상단 정렬 */
  position: relative; /* 모달과 겹치게 설정 */
`;

const Left = styled.div`
  width: 200px;
  height: 100%;
`;

const Right = styled.div`
  width: 200px;
  height: 100%;
`;

const Top = styled.div`
  height: 60px;
  width: 1040px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Container = styled.div`
  height: 20px;
  width: 1040px;
`;

const HeaderBox = styled.div`
  height: 60px;
  width: 1040px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  height: auto;
  width: 1040px;
  border: 1px solid red;
`;

const Line = styled.div`
  height: 4px;
  width: 1040px;
  background: #4a4e4d;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

const TitleText = styled.div`
  height: 35px;
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PlusIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const PlusIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* 흐리게 처리 */
  z-index: 999; /* 모달 위로 */
`;

export default function AboutMe() {
  const [showModal, setShowModal] = useState(false);

  const handlePlusIconClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Background>
      <Box>
        <Left></Left>
        <div>
          <Top>
            <Icon />
          </Top>
          <HeaderBox>
            <Header />
          </HeaderBox>
          <Container />
          <Content>
            <MyInfo />
            <Line />
            <Timeline>
              <TitleText>Timeline</TitleText>
              <TimelineComponent
                date="2022.03.02 - 현재"
                content="This is a timeline event."
              />
              <TimelineComponent
                date="2024.03.02 - 2024.08.23"
                content="Another timeline event."
              />
            </Timeline>
            <PlusIconWrapper>
              <PlusIcon
                src={plusicon}
                alt="Add more"
                onClick={handlePlusIconClick}
              />
            </PlusIconWrapper>
            <Line />
          </Content>
        </div>

        <Right></Right>
      </Box>
      {showModal && (
        <>
          <Overlay onClick={handleCloseModal} />
          <TimelineModal onClose={handleCloseModal} />
        </>
      )}
    </Background>
  );
}
