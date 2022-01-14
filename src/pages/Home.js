import React from "react";
import { Button } from "react-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  let navigate = useNavigate();

  return (
    <div>
      <>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="sm"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="justify-content-between">
              <Navbar.Brand href="#home">Snooze</Navbar.Brand>
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Something[1]</Nav.Link>
                <Nav.Link href="#pricing">Other[2]</Nav.Link>
              </Nav>
              <Nav>
                <Button
                  onClick={() => {
                    navigate(`/auth`);
                  }}
                  className="mx-2"
                  variant="primary"
                >
                  Sign in
                </Button>
                <Button className="mx-2" variant="outline-primary">
                  Sign Up
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};
export default Home;
