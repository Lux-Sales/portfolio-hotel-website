import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20%;
  .error-message {
    color: #f73737;
    font-weight: 500;
  }
`;

export const Header = styled.div`
  background-color: #14274a;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 3.5vw;
`;

export const Section = styled.section`
  padding: 5%;
`;

export const Title = styled.div`
  color: #16356d;
  h1 {
    text-transform: uppercase;
    font-size: 2vw;
    font-weight: 700;
  }
`;

export const AddressMessage = styled.div`
  margin-top: 8%;
  display: flex;
  justify-content: space-between;
  color: #16356d;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    color: #16356d;
    margin: 5% 0;
    text-decoration: none;
    font-weight: bold;
    svg {
      margin-left: 4%;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Message = styled.div`
  width: 30%;
  form {
    display: flex;
    flex-direction: column;
    align-items: end;
    button {
      height: 3vh;
      text-transform: capitalize;
      font-size: 1vw;
    }
  }
`;

export const ContactInput = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  width: 100%;
  margin-bottom: 5%;
  label {
    margin-bottom: 1%;
  }
  input {
    height: 3vh;
    border: 1px solid #587dc5;
  }
  textarea {
    height: 15vh;
    margin-bottom: 3%;
    border: 1px solid #587dc5;
  }
`;
