import { useCallback, useState } from "react";
import { ChatContainer } from "../../styles/GlobalStyles.jsx";
import Nav from "../components/Nav.jsx";
import _ from "lodash";
import ChatBoxLayout from "../components/ChatBox.jsx";
import Input from "../components/Input.jsx";


const ChatScreen = ({ setIsAuthenticated }) => {

  const [department, setDepartment] = useState("marketing");
  const [prompt, setPrompt] = useState("");
  const [inputText, setInputText] = useState("");

  const debouncedSave = _.debounce((value) => {
    console.log("Debouncing after 300 ms");
    setInputText(value)
  }, 300);

  const handleInputChange = useCallback((e) => {
    debouncedSave(e.target.value);
  }, [debouncedSave]);

  const handleIconClick = () => {
    setPrompt(inputText);
  }

  return (
    <>
      <Nav
        setIsAuthenticated={setIsAuthenticated}
        setDepartment={setDepartment}
      />
      <ChatContainer>
        <ChatBoxLayout prompt={prompt}/>
        <Input
          departmentName={department}
          handleIconClick={handleIconClick}
          handleInputChange={handleInputChange}
        />
      </ChatContainer>
    </>
  )
}

export default ChatScreen;