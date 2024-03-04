import { LOGO_URL } from "../utils/constant";

const Headers = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Headers;