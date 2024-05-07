import styled from "styled-components";
export const HomeContentsContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const SearchSectionContainer = styled.section`
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* 상위 요소에 상대 위치 지정 */

  /* 배경 이미지 설정 */
  background-image: url("https://storage.surfit.io/env/landing/w64l3/img-1690301971650868c0c5dd3.jpg");
  background-size: cover;
  background-position: center;

  /* ::before 가상 요소를 이용한 색 오버레이 추가 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 27, 30, 0.6); /* 원하는 색상과 투명도 설정 */
    z-index: 1; /* 내용물이 오버레이 아래에 오도록 z-index 설정 */
  }

  /* 내용을 올바르게 표시하기 위해 자식 요소의 z-index 조정 */
  > * {
    position: relative;
    z-index: 2;
  }
`;

export const HomeContentsInnerContainer = styled.div`
  width: 1250px;
  height: 700px;
  display: flex;
`
export const CategoryUl = styled.ul`
  margin-top: 40px;`
export const CategoryNav = styled.nav`
  height: 100%;
  width: 20%;
  display: flex;
`
export const HomeMainContentsContainer = styled.div`
  background-color: darkgoldenrod;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`

export const HomeMainContents = styled.section`
  background-color: lightblue;
  margin: 40px 50px;
  height: 40px;
  width: 33%;
`


