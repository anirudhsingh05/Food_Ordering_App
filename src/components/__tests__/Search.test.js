const { render, screen, fireEvent } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MockAPIData from "../mockData/MockAPIData.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockAPIData);
    },
  });
});

it("should render the body component with search button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBefore = screen.getAllByTestId("resCard");

  expect(cardsBefore.length).toBe(9);

  const SearchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "" } });

  fireEvent.click(SearchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(9);
});

it("should render the top rated restuarant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(9);

  const btn = screen.getByRole("button", { name: "Top rated Restaurants" });
  const search = screen.getByRole("button", { name: "Search" });

  fireEvent.click(btn);
  fireEvent.click(search);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(5);
});
