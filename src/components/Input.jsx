import {ChatInput, Icon, InputContainer} from "../../styles/GlobalStyles.jsx";
import {PaperPlaneTilt} from "@phosphor-icons/react";
import {useChat} from "../context/ChatProvider.jsx";

const Input = () => {

  const { handleInputChange, department, handleIconClick } = useChat();
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleIconClick();
    }
  };

  return (
    <InputContainer>
      <ChatInput
        id="chatInput"
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        placeholder={`Enter your ${department} query here...`}
      />
      <Icon>
        <PaperPlaneTilt onClick={handleIconClick}/>
      </Icon>
    </InputContainer>
  );
};

export default Input;