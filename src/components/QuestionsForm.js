import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, ProgressBar } from "react-bootstrap";
import questions399 from "../data/399-questions.json";
import questions262 from "../data/262-questions.json";
import services from "../data/services.json";
import TypeSixParser from "./questions/TypeSixParser";
import TypeEightParser from "./questions/TypeEightParser";
import TypeFiveParser from "./questions/TypeFiveParser";


const QuestionsForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const serviceId = params.serviceId;
  const questions = serviceId === "262" ? questions262 : questions399;
  const [index, setIndex] = useState(0);
  const [form, dispatchForm] = useState({});
  const [error,setError] = useState(false)

  const serviceName = services
    .filter((item) => item.serviceId.toString() === serviceId)
    .map((item) => item.name);

  const servicePrice = services
    .filter((item) => item.serviceId.toString() === serviceId)
    .map((item) => item.price);

  const discountRateText = services
    .filter((item) => item.serviceId.toString() === serviceId)
    .map((item) => item.discountRateText);


  const nextStep = () => {
    if  (!form[questions[index].id])  {
      setError(true)
      return;
    } else if (index + 1 === questions.length) {
      navigate("/send");
    }
    setError(false)
    setIndex(index + 1);
  };

  const prevStep = () => {
    setIndex(index - 1);
  };

  const firstPage = () => {
    navigate("/");
  };

  const onChange = (id, value) => {
    dispatchForm({ ...form, [id]: value });
  };

  const ScreenreaderLabel = () => {
    const now = 100 * index / questions.length;
    return <ProgressBar  variant="success" now={now} label={`${now}%`} visuallyHidden />;
  }

  //console.log("form",form);
  const renderItem = (item) => {
    switch (item.typeId) {
      case 5:
        return (
          <TypeFiveParser
            item={item}
            value={form[item.id]}
            onChange={onChange}
          />
        );
      case 6:
        return (
          <TypeSixParser
            item={item}
            value={form[item.id]}
            onChange={onChange}
          />
        );
      case 8:
        return (
          <TypeEightParser
            item={item}
            value={form[item.id]}
            error={error}
            onChange={onChange}
          />
        );
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between py-1">
        {index > 0 && (
          <i
            className="bi bi-chevron-left fw-bold fs-5 ms-4"
            type="submit"
            onClick={prevStep}
          ></i>
        )}
        <h6 className="fw-bold d-flex align-items-center mb-0">
          {serviceName}
        </h6>
        <i class="bi bi-x fw-bold fs-2 ms-4" onClick={firstPage}></i>
      </div>
      {ScreenreaderLabel()}
      <div className="d-flex justify-content-between justify-content-md-around px-4 py-3 border-top border-bottom">
        <p className="fw-bold d-flex align-items-center mb-0">
          Ortalama fiyat aralığı:
        </p>
        {servicePrice.map((item) => (
          <p className="fw-bold d-flex align-items-center mb-0">
            {item.min} - {item.max} TL
          </p>
        ))}
      </div>
      {discountRateText != "" && <p className="discount-text">{discountRateText}</p>}
      <h4 className="my-4">{questions[index].label}</h4>
      {renderItem(questions[index])}
      {(error && !form[questions[index].id]) && (<p className="d-flex justify-content-center text-danger">Bu alan zorunlu</p>)}
      <div className="btn-div mb-2">
        {index + 1 < questions.length && (
          <Button
            className="btn btn-success mx-1 col-md-4 col-12 mb-1 fixed-bottom"
            type="submit"
            onClick={nextStep}
          >
            DEVAM
          </Button>
        )}
        {index + 1 === questions.length && (
          <Button
            className="btn btn-success mx-1 col-md-4 col-12 mb-1 fixed-bottom"
            type="submit"
            onClick={nextStep}
          >
            TALEP GÖNDER
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionsForm;
