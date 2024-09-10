// sum.test.js
import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "@/components/Button";
import icon from "@/assets/bookIcon.svg";

test("Button props", async () => {
  const consoleMock = vi.spyOn(console, "log");
  const { getByText, getByTestId } = render(
    <Button
      icon={icon}
      text="submit"
      func={() => console.log("function called")}
    />,
  );
  const button = getByText("submit");
  const iconElement = getByTestId("button-img-icon");

  expect(button.textContent).toBe("submit");

  await fireEvent.click(button);
  expect(consoleMock).toHaveBeenCalledWith("function called");

  expect(iconElement).toBeInTheDocument();
});

test("Button without icon", async () => {
  render(
    <Button
      icon=""
      text="submit"
      func={() => console.log("function called")}
    />,
  );

  expect(screen.queryByTestId("button-img-icon")).not.toBeInTheDocument();
});
