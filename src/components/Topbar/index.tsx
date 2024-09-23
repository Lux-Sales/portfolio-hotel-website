import React, { useState } from "react";
import { Container, ButtonsNav } from "./styles";
import Logo from "@/assets/hotelLogo.svg";
import { Link } from "react-router-dom";

const Topbar = (): JSX.Element => {
  const [selected, setSelected] = useState(window.location.pathname);
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
          style={selected === "/" ? { textDecoration: "underline" } : {}}
          onClick={() => setSelected("/")}
        >
          Home
        </Link>
        <Link
          to="facilities"
          style={
            selected === "/facilities" ? { textDecoration: "underline" } : {}
          }
          onClick={() => setSelected("/facilities")}
        >
          Facilities
        </Link>
        <Link
          style={selected === "/rooms" ? { textDecoration: "underline" } : {}}
          to="rooms"
          onClick={() => setSelected("/rooms")}
        >
          Rooms
        </Link>
        <Link
          style={selected === "/contact" ? { textDecoration: "underline" } : {}}
          to="contact"
          onClick={() => setSelected("/contact")}
        >
          Contact-us
        </Link>
      </ButtonsNav>
    </Container>
  );
};

export default Topbar;
