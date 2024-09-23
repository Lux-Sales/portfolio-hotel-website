import React, { useState } from "react";
import { Container, ButtonsNav } from "./styles";
import Logo from "@/assets/hotelLogo.svg";
import { Link } from "react-router-dom";

const Topbar = (): JSX.Element => {
  return (
    <Container>
      <img
        data-testid="topbar-logo"
        src={Logo}
        alt="A orange rectangle with the border rounded, big letters says 'Luxury' and minor stands for 'hotels'"
      />
      <ButtonsNav>
        <Link
          to="/"
          style={
            location.pathname === "/" ? { textDecoration: "underline" } : {}
          }
        >
          Home
        </Link>
        <Link
          to="facilities"
          style={
            location.pathname === "/facilities"
              ? { textDecoration: "underline" }
              : {}
          }
        >
          Facilities
        </Link>
        <Link
          style={
            location.pathname === "/rooms"
              ? { textDecoration: "underline" }
              : {}
          }
          to="rooms"
        >
          Rooms
        </Link>
        <Link
          style={
            location.pathname === "/contact"
              ? { textDecoration: "underline" }
              : {}
          }
          to="contact"
        >
          Contact-us
        </Link>
      </ButtonsNav>
    </Container>
  );
};

export default Topbar;
