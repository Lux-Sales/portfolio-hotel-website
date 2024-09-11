import React from "react";
import { Container } from "./styles";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface Props {
  icon?: string;
  text: string;
  svgIcon?: OverridableComponent<SvgIconTypeMap>;
  func: () => void;
}

const Button = (props: Props): JSX.Element => {
  const { text, icon, func, svgIcon } = props;
  return (
    <Container onClick={() => func()}>
      {icon !== "" && <img src={icon} data-testid="button-img-icon" />}
      <svgIcon />
      {text}
    </Container>
  );
};

export default Button;
