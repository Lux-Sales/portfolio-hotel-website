import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routesConfig from "@/routes";

test("Facilities included info", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/facilities"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const title = getByTestId("facilities-info");
  const expectedText =
    "We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so that we can ensure an experience quite unique. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all.";

  expect(title.textContent).toBe(expectedText);
});

test("Gym banner included", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/facilities"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const gym = getByTestId("gym-banner");

  expect(gym).toBeInTheDocument();
});

test("Pool bar banner included", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/facilities"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const poolBar = getByTestId("poolBar-banner");

  expect(poolBar).toBeInTheDocument();
});

test("Spa banner included", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/facilities"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const spa = getByTestId("spa-banner");

  expect(spa).toBeInTheDocument();
});

test("Pool banner included", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/facilities"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const pool = getByTestId("pool-banner");

  expect(pool).toBeInTheDocument();
});

test("Restaurant banner included", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/facilities"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const restaurant = getByTestId("restaurant-banner");

  expect(restaurant).toBeInTheDocument();
});

test("Laundry banner included", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/facilities"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const laundry = getByTestId("laundry-banner");

  expect(laundry).toBeInTheDocument();
});
