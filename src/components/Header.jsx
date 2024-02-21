import { useSelector } from "react-redux";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "../styles.css";
import { useState } from "react";

const ListNav = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  @media only screen and (max-width: 768px) {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    transform: translateY(${(props) => (props.y ? "0%" : "-120%")});
    padding: 2rem;
    background-color: white;
    flex-direction: column;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

const ListItem = styled.div`
  &:hover {
    transform: scale(1.1);
  }
`;
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  padding: ${(props) => (props.padding == "none" ? 0 : "0.5rem 1rem")};
`;
const WelcomeTag = styled.p`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const MobileMenu = styled.div`
  cursor: pointer;
  padding: 0.8rem 1rem;
  background-color: white;
  border-radius: 0.3rem;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [onMobileMenu, setOnMobileMenu] = useState(0);
  const authUser = useSelector((state) => state.user.authenticatedUser);
  return (
    <Nav>
      <NavbarLink padding="none" to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </NavbarLink>
      <ListNav y={onMobileMenu}>
        <ListItem>
          <NavbarLink to="/">HOME</NavbarLink>
        </ListItem>
        <ListItem>
          <NavbarLink to="/debit">DEBIT</NavbarLink>
        </ListItem>
        <ListItem>
          <NavbarLink to="/kredit">KREDIT</NavbarLink>
        </ListItem>
        <CloseButton onClick={() => setOnMobileMenu(0)}>
          <i className="fas fa-close"></i>
        </CloseButton>
      </ListNav>
      <WelcomeTag className="welcome">Welcome {authUser.user}</WelcomeTag>
      <MobileMenu onClick={() => setOnMobileMenu(1)}>
        <i className="fas fa-bars"></i>
      </MobileMenu>
    </Nav>
  );
};

export default Header;
