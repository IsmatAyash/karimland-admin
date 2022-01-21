import GlobalStyle from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './app.styled';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </Router>
  );
}

export default App;
