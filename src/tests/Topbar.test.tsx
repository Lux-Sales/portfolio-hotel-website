// sum.test.js
import { expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routesConfig from "@/routes";

test("Hotel Logo", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const { getByRole } = render(<RouterProvider router={router} />);
  expect(getByRole("img"));
});

test("Redirect buttons", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const { getAllByRole } = render(<RouterProvider router={router} />);
  const anchors = getAllByRole("link");
  expect(anchors.length === 4);
});

test("Redirect buttom Home", async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/facilities"],
  });
  const { getByText } = render(<RouterProvider router={router} />);
  const origin = router.state.location.pathname;
  const homeLink = getByText("Home");
  await fireEvent.click(homeLink);
  const destin = router.state.location.pathname;
  expect(origin).toBe("/facilities");
  expect(destin).toBe("/");
});

test("Redirect buttom facilities", async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const { getByText } = render(<RouterProvider router={router} />);
  const origin = router.state.location.pathname;
  const homeLink = getByText("Facilities");
  await fireEvent.click(homeLink);
  const destin = router.state.location.pathname;
  expect(origin).toBe("/");
  expect(destin).toBe("/facilities");
});

test("Redirect buttom rooms", async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const { getByText } = render(<RouterProvider router={router} />);
  const origin = router.state.location.pathname;
  const homeLink = getByText("Rooms");
  await fireEvent.click(homeLink);
  const destin = router.state.location.pathname;
  expect(origin).toBe("/");
  expect(destin).toBe("/rooms");
});

test("Redirect buttom contact", async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const { getByText } = render(<RouterProvider router={router} />);
  const origin = router.state.location.pathname;
  const homeLink = getByText("Contact-us");
  await fireEvent.click(homeLink);
  const destin = router.state.location.pathname;
  expect(origin).toBe("/");
  expect(destin).toBe("/contact");
});
