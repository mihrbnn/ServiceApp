import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const TypeFiveParser = ({ item, value, onChange }) => {
  return (
    <Row xs={3} md={5} className="d-flex justify-content-center mx-1 my-3">
      {item.values.map((cardValue) => (
        <Col className="col-5 ">
          <Card className="align-items-center">
            <Card.Img
              src={`${cardValue.valueImageUrl}`}
              className="card-img-top"
              alt="..."
            />
            <Card.Body className="card-body checkbox">
              <input
                checked={value === cardValue.id}
                onChange={(val) => onChange(item.id, cardValue.id)}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <Card.Text className="card-text">{cardValue.value}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TypeFiveParser;
