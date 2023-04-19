import React, { useState } from "react";
import { Menu, Button, Dropdown } from "semantic-ui-react";
import { Link } from "react-scroll";
import './LandingHomePage.css'
import "semantic-ui-css/semantic.min.css";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="home-navbar">
      <Menu className="menu">
        <Menu.Item header className="home-logo">WERA</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Button
              color="blue"
              icon="bars"
              onClick={handleMenuToggle}
              className="mobile-menu-icon"
            />
          </Menu.Item>
        </Menu.Menu>

        {menuVisible && (
          <Dropdown item text="Menu" className="mobile-menu">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link
                  to="about"
                  smooth={true}
                  duration={200}
                  spy={true}
                  exact="true"
                  onClick={handleMenuToggle}
                >
                  About Us
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="team"
                  smooth={true}
                  duration={150}
                  spy={true}
                  exact="true"
                  onClick={handleMenuToggle}
                >
                  Team
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="feature"
                  smooth={true}
                  duration={200}
                  spy={true}
                  exact="true"
                  onClick={handleMenuToggle}
                >
                  Feature
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Menu>

      <Button
        color="blue"
        icon="arrow up"
        onClick={handleScrollToTop}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      />
    </div>
  );
}

export default Navbar;