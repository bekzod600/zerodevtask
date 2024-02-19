import { useState } from "react";
import styled from "styled-components";
import { DefaultButton } from "../components/ui/Buttons";
import { DefaultInput } from "../components/ui/Inputs";
import { DefaultForm } from "../components/ui/Form";
import { Title } from "../components/ui/Texts";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

function Login() {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm(Object.assign(form, { [name]: value }));
  };

  return (
    <>
      <Wrapper>
        <DefaultForm onSubmit={handleSubmit}>
          <Title>LOGIN</Title>
          <DefaultInput
            type="text"
            name="login"
            value={form.login}
            onChange={handleChange}
          />
          <DefaultInput
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <DefaultButton>SUBMIT</DefaultButton>
        </DefaultForm>
      </Wrapper>
    </>
  );
}

export default Login;
