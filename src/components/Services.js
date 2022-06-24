import React from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import services from "../data/services.json";

const Services = () => {
  return (
    <Container className="container d-flex justify-content-center align-items-center">
      <Dropdown.Menu
        className="dropdown-menu h-25 w-50 pt-0 text-start"
        show
      >
        <Dropdown.Header className="drowdown-header text-body fs-6 bg-light">
          Servisler
        </Dropdown.Header>
        {services.map((service, index) => (
          <Dropdown.Item eventKey="2">
            <Link class="dropdown-item ps-0" to={`${service.serviceId}`}>
              {service.name}
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Container>
  );
};

export default Services;
