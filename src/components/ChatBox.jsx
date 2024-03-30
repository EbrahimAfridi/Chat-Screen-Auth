import {ChatBox, ChatMessage, Icon, PromptResponse} from "../../styles/GlobalStyles.jsx";
import {OpenAiLogo} from "@phosphor-icons/react";


const ChatBoxLayout = ({ prompt }) => {
  return (
    <ChatBox>
      <ChatMessage>
        <Icon>
          <OpenAiLogo/>
          {!prompt && "..."}
        </Icon>
        {prompt && <PromptResponse>Response to the prompt: &quot;{prompt}&quot;</PromptResponse>}
      </ChatMessage>
    </ChatBox>
  );
};

export default ChatBoxLayout;