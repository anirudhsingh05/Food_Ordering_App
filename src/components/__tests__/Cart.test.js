const { render, screen, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import MockData from "../mockData/MockAPIResMenuData.json";
import appStore from "../../utils/appStore";
import Headers from "../Headers";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

it("should load Restuarant Menu component", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Headers />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText(
    "Melts Meal for 1 with Fries - Veg -"
  );
  fireEvent.click(accordianHeader);

  const foodList = screen.getAllByTestId("foot-items");

  expect(foodList.length).toBe(20);

  const BeforeupdatCart = screen.getByText("Cart (0)");
  expect(BeforeupdatCart).toBeInTheDocument();

  const addButton = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButton[0]);

  const updatedCart = screen.getByText("Cart (1)");
  expect(updatedCart).toBeInTheDocument();

  expect(screen.getAllByTestId("foot-items").length).toBe(21);

  const clear = screen.getByRole("button", { name: "Clear cart" });
  fireEvent.click(clear);

  expect(screen.getAllByTestId("foot-items").length).toBe(20);
});
