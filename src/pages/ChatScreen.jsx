import { ChatContainer } from "../../styles/GlobalStyles.jsx";
import Nav from "../components/Nav.jsx";
import ChatBoxLayout from "../components/ChatBox.jsx";
import Input from "../components/Input.jsx";
import { useAuth } from "../context/AuthProvider.jsx";


const ChatScreen = () => {
  const { setIsAuthenticated } = useAuth();

  return (
    <div  className="chat-screen">
      <Nav setIsAuthenticated={setIsAuthenticated} />
      <ChatContainer>
        <ChatBoxLayout />
        <Input />
      </ChatContainer>
    </div>
  )
}

export default ChatScreen;