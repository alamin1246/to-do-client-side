import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="px-5 header-nav">
        <Navbar.Brand href="#home">
          <span className="nav-title">TO-DO APP</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn" />
        <Navbar.Collapse id="responsive-navbar-nav" className="btn-2">
          <Nav className="ms-auto nav-menu">
            <NavLink className="text-white mx-3 text-decoration-none" to="/">
              Home
            </NavLink>
            <NavLink
              className="text-white mx-3 text-decoration-none"
              to="/complete"
            >
              Completed Tasks
            </NavLink>
            <NavLink
              className="text-white mx-3 text-decoration-none"
              to="/toDo"
            >
              To-Do
            </NavLink>
            <NavLink
              className="text-white mx-3 text-decoration-none me-5"
              to="/calendar"
            >
              Calendar
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
