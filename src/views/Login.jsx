import { useEffect, useState } from "react";
import styled from "styled-components";
import { DefaultButton } from "../components/ui/Buttons";
import { DefaultInput } from "../components/ui/Inputs";
import { DefaultForm } from "../components/ui/Form";
import { Title } from "../components/ui/Texts";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addAuthUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
const Navigation = styled(Link)`
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user: "",
    pin: "",
  });

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const userStatus = useSelector((state) => state.user.status);
  const authenticatedUser = useSelector(
    (state) => state.user.authenticatedUser
  );

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, userStatus]);

  useEffect(() => {
    if (authenticatedUser.user) navigate("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const authUser = users.find(
      (user) => user.user === form.user && user.pin === form.pin
    );
    if (!authUser) return alert("Please write correct user and pin");
    localStorage.setItem("authUser", JSON.stringify(authUser));
    dispatch(addAuthUser(authUser));
    navigate("/");
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((form) => {
      return { ...form, [name]: value };
    });
  };

  return (
    <>
      <Wrapper>
        <DefaultForm onSubmit={handleSubmit}>
          <Title color="white">LOGIN</Title>
          <DefaultInput
            type="text"
            name="user"
            value={form.user}
            onChange={handleChange}
            placeholder="user"
          />
          <DefaultInput
            type="password"
            name="pin"
            value={form.pin}
            onChange={handleChange}
            placeholder="pin"
          />
          <DefaultButton>SUBMIT</DefaultButton>
          <Navigation to="/signup">If you don&apos;t have accaunt</Navigation>
        </DefaultForm>
      </Wrapper>
    </>
  );
}

export default Login;
