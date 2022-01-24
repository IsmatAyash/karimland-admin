import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './app.styled';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import UserList from './pages/UserList';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
