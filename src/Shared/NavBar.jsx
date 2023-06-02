import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand>MovieFlex</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ul className="d-flex flex-column flex-lg-row gap-4 text-style-none list-unstyled">
              <li>
                <Link className="text-decoration-none text-black">Home</Link>
              </li>
              <li>
                <Link className="text-decoration-none text-black">Movies</Link>
              </li>
              <li>
                <Link className="text-decoration-none text-black">
                  Register
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
