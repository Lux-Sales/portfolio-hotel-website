import React from "react";
import { Container } from "./styles";

interface Props {
  icon: string;
  text: string;
  func: () => void;
}

const Button = (props: Props): JSX.Element => {
  const { text, icon, func } = props;
  return (
    <Container onClick={() => func()}>
      {icon !== "" && <img src={icon} data-testid="button-img-icon" />}
      {text}
    </Container>
  );
};

export default Button;
