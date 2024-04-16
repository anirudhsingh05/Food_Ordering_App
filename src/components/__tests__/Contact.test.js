import Contact from "../Contact";
const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";

test("Should load Cintact us page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("should load button inside contact us Component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});

test("Should load 2 input Boxes in cob=ntact us component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(2);
});
