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

  @media only screen and (min-width: 1281px) {
    h1 {
      font-size: 2vw;
    }
    p {
      font-size: 1vw;
    }
  }
`;

export const FacilitiesList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 1281px) {
    width: 50%;
  }
`;

export const Facilitie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 0;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  span {
    margin-top: -4%;
    width: 40%;
    height: 7vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #fff;
    font-size: 2vw;
    white-space: nowrap;
  }
`;
