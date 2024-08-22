import React from "react";
import { Container, ButtonsNav } from "./styles";
import Logo from "@/assets/hotelLogo.svg";
import { Link } from "react-router-dom";

const handleStyle = (href: string): object => {
  console.log(window.location.pathname);
  if (href === window.location.pathname) {
    return { textDecoration: "underline", fontWeight: "500" };
  } else {
    return {};
  }
};

const Topbar = (): JSX.Element => {
  return (
    <Container>
      <img
        src={Logo}
        alt="A orange rectangle with the border rounded, big letters says 'Luxury' and minor stands for 'hotels'"
      />
      <ButtonsNav>
        <Link to="" style={handleStyle("/")}>
          Home
        </Link>
        <Link to="facilities" style={handleStyle("/facilities")}>
          Facilities
        </Link>
        <Link to="rooms" style={handleStyle("/rooms")}>
          Rooms
        </Link>
        <Link to="contact" style={handleStyle("/contact")}>
          Contact-us
        </Link>
      </ButtonsNav>
    </Container>
  );
};

export default Topbar;
