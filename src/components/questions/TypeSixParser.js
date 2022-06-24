import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

const TypeSixParser = ({ item, value, onChange }) => {
  return (
    <>
      <div className="d-flex justify-content-around"></div>
      <div className="d-flex flex-column align-items-center my-4">
        {item.values.map((cardValue) => (
          <div className="checkbox my-1 px-2 col-12 col-md-4 rounded">
            <input
              checked={value === cardValue.id}
              onChange={(val) => onChange(item.id, cardValue.id)}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <p className="d-flex align-items-center mb-0 px-2">{cardValue.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TypeSixParser;
