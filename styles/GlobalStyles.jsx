import styled from "styled-components";

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

const Title = styled.h1`
    margin-right: auto;
`;

const SelectContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

const Select = styled.select`
    padding: 5px 10px;
    min-width: 150px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #604bc9;
    border: 1px solid #604bc9;
    border-radius: 6px;
    min-width: 100px;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 30px;
`;

const InputContainer = styled.div`
    margin: 0 auto;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #a09f9f;
    border-radius: 8px;
    padding-right: 10px;
`;

const ChatInput = styled.input`
    height: 25px;
    color: whitesmoke;
    background-color: transparent;
    width: 90%;
    padding: 10px;
    outline: none;
    border: none;

    &::placeholder {
        color: whitesmoke;
    }
`;

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`;

const ChatBox = styled.div`
    height: 400px;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 10px;
`;

const ChatMessage = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
`;

const PromptResponse = styled.p`
    display: inline-block;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
`;

const Icon = styled.i`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
`;

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const LoginBox = styled.div`
    border-radius: 8px;
    width: 60rem;
    border: 4px solid white;
    padding-right: 3px;
    max-height: 35rem;
    background-color: #fff;
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const ImageBox = styled.img`
    width: 28rem;
    border-radius: 0 8px 8px 0;
    object-fit: cover;
`;
const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 2rem 4.5rem 1.5rem;
    border: none;
    border-radius: 8px 0 0 8px;
    background-color: white;
`;

const FormTitle = styled.h1`
    margin: 0 0 100px;
    color: black;
    text-align: center;
    font-weight: 700;
`;

const FormInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    border: 1px solid lightgray;
    border-radius: 8px;
    padding: 0 10px;
    width: 350px;
`;

const FormInput = styled.input`
    background-color: transparent;
    border: none;
    padding: 10px;
    width: 95%;
    outline: none;
    color: black;
    &::placeholder {
        color: gray;
        font-size: 15px;
    }
`;

export {
  ImageBox,
  LoginBox,
  Form,
  FormTitle,
  FormInputContainer,
  FormInput,
  Background,
  Navbar,
  Title,
  SelectContainer,
  Select,
  Button,
  InputContainer,
  ChatInput,
  ChatContainer,
  ChatBox,
  ChatMessage,
  PromptResponse,
  Icon
};