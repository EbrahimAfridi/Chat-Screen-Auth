import styled from 'styled-components';
import {useState} from "react";
import {OpenAiLogo, PaperPlaneTilt} from "@phosphor-icons/react";

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
    padding: 5px 10px;
    min-width: 100px;
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

// export default function ChatScreen({ setIsAuthenticated }) {
//
//   const [department, setDepartment] = useState("marketing");
//   const [prompt, setPrompt] = useState("");
//   console.log(prompt);
//
//   const handleLogout = () => {
//     localStorage.removeItem('authenticatedUser');
//     setIsAuthenticated(false);
//   };
//
//   const handlePrompt = (e) => {
//     setPrompt(e.target.value);
//   }
//
//   return (
//     <div>
//       <Navbar className="navbar">
//         <Title>Chat Screen</Title>
//         <SelectContainer>
//           <Select onChange={(e) => setDepartment(e.target.value)} name="department">
//             <option value="marketing">Marketing</option>
//             <option value="sales">Sales</option>
//           </Select>
//           <Button onClick={handleLogout}>Logout</Button>
//         </SelectContainer>
//       </Navbar>
//       <ChatContainer>
//         <ChatBox>
//           <ChatMessage>
//             <Icon>
//               <OpenAiLogo/>
//               {!prompt && "..."}
//             </Icon>
//             {prompt && <PromptResponse>Response to the prompt: &quot;{prompt}&quot;</PromptResponse>}
//           </ChatMessage>
//         </ChatBox>
//         <InputContainer>
//           <ChatInput
//             id="chatInput"
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder={`Enter your ${department} query here...`}
//           />
//           <Icon>
//             <PaperPlaneTilt onClick={handlePrompt}/>
//           </Icon>
//         </InputContainer>
//       </ChatContainer>
//     </div>
//   )
// }

export default function ChatScreen({ setIsAuthenticated }) {

  const [department, setDepartment] = useState("marketing");
  const [prompt, setPrompt] = useState("");
  const [inputText, setInputText] = useState("");

  const handleLogout = () => {
    localStorage.removeItem('authenticatedUser');
    setIsAuthenticated(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }

  const handleIconClick = () => {
    setPrompt(inputText);
  }

  return (
    <div>
      <Navbar className="navbar">
        <Title>Chat Screen</Title>
        <SelectContainer>
          <Select onChange={(e) => setDepartment(e.target.value)} name="department">
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
          </Select>
          <Button onClick={handleLogout}>Logout</Button>
        </SelectContainer>
      </Navbar>
      <ChatContainer>
        <ChatBox>
          <ChatMessage>
            <Icon>
              <OpenAiLogo/>
              {!prompt && "..."}
            </Icon>
            {prompt && <PromptResponse>Response to the prompt: &quot;{prompt}&quot;</PromptResponse>}
          </ChatMessage>
        </ChatBox>
        <InputContainer>
          <ChatInput
            id="chatInput"
            onChange={handleInputChange}
            placeholder={`Enter your ${department} query here...`}
          />
          <Icon>
            <PaperPlaneTilt onClick={handleIconClick}/>
          </Icon>
        </InputContainer>
      </ChatContainer>
    </div>
  )
}