import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" className="px-5 bg-black" data-bs-theme="dark">
        <Container fluid>
          <Link to={"/"}>
            <Navbar.Brand className="me-4">
              <img alt="logo" src="/images/netflixlogo.svg" width={93} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Link
                to="/"
                className="text-white me-4 link-offset-2 link-underline link-underline-opacity-0"
              >
                Home
              </Link>
              <Link
                to="/movies"
                className="text-white link-offset-2 link-underline link-underline-opacity-0"
              >
                Movies
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
