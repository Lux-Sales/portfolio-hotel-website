import styled from "styled-components";
import Logo from "@/assets/footerBg.svg";

export const Container = styled.footer`
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 8% 12% 5% 12%;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
`;

export const Address = styled.div`
  p {
    margin-top: 2%;
  }
`;

export const RedirectDiv = styled.div``;

export const NewsLetter = styled.div``;
