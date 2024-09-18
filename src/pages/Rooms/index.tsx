import React from "react";
import { Container, RoomList } from "./styles";
import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";
import singleRoomPhoto from "@/assets/singleRoom.svg";
import doubleRoomPhoto from "@/assets/doubleRoom.svg";
import twinRoomPhoto from "@/assets/twinRoom.svg";
import Room from "@/components/Room";

const Rooms = (): JSX.Element => {
  const singleRoom = {
    fakeId: 15649566,
    room: "single room",
    photos: [singleRoomPhoto, twinRoomPhoto, doubleRoomPhoto],
    testid: "single-room-info",
    pricePerNight: 147,
    details: ["Bathroom", "Laundry", "Garage", "Smart TV", "Netflix"],
  };
  const doubleRoom = {
    fakeId: 84452167,
    room: "double room",
    photos: [doubleRoomPhoto, singleRoomPhoto, twinRoomPhoto],
    testid: "double-room-info",
    pricePerNight: 155,
    details: ["Bathroom", "Laundry", "Garage", "Smart TV", "Netflix"],
  };
  const twinRoom = {
    fakeId: 71264825,
    room: "twin room",
    photos: [twinRoomPhoto, doubleRoomPhoto, singleRoomPhoto],
    testid: "twin-room-info",
    pricePerNight: 155,
    details: ["Bathroom", "Laundry", "Garage", "Smart TV", "Netflix"],
  };

  const fakeFetchRoom = [singleRoom, doubleRoom, twinRoom];
  return (
    <>
      <Banner />
      <Container>
        <h1>Rooms and Rates</h1>
        <p data-testid="rooms-info">
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn’t our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature’s palette as visible from our
          rooms’ sea-view windows and terraces.
        </p>
        <RoomList>
          {fakeFetchRoom.map((room, index) => (
            <Room {...room} key={index} />
          ))}
        </RoomList>
        <Testimonials />
      </Container>
    </>
  );
};

export default Rooms;
