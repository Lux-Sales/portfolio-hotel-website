import React, { useState } from "react";
import { Container, ButtonsNav } from "./styles";
import Logo from "@/assets/hotelLogo.svg";
import { Link } from "react-router-dom";

const Topbar = (): JSX.Element => {
  const [selected, setSelected] = useState("/");
  return (
    <Container>
      <img
        data-testid="topbar-logo"
        src={Logo}
        alt="A orange rectangle with the border rounded, big letters says 'Luxury' and minor stands for 'hotels'"
      />
      <ButtonsNav>
        <Link
          className={selected === "/" ? "activeLink" : ""}
          to="/"
          onClick={() => setSelected("/")}
        >
          Home
        </Link>
        <Link
          className={selected === "facilities" ? "activeLink" : ""}
          to="facilities"
          onClick={() => setSelected("facilities")}
        >
          Facilities
        </Link>
        <Link
          className={selected === "rooms" ? "activeLink" : ""}
          to="rooms"
          onClick={() => setSelected("rooms")}
        >
          Rooms
        </Link>
        <Link
          className={selected === "contact" ? "activeLink" : ""}
          to="contact"
          onClick={() => setSelected("contact")}
        >
          Contact-us
        </Link>
      </ButtonsNav>
    </Container>
  );
};

export default Topbar;
