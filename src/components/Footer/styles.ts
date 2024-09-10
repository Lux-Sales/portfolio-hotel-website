import styled from "styled-components";
import Logo from "@/assets/footerBg.svg";

export const Container = styled.footer`
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding: 8% 12% 2% 12%;
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
  img {
    height: 30%;
    width: 50%;
    margin-left: -5%;
  }
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
    div {
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    &:nth-child(2) {
      margin-left: auto;
      align-items: left;
      div {
        &:hover {
          text-decoration: underline;
        }
      }
      svg {
        width: 20%;
        margin-right: 10%;
      }
    }
  }
`;

export const NewsLetter = styled.div`
  height: 100%;
  label {
    color: #fff;
    font-weight: 500;
  }
  form {
    height: 100%;
  }
`;

export const EmailInput = styled.div`
  margin-top: 10%;
  display: flex;
  width: 100%;
  height: 40%;
  border-width: 0.2vw;
  border-style: solid;
  border-radius: 0.2vw;
  border-color: #e0b973;
  input {
    border: none;
    height: 100%;
    width: 80%;
    background-color: transparent;
    padding-left: 5%;
    color: #fff;
    font-size: 100%;
    &::placeholder {
      color: #fff;
      font-weight: bold;
    }
  }
  button {
    height: 100%;
    font-size: 90%;
    border: none;
    background-color: #e0b973;
    color: #14274a;
    font-weight: 700;
    width: 20%;
    padding: 2%;
    border: none;
  }
`;
