import React from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ filterbySearch }) => {
  const [searchValue, setsearchValue] = useState("");
  const onSearch = (e) => {
    e.preventDefault()
    filterbySearch(searchValue);
    setsearchValue("");
  };
  return (
    <Row>
      <Navbar className="font" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form
            
              className="d-flex"
            >
              <Form.Control
              onChange={(e) => setsearchValue(e.target.value)}
                type="text"
                placeholder="ابحث"
                className="mx-2"
                value={searchValue}
              />
              <button onClick={onSearch} className="btn-search">
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
