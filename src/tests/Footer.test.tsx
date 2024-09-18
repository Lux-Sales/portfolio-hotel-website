import { expect, test } from "vitest";
import { act, fireEvent, render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import routesConfig from "@/routes";
import NewsletterApi from "@/services/newsletter";

const router = createMemoryRouter(routesConfig, {
  initialEntries: ["/"],
});

afterEach(() => {
  vi.clearAllMocks();
});

test("Footer Hotel address", () => {
  const { getByTestId } = render(<RouterProvider router={router} />);
  const addressElement = getByTestId("footer-address");
  const address =
    "497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903 luxury_hotels@gmail.com";
  expect(addressElement.textContent).toBe(address);
});

test("Footer Hotel Logo", () => {
  const { getByTestId } = render(<RouterProvider router={router} />);
  expect(getByTestId("footer-logo")).toBeInTheDocument();
});

test("Footer redirect links", () => {
  const { getByTestId } = render(<RouterProvider router={router} />);
  expect(getByTestId("footer-redirect-link-about")).toBeInTheDocument();
  expect(getByTestId("footer-redirect-link-contact")).toBeInTheDocument();
  expect(getByTestId("footer-redirect-link-terms")).toBeInTheDocument();
});

test("Footer social media links", () => {
  const { getByTestId } = render(<RouterProvider router={router} />);
  expect(getByTestId("footer-social-media-link-facebook")).toBeInTheDocument();
  expect(getByTestId("footer-social-media-link-twitter")).toBeInTheDocument();
  expect(getByTestId("footer-social-media-link-instagram")).toBeInTheDocument();
});

test("Footer redirects", async () => {
  const localRouter = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const { getByTestId } = render(<RouterProvider router={localRouter} />);
  const origin = "/";

  const about = getByTestId("footer-redirect-link-about");
  expect(localRouter.state.location.pathname).toBe(origin);
  await fireEvent.click(about);
  expect(localRouter.state.location.pathname).toBe("/about");

  await act(async () => {
    await localRouter.navigate("/");
  });

  const contact = getByTestId("footer-redirect-link-contact");
  expect(localRouter.state.location.pathname).toBe(origin);
  await fireEvent.click(contact);
  expect(localRouter.state.location.pathname).toBe("/contact");

  await act(async () => {
    await localRouter.navigate("/");
  });

  const terms = getByTestId("footer-redirect-link-terms");
  expect(localRouter.state.location.pathname).toBe(origin);
  await fireEvent.click(terms);
  expect(localRouter.state.location.pathname).toBe("/terms");
});

test("Footer newsletter", () => {
  const { getByTestId } = render(<RouterProvider router={router} />);
  expect(getByTestId("footer-newsletter-div")).toBeInTheDocument();
});

test("Footer newsletter function", async () => {
  const subscribeMock = vi.spyOn(NewsletterApi, "SubscribeToNewsLetter");

  const { getByTestId } = render(<RouterProvider router={router} />);
  const mockEmail = "someemail@gmail.com";

  const button = getByTestId("footer-newsletter-button");
  const input = getByTestId("footer-newsletter-input");

  await act(async () => {
    await userEvent.type(input, mockEmail);
    fireEvent.click(button);
  });

  expect(input).toHaveValue(mockEmail);
  expect(subscribeMock).toHaveBeenCalled();
});
