// sum.test.js
import { expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routesConfig from "@/routes";

test("Banner title", () => {
  const localRouter = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const { getByTestId } = render(<RouterProvider router={localRouter} />);
  expect(getByTestId("welcome-title"));
});

test("Book redirect", async () => {
  const localRouter = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const origin = "/";
  const { getByTestId } = render(<RouterProvider router={localRouter} />);
  const button = getByTestId("book-button");

  expect(localRouter.state.location.pathname).toBe(origin);
  await fireEvent.click(button);
  expect(localRouter.state.location.pathname).toBe("/rooms");
});
