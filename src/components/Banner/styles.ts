import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    margin-top: 7%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    background-color: #e0b973;
    padding: 1.5%;
    border-radius: 5px;
    height: 5%;
    width: 15%;
    font-weight: bold;
    white-space: nowrap;
    &:hover {
      text-decoration: underline;
    }
    span {
      margin-left: 7%;
      font-size: 1.5vw;
    }
    img {
      height: 15%;
      width: 15%;
    }
  }
  #scroll-icon {
    margin: 4% 0;
  }
`;

export const Title = styled.div`
  padding-top: 30vh;
  width: 100%;
  height: 70vh;
  img {
    width: fit-content;
    height: 100%;
    margin-left: 6%;
  }
`;
