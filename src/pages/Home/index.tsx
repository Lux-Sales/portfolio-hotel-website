import Banner from "@/components/Banner";
import {
  Attraction,
  AttractionDetails,
  AttractionsList,
  Container,
  VerticalDivider,
} from "./styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import roomPhoto from "@/assets/roomPhoto.svg";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Container>
      <Banner />;
      <AttractionsList>
        <h2 data-testid="breakfast-info">
          All our room types are including complementary breakfast
        </h2>
        <Attraction data-testid="attraction-info">
          <AttractionDetails>
            <VerticalDivider />
            <div>
              <h1>Luxury redefined</h1>
              <p>
                Our rooms are designed to transport you into an environment made
                for leisure. Take your mind off the day-to-day of home life and
                find a private paradise for yourself.
              </p>
              <Button icon="" text="explore" func={() => navigate("/rooms")} />
            </div>
          </AttractionDetails>
          <img src={roomPhoto} alt="" />
        </Attraction>
        <Attraction data-testid="attraction-info">
          <AttractionDetails>
            <VerticalDivider id="second-divider" />
            <div>
              <h1>Leave your worries in the sand</h1>
              <p>
                We love life at the beach. Being close to the ocean with access
                to endless sandy beach ensures a relaxed state of mind. It seems
                like time stands still watching the ocean.
              </p>
              <Button icon="" text="explore" func={() => navigate("/rooms")} />
            </div>
          </AttractionDetails>
          <img src={roomPhoto} alt="" />
        </Attraction>
      </AttractionsList>
    </Container>
  );
};

export default Home;
