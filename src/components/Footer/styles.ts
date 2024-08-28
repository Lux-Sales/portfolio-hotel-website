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
  display: grid;
  grid-template-columns: 25% 40% 25%;
  gap: 5%;
  font-size: 1vw;
  .error-message {
    color: #f73737;
    font-weight: 500;
  }
`;

export const Address = styled.div`
  p {
    width: 100%;
    margin-top: 4%;
    white-space: nowrap;
  }
`;

export const RedirectDiv = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
  div {
    display: flex;
    cursor: pointer;
  }

  .redirect-column {
    flex-direction: column;
    justify-content: space-around;
    &:nth-child(2) {
      margin-left: auto;
      align-items: left;
      div {
        &:hover {
          text-decoration: underline;
        }
      }
      svg {
        margin-right: 10%;
      }
    }
  }
`;

export const NewsLetter = styled.div`
  label {
    color: #fff;
    font-weight: 500;
  }
  div {
    margin-top: 10%;
    display: flex;
    input {
      border-radius: 4px 0 0 4px;
      border-color: #e0b973;
      border-width: 2px;
      background-color: transparent;
      padding-left: 5%;
      width: 80%;
      color: #fff;
      &::placeholder {
        color: #fff;
        font-weight: 500;
      }
    }
    button {
      border-radius: 0 4px 4px 0;
      background-color: #e0b973;
      color: #14274a;
      font-weight: 700;
      border-color: #e0b973;
      width: 20%;
      padding: 2%;
    }
  }
`;
