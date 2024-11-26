import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Box = styled.div`
  width: 500px;
  height: 102px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #4a4e4d;
  cursor: pointer;

  display: flex; /* Flexbox로 정렬 */
  justify-content: center; /* Box를 수평 중앙 정렬 */
  align-items: center; /* Box를 수직 중앙 정렬 */

  color: #fff;
  font-family: D2Coding;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
`;

/*Hi! This is Seyeon’s Portfolio :)*/

export default function Hello() {
  return (
    <Box>
      <Typewriter
        options={{
          strings: ["Hi! This is Seyeon’s Portfolio :)"],
          autoStart: true,
          loop: false,
          deleteSpeed: Infinity, // 글씨가 지워지지 않도록 설정
          cursor: "|",
        }}
      />
    </Box>
  );
}
