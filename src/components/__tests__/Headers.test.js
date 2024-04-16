const { render, screen, fireEvent } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { BrowserRouter } = require("react-router-dom");
import Headers from "../Headers";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("Should render Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", {
    name: "Login",
  });

  expect(loginBtn).toBeInTheDocument();
});

it("Should render Header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart (0)");

  expect(cartItem).toBeInTheDocument();
});

it("Should render Header component with Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/);

  expect(cart).toBeInTheDocument();
});

it("Should render Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();
});
