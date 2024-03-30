import {ChatInput, Icon, InputContainer} from "../../styles/GlobalStyles.jsx";
import {PaperPlaneTilt} from "@phosphor-icons/react";

const Input = ({ handleInputChange, departmentName, handleIconClick }) => {
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
        placeholder={`Enter your ${departmentName} query here...`}
      />
      <Icon>
        <PaperPlaneTilt onClick={handleIconClick}/>
      </Icon>
    </InputContainer>
  );
};

export default Input;