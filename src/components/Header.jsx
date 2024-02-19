import { useSelector } from "react-redux";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.div(`
  display: flex;
  justify-content: center;
  align-items: center;
`);

const ListItem = styled.div`
  color: red;
`;

const Header = () => {
  const authUser = useSelector((state) => state.user.authenticatedUser);
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/debit">Debit</Link>
        </ListItem>
        <ListItem>
          <Link to="/kredit">Kredit</Link>
        </ListItem>
      </List>
      <p className="welcome">Welcome {authUser.user}</p>
    </nav>
  );
};

export default Header;
