import {
  Background,
  Button,
  Form,
  FormInput,
  FormInputContainer,
  FormTitle, ImageBox,
  LoginBox
} from "../../styles/GlobalStyles.jsx";
import bg from "../assets/background.svg";
import {EnvelopeSimple, Key} from "@phosphor-icons/react";
import {useAuth} from "../context/AuthProvider.jsx";

export default function Login() {
  const {handleLogin, username, setUsername, password, setPassword} = useAuth();

  return (
    <>
      <Background src={bg} alt="Background"/>
      <LoginBox>
        <Form onSubmit={handleLogin}>
          <FormTitle>Log in</FormTitle>
          <FormInputContainer>
            <EnvelopeSimple size={20} color="black"/>
            <FormInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </FormInputContainer>
          <FormInputContainer>
            <Key size={20} color="black"/>
            <FormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </FormInputContainer>
          <Button type="submit">Log in</Button>
        </Form>
        <ImageBox src="https://cdn.visily.ai/app/production/1711699536687/static/SignupGraphic-e7e3321a.png"/>
      </LoginBox>
    </>
  )
}
