import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routesConfig from "@/routes";

test("Rooms info", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/rooms"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const title = getByTestId("rooms-info");
  const expectedText =
    "Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces.";

  expect(title.textContent).toBe(expectedText);
});

test("Single room info", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/rooms"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const room = getByTestId("single-room-info");

  expect(room).toBeInTheDocument();
});

test("double room info", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/rooms"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const room = getByTestId("double-room-info");

  expect(room).toBeInTheDocument();
});
test("Twin room info", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/rooms"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const room = getByTestId("twin-room-info");

  expect(room).toBeInTheDocument();
});
