import React from "react";
import { Container, Facilitie, FacilitiesList } from "./styles";
import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";
import gymPhoto from "@/assets/gymPhoto.svg";
import poolBarPhoto from "@/assets/poolBarPhoto.svg";
import spaPhoto from "@/assets/spaPhoto.svg";
import poolPhoto from "@/assets/poolPhoto.svg";
import restaurantPhoto from "@/assets/restaurantPhoto.svg";
import laundryPhoto from "@/assets/laundryPhoto.svg";

const index = (): JSX.Element => {
  return (
    <>
      <Banner />
      <Container>
        <h1>Facilities</h1>
        <p data-testid="facilities-info">
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite unique. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </p>
        <FacilitiesList>
          <Facilitie data-testid="gym-banner">
            <img src={gymPhoto} alt="" />
            <span>the gym</span>
          </Facilitie>
          <Facilitie data-testid="poolBar-banner">
            <img src={poolBarPhoto} alt="" />
            <span>poolside bar</span>
          </Facilitie>
          <Facilitie data-testid="spa-banner">
            <img src={spaPhoto} alt="" />
            <span>the spa</span>
          </Facilitie>
          <Facilitie data-testid="pool-banner">
            <img src={poolPhoto} alt="" />
            <span>swimming pool</span>
          </Facilitie>
          <Facilitie data-testid="restaurant-banner">
            <img src={restaurantPhoto} alt="" />
            <span>restaurant</span>
          </Facilitie>
          <Facilitie data-testid="laundry-banner">
            <img src={laundryPhoto} alt="" />
            <span>laundry</span>
          </Facilitie>
        </FacilitiesList>
        <Testimonials />
      </Container>
    </>
  );
};

export default index;
