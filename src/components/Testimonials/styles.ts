import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #14274a;
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 2vw;
  }
  span {
    font-weight: 500;
    &:nth-child(2) {
      margin: 1.2% 0;
    }
  }
  @media only screen and (min-width: 1281px) {
    h1 {
      font-size: 1.5vw;
    }
    span {
      font-size: 1vw;
    }
  }
`;
export const ActionButtons = styled.div`
  display: flex;
  margin-top: 1%;
  margin-bottom: 4%;
  svg {
    color: #fff;
    width: 100%;
    height: 100%;
  }
  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: #e0b973;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    width: fit-content;
    min-width: 2vw;
    height: 4.5vh;
    &:first-child {
      margin-right: 30%;
    }
  }
`;
