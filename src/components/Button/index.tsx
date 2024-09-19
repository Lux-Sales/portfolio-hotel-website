import React from "react";
import { Container } from "./styles";

interface Props {
  testid?: string;
  icon?: string;
  text: string;
  func?: () => void;
  type?: "submit" | "button" | "reset";
}

const Button = (props: Props): JSX.Element => {
  const { text, icon, func, testid, type } = props;
  const executeFunction = (): void => {
    if (func != null) {
      func();
    }
  };
  return (
    <Container
      data-testid={testid}
      onClick={executeFunction}
      type={type != null ? type : "button"}
    >
      {icon !== "" && <img src={icon} data-testid="button-img-icon" />}
      {text}
    </Container>
  );
};

export default Button;
