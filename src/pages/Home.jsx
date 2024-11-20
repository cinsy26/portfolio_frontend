import React from "react";
import styled from "styled-components";
import Hello from "../components/Home/Hello";
import AboutMe from "../components/Home/AboutMe";
import Project from "../components/Home/Project";
import Storage from "../components/Home/Storage";
import Github from "../components/Home/Github";
import Study from "../components/Home/Study";
import Icon from "../components/Share/Icon";

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
  height: 850px;
  background: #fdfbf8;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
  box-sizing: border-box;
`;

const Left = styled.div`
  width: 200px;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Right = styled.div`
  width: 200px;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Top = styled.div`
  height: 60px;
  width: 1040px;

  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  align-items: center; /* 수직 가운데 정렬 */

  border: 1px solid black;
  box-sizing: border-box;
`;

const Content = styled.div`
  height: 715px;
  width: 1040px;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Bottom = styled.div`
  height: 75px;
  width: 1040px;
  border: 1px solid black;
  box-sizing: border-box;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContentLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

const ContentLayout2 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-top: 40px;
`;

export default function Home() {
  return (
    <Background>
      <Box>
        <Left></Left>
        <div>
          <Top>
            <Icon></Icon>
          </Top>

          <Content>
            <ContentLayout>
              <ItemsContainer>
                <Hello />
                <AboutMe />
              </ItemsContainer>
              <Project />
            </ContentLayout>
            <ContentLayout2>
              <Storage></Storage>
              <Github></Github>
              <Study></Study>
            </ContentLayout2>
          </Content>
          <Bottom></Bottom>
        </div>
        <Right></Right>
      </Box>
    </Background>
  );
}
