import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #14274a;
  margin-top: 3%;
  h1 {
    font-size: 3vw;
  }
  p {
    width: 80%;
    text-align: center;
    margin: 3% 0;
  }
`;

export const RoomList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  div {
    &:nth-child(2) {
      margin: 5% 0;
    }
  }
`;
