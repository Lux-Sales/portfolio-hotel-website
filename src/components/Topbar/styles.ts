import styled from "styled-components";

export const ButtonsNav = styled.div`
  width: 35vw;
  position: relative;
  left: 90%;
  white-space: nowrap;
  a {
    font-size: 1.2vw;
    color: #ffffff;
    margin: 0 5%;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .activeLink {
    text-decoration: underline;
    font-weight: 700;
  }
`;

export const Container = styled.div`
  background-color: transparent;
  padding: 0 5%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  img {
    position: relative;
    height: 10vh;
    width: 10vw;
  }
`;
