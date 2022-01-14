import React from "react";
import { Container, Button, Form } from "react-bootstrap";
const Auth = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form className="panel">
        <Form.Text className="fs-2 text-white">Welcome back ...</Form.Text>
        <br />
        <Form.Text className="fs-4 text-muted">
          Oh well sign in so we can know who you are
        </Form.Text>
        <br />
        <br />
        <br />

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mt-4 d-flex justify-content-center">
          <Button className="fs-4 px-5 fw-bold" variant="primary">
            Sign-In
          </Button>
        </Form.Group>
        <hr />
        <br />

        <h4>Or use your:</h4>
        <br />
        <Form.Group className="d-flex justify-content-between w-100">
          <Button
            className="fs-4 px-3 fw-bold fc"
            style={{ color: "#0d6efd" }}
            variant="light white"
          >
            Google Account
          </Button>
          <Button className="fs-4 px-3 fw-bold" variant="dark">
            Github Account
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};
export default Auth;
