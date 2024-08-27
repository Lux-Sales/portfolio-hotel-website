import React, { useState } from "react";
import { Address, Container, NewsLetter, RedirectDiv } from "./styles";
import logo from "@/assets/footerLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeToNewsLetter } from "@/services/newsletter";
const Footer = (): JSX.Element => {
  const [email, setEmail] = useState("");

  const submitSub = async (): Promise<void> => {
    try {
      const resp = await SubscribeToNewsLetter(email);
      console.log(resp.data.status);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <Address>
        <img data-testid="footer-logo" src={logo} alt="" />
        <p data-testid="footer-address">
          497 Evergreen Rd. Roseville, CA 95673 <br />
          +44 345 678 903 <br />
          luxury_hotels@gmail.com
        </p>
      </Address>
      <RedirectDiv>
        <Link data-testid="footer-redirect-link-about" to="about">
          About Us
        </Link>
        <Link data-testid="footer-redirect-link-contact" to="contact">
          Contact
        </Link>
        <Link data-testid="footer-redirect-link-terms" to="terms">
          Terms & Conditions
        </Link>
        <div
          data-testid="footer-social-media-link-facebook"
          onClick={() => (window.location.href = "www.facebook.com")}
        >
          <FacebookIcon />
          Facebook
        </div>
        <div
          data-testid="footer-social-media-link-twitter"
          onClick={() => (window.location.href = "www.twitter.com")}
        >
          <TwitterIcon />
          Twitter
        </div>
        <div
          data-testid="footer-social-media-link-instagram"
          onClick={() => (window.location.href = "www.instagram.com")}
        >
          <InstagramIcon />
          Instagram
        </div>
      </RedirectDiv>
      <NewsLetter data-testid="footer-newsletter-div">
        <input
          data-testid="footer-newsletter-input"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
        <button
          data-testid="footer-newsletter-button"
          onClick={async () => await submitSub()}
        >
          aaa
        </button>
      </NewsLetter>
    </Container>
  );
};

export default Footer;
