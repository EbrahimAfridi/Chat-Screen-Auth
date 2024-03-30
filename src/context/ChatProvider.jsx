import {createContext, useCallback, useContext, useState} from 'react';
import _ from "lodash";

const ChatContext = createContext(null);

const ChatProvider = ({ children }) => {
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

  const values = {
    department,
    setDepartment,
    prompt,
    setPrompt,
    inputText,
    setInputText,
    handleInputChange,
    handleIconClick
  };

  return (
    <ChatContext.Provider value={values}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;

export const useChat = () => {
    const context = useContext(ChatContext);

    if (context === undefined) {
        throw new Error("useChat must be used inside of ChatProvider");
    }

    return context;
};