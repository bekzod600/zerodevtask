import { useSelector } from "react-redux";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "../styles.css";

const ListNav = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
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
  padding: 0.5rem 1rem;
`;

const Header = () => {
  const authUser = useSelector((state) => state.user.authenticatedUser);
  return (
    <Nav>
      <NavbarLink to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </NavbarLink>
      <ListNav>
        <ListItem>
          <NavbarLink to="/">Home</NavbarLink>
        </ListItem>
        <ListItem>
          <NavbarLink to="/debit">DEBIT</NavbarLink>
        </ListItem>
        <ListItem>
          <NavbarLink to="/kredit">KREDIT</NavbarLink>
        </ListItem>
      </ListNav>
      <p className="welcome">Welcome {authUser.user}</p>
    </Nav>
  );
};

export default Header;
