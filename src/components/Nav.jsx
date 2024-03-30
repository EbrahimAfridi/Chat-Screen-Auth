import {Navbar, Button, Select, SelectContainer, Title} from "../../styles/GlobalStyles.jsx";
import {useAuth} from "../context/AuthProvider.jsx";
import {useChat} from "../context/ChatProvider.jsx";

const Nav = () => {
  const { setIsAuthenticated } = useAuth();
  const { setDepartment } = useChat();
  const handleLogout = () => {
    console.log("logout clicked")
    localStorage.removeItem('authenticatedUser');
    setIsAuthenticated(false);
  };

  return (
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
  )
}

export default Nav;
