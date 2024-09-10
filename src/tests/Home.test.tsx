// sum.test.js
import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routesConfig from "@/routes";

test("Breakfast included info", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const title = getByTestId("breakfast-info");
  expect(title.textContent).toBe(
    "All our room types are including complementary breakfast",
  );
});

test("Show attractions", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const { getAllByTestId } = render(<RouterProvider router={router} />);
  const attractions = getAllByTestId("attraction-info");
  expect(attractions.length).toBe(2);
});
