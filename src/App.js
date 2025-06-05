import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './components/pages/Home';
import TablePage from './components/pages/TablePage';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar bg="primary" variant="dark" className="mb-4 rounded">
          <Navbar.Brand as={Link} to="/" className="ms-4">
            Waiter.app
          </Navbar.Brand>
          <Nav className="flex-row ms-auto">
            <Nav.Link as={Link} to="/" className="text-white px-2 me-4">
              Home
            </Nav.Link>
          </Nav>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<TablePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
