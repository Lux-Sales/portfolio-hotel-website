import React, { useState } from "react";
import {
  BulletButtons,
  Container,
  ImageCarousel,
  RoomDetails,
  Title,
} from "./styles";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Button from "../Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

interface Props {
  fakeId: number;
  room: string;
  photos: string[];
  testid: string;
  pricePerNight: number;
  details: string[];
}

const Room = (props: Props): JSX.Element => {
  const [indexSelected, setIndexSelected] = useState(0);
  const { testid, room, photos, pricePerNight, details, fakeId } = props;
  const navigate = useNavigate();
  return (
    <Container data-testid={testid}>
      <ImageCarousel data-testid="image-carousel">
        {photos.map((photo, index) => {
          return (
            <img
              data-testid={`banner-photo-${index}`}
              key={index}
              className={`${index === indexSelected ? "slide-active" : ""}`}
              src={photo}
            />
          );
        })}
        <BulletButtons>
          {photos.map((photo, index) => (
            <span
              data-testid={`bullet-button-${index}`}
              key={index}
              className={
                index === indexSelected ? "span-active" : "span-disabled"
              }
              onClick={() => setIndexSelected(index)}
            />
          ))}
        </BulletButtons>
      </ImageCarousel>
      <Title data-testid="room-title">{room}</Title>
      <RoomDetails>
        <Accordion className="dropdown">
          <AccordionSummary
            className="dropdown-title"
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div>
              <AddCircleIcon />
              view room details
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul data-testid="details-list">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
        <Button
          testid="book-room"
          text={`${pricePerNight} Avg/night`}
          func={() => {
            navigate(`/rooms/${fakeId}`);
          }}
        />
      </RoomDetails>
    </Container>
  );
};

export default Room;
