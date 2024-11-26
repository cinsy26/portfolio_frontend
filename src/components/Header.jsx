import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const Box = styled.div`
  display: flex; /* Flexbox 사용 */
  gap: 50px; /* 요소 간 간격 */
  flex-direction: row; /* 가로 배치 */
  align-items: center; /* 세로 정렬 (중앙) */
`;

const Text = styled.div`
  color: #4a4e4d;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: ${(props) =>
    props.isActive ? "bold" : "500"}; /* 클릭된 항목 Bold */
  line-height: 40px; /* 125% */
  cursor: pointer; /* 클릭 가능하도록 포인터 추가 */
`;

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box>
      <Text
        isActive={location.pathname === "/aboutme"}
        onClick={() => handleNavigate("/aboutme")}>
        About Me
      </Text>
      <Text
        isActive={location.pathname === "/project"}
        onClick={() => handleNavigate("/project")}>
        Project
      </Text>
    </Box>
  );
}
