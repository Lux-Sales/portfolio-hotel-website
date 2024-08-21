// sum.test.js
import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Home from ".";

test("first phrase", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Happy hacking!"));
});
