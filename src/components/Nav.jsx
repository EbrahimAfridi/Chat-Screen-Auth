import {Navbar, Button, Select, SelectContainer, Title} from "../../styles/GlobalStyles.jsx";

const Nav = ({ setIsAuthenticated, setDepartment }) => {
  const handleLogout = () => {
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
