import { expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import {
  BrowserRouter,
  createMemoryRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import routesConfig from "@/routes";
import Room from "@/components/Room";
import singleRoomPhoto from "@/assets/singleRoom.svg";
import doubleRoomPhoto from "@/assets/doubleRoom.svg";
import twinRoomPhoto from "@/assets/twinRoom.svg";

const mockedRoom = {
  fakeId: 15649566,
  room: "single room",
  photos: [singleRoomPhoto, twinRoomPhoto, doubleRoomPhoto],
  testid: "single-room-info",
  pricePerNight: 147,
  details: ["Bathroom", "Laundry", "Garage", "Smart TV", "Netflix"],
};

test("Changing room carousel image", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Room {...mockedRoom} />} />
      </Routes>
    </BrowserRouter>,
  );
  const photo1 = getByTestId("banner-photo-0");
  const photo2 = getByTestId("banner-photo-1");
  const bulletButton1 = getByTestId("bullet-button-0");
  const bulletButton2 = getByTestId("bullet-button-1");

  expect(photo1).toHaveClass("slide-active");

  await fireEvent.click(bulletButton2);

  expect(photo2).toHaveClass("slide-active");

  await fireEvent.click(bulletButton1);

  expect(photo1).toHaveClass("slide-active");
});

test("Room title", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Room {...mockedRoom} />} />
      </Routes>
    </BrowserRouter>,
  );
  const title = getByTestId("room-title");
  expect(title.textContent).toBe(mockedRoom.room);
});

test("Room details", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Room {...mockedRoom} />} />
      </Routes>
    </BrowserRouter>,
  );
  const details = getByTestId("details-list");

  mockedRoom.details.forEach((detail, index) => {
    expect(detail).toBe(details.children[index].textContent);
  });
});

test("Room redirect", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Room {...mockedRoom} />} />
      </Routes>
    </BrowserRouter>,
  );

  const button = getByTestId("book-room");
  await fireEvent.click(button);

  expect(window.location.pathname).toBe(`/rooms/${mockedRoom.fakeId}`);
});
