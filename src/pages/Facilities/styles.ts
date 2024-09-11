import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #14274a;
  margin-top: 3%;
  p {
    width: 80%;
    text-align: center;
    margin: 3% 0;
  }
`;

export const FacilitiesList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
`;
