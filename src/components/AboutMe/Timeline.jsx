import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1040px;
  height: 50px;

  display: flex; /* Flexbox 사용 */
  justify-content: space-between; /* 왼쪽과 오른쪽 배치 */
  align-items: center; /* 세로 중앙 정렬 */
`;

const DateText = styled.div`
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Content = styled.div`
  width: 700px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #4a4e4d;
  background: #fdfbf8;
  display: flex; /* 내부 텍스트 정렬용 */
  align-items: center; /* 세로 중앙 정렬 */
  padding: 0 15px; /* 내부 여백 추가 */
`;

const Text = styled.div`
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
`;

export default function TimelineComponent({ activities }) {
  return (
    <div>
      {activities && activities.length > 0 ? (
        activities.map((activity) => (
          <Container key={activity.id}>
            <DateText>
              {activity.startdate} - {activity.enddate}
            </DateText>
            <Content>
              <Text>{activity.content}</Text>
            </Content>
          </Container>
        ))
      ) : (
        <EmptyMessage>현재 표시할 활동이 없습니다.</EmptyMessage>
      )}
    </div>
  );
}
