import "./nav-bar.style.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Logo } from "../logo/logo.component";

export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Logo text={true}></Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link href="#about-us">Nosotros</Nav.Link>
              <Nav.Link href="#gallery">Galeria</Nav.Link>
              <Nav.Link href="#testimonials">Testimonios</Nav.Link>
              <Nav.Link href="#contact">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
