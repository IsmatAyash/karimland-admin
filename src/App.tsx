import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './app.styled';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import Products from './pages/Products';
import Product from './pages/Product';
import NoMatch from './components/common/NoMatch';

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
            <Route path="newUser" element={<User />} />
          </Route>
          <Route path="products" element={<Products />}>
            <Route path=":productId" element={<Product />} />
            <Route path="newProduct" element={<Product />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
