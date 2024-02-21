import { useEffect, useState } from "react";
import styled from "styled-components";
import { DefaultButton } from "../components/ui/Buttons";
import { DefaultInput } from "../components/ui/Inputs";
import { DefaultForm } from "../components/ui/Form";
import { Title } from "../components/ui/Texts";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addAuthUser, addUser } from "../store/userSlice";
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

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user: "",
    pin: "",
  });

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const userStatus = useSelector((state) => state.user.status);
  // const authenticatedUser = useSelector(
  //   (state) => state.user.authenticatedUser
  // );

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, userStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.pin) return alert("Please write user and pin");
    const hasUser = users.find((user) => user.user === form.user);
    if (hasUser) return alert("This account alredy have");
    const data = {
      id: String(new Date().getTime()),
      user: form.user,
      pin: form.pin,
    };
    dispatch(addUser(data));
    dispatch(addAuthUser(data));
    localStorage.setItem("authUser", JSON.stringify(data));
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
          <Title color="white">SIGN UP</Title>
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
          <Navigation to="/login">If you have accaunt</Navigation>
        </DefaultForm>
      </Wrapper>
    </>
  );
}

export default Signup;
