import React from "react";
import { Container, Title } from "./styles";
import { Link } from "react-router-dom";
import bannerLogo1 from "@/assets/bannerImage1.svg";
import bannerTitle from "@/assets/bannerTitle.svg";
import bookIcon from "@/assets/bookIcon.svg";
import scrollIcon from "@/assets/scrollIcon.svg";

const Banner = (): JSX.Element => {
  return (
    <Container style={{ backgroundImage: `url(${bannerLogo1})` }}>
      <Title data-testid="welcome-title">
        <img src={bannerTitle} alt="" />
      </Title>
      <Link data-testid="book-button" to="/rooms">
        <img src={bookIcon} alt="" />
        <span>book now</span>
      </Link>
      <img src={scrollIcon} id="scroll-icon" alt="" />
    </Container>
  );
};

export default Banner;
