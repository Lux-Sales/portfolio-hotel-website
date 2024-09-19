import { expect, test } from "vitest";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routesConfig from "@/routes";
import MessageAPI from "@/services/message";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  vi.clearAllMocks();
});

test("Support text", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/contact"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const title = getByTestId("contact-title");
  const expectedText =
    "At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, please forward it to our support desk and we will get back to you as soon as possible.";

  expect(title.textContent).toBe(expectedText);
});

test("Address info", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/contact"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const address = getByTestId("contact-address");
  const expectedText = "497 Evergreen Rd. Roseville, CA 95673";

  expect(address.textContent).toBe(expectedText);
});

test("Phone info", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/contact"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const phone = getByTestId("contact-phone");
  const expectedText = "Phone: +44 345 678 903";

  expect(phone.textContent).toBe(expectedText);
});

test("Email info", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/contact"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const email = getByTestId("contact-email");
  const expectedText = "Email: luxury_hotels@gmail.com";

  expect(email.textContent).toBe(expectedText);
});

test("Map redirect", async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/contact"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const link = getByTestId("view-map-button");
  expect(link).toHaveAttribute(
    "href",
    "https://maps.app.goo.gl/q9NmbMYdT55rz8wK9",
  );
});

test("Sending message", async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/contact"],
  });
  const { getByTestId } = render(<RouterProvider router={router} />);
  const spy = vi.spyOn(MessageAPI, "SendMessage");
  const user = userEvent.setup();

  const nameInput = getByTestId("name-input");
  const emailInput = getByTestId("email-input");
  const messageInput = getByTestId("message-input");

  const button = getByTestId("submit-message");

  await waitFor(async () => {
    await user.type(nameInput, "Albert Einstein");
    await user.type(emailInput, "albert.einstein@gmail.com");
    await user.type(
      messageInput,
      "I liked a lot the hotel and i would like to book a room!",
    );
    await fireEvent.click(button);
  });

  expect(spy).toHaveBeenCalled();
});
