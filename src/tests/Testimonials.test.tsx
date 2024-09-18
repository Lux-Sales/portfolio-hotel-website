import { expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import Testimonials from "@/components/Testimonials";
import TestimonialApi from "@/services/testimonials";

afterEach(() => {
  vi.clearAllMocks();
});

test("Request made", async () => {
  const spy = vi.spyOn(TestimonialApi, "getTestimonials");
  await render(<Testimonials />);
  expect(spy).toHaveBeenCalled();
});

test("Changing message", async () => {
  const { getByTestId } = render(<Testimonials />);
  const firstMessage = getByTestId("testimonial-text").textContent;
  const fwdButton = getByTestId("forward-button");
  const backButton = getByTestId("back-button");

  await fireEvent.click(fwdButton);
  const secondMessage = getByTestId("testimonial-text").textContent;
  expect(firstMessage).not.toBe(secondMessage);

  await fireEvent.click(backButton);
  const thirdMessage = getByTestId("testimonial-text").textContent;
  expect(firstMessage).toBe(thirdMessage);
});
