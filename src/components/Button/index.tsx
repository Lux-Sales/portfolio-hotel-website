import React from "react";
import { Container } from "./styles";

interface Props {
  testid?: string;
  icon?: string;
  text: string;
  func: () => void;
}

const Button = (props: Props): JSX.Element => {
  const { text, icon, func, testid } = props;
  return (
    <Container data-testid={testid} onClick={() => func()}>
      {icon !== "" && <img src={icon} data-testid="button-img-icon" />}
      {text}
    </Container>
  );
};

export default Button;
