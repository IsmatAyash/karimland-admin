import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './app.styled';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import NewUser from './pages/NewUser';
import Products from './pages/Products';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<User />} />
            <Route path="newUser" element={<NewUser />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/newProduct" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
