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
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Login() {
  const { handleLogin, isAuthenticated, username, setUsername, password, setPassword } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/chat");
  }, [isAuthenticated, navigate])

  return (
    <>
      <Background src={bg} alt="Background" />
      <LoginBox>
        <Form onSubmit={handleLogin}>
          <FormTitle>Log in</FormTitle>
          <FormInputContainer>
            <EnvelopeSimple size={20} color="black" />
            <FormInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </FormInputContainer>
          <FormInputContainer>
            <Key size={20} color="black" />
            <FormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </FormInputContainer>
          <Button className="btn-login" type="submit">Log in</Button>
        </Form>
        <ImageBox src="https://cdn.visily.ai/app/production/1711699536687/static/SignupGraphic-e7e3321a.png" />
      </LoginBox>
    </>
  )
}
