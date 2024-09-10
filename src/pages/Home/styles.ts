import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const AttractionsList = styled.div`
  color: #14274a;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Attraction = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 3% 0;
  #second-divider {
    height: 90%;
    margin-top: 0;
  }
  img {
    height: 50%;
    width: 50%;
  }
`;

export const AttractionDetails = styled.div`
  width: 40%;
  padding: 5% 0;
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: left;
    p {
      margin: 5% 0;
    }
  }
`;

export const VerticalDivider = styled.div`
  height: 80%;
  width: 1.5%;
  background-color: #14274a;
  margin-right: 6%;
  margin-top: 5%;
`;
