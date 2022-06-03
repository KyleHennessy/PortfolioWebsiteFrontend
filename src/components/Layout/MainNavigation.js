import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {BsFillArrowLeftSquareFill} from "react-icons/bs";

import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";
import { useLocation } from "react-router-dom";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const location = useLocation();

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <Navbar bg="primary" expand="lg" sticky="top" className={classes.header}>
        <Container>
            <Navbar.Brand className={classes.logo}as={Link} to="/">Kyle Hennessy</Navbar.Brand>
            <Navbar.Toggle aria-controls="mainNavigationNavbar"/>
            <Navbar.Collapse id="mainNavigationNavbar">
                <Nav className="ms-auto">
                    <Nav.Item>
                        {location.pathname === '/' && <p id="navHome" className={classes.link} onClick={() => window.scrollTo(0, 0)}>Home</p>}
                        {location.pathname !== '/' && <Nav.Link id="navHome" className={classes.link} as={Link} to="/" onClick={() => window.scrollTo(0,0)}><BsFillArrowLeftSquareFill/>  Return to Home</Nav.Link>}
                    </Nav.Item>
                    {location.pathname === '/' && (
                        <Nav.Item>
                            <p className={classes.link} onClick={() => window.scrollTo(0,450)}>Projects</p>
                        </Nav.Item>
                    )}
                     {location.pathname === '/' && (
                        <Nav.Item>
                            <p className={classes.link} onClick={() => window.scrollTo(0, 1300)}>Skills</p>
                        </Nav.Item>
                    )}
                    {isLoggedIn && (
                        <Button variant="danger" onClick={logoutHandler}>Logout</Button>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default MainNavigation;
