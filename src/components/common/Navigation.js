import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
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
);

export default Navigation;
