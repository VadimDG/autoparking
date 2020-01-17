import React, { useState } from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";
import ServiceCardLine from "./ServiceCartLine";
import "./ServiceCard.scss";
import {restHelper} from '../services/restHelper';

const defUrl = 'http://localhost:3000/api/getservices'

export default function ServiceCard(props) {
  const [services, setServices] = useState([]);
  const [isInAddMode, setInAddMode] = useState(false);

  restHelper.getServices(defUrl).then(x => setServices(x.data));

  const onServiceLineValueChange = element => {
    if (element.value) {
      services[element.position] = element.value;
    } else {
      setServices(services.filter(x => !!x));
      setInAddMode(false);
    }
  };

  const onLineValueDelete = element => {
    services.splice(element.position, 1);
    setServices([...services]);
    setInAddMode(false);
  };

  const onLineValueAdd = () => {
    const serviceListFirstEmpty = [...services];
    serviceListFirstEmpty.unshift("");
    setServices(serviceListFirstEmpty);
    setInAddMode(!isInAddMode);
  };

  const getServicesElementList = (isInAddMode = false) => {
    if (services.length === 0) return [];
    return services.filter(x => x.number === props.cardNumber)[0].items.map((x, i) => (
      <ServiceCardLine
        position={i}
        key={Math.random().toString()}
        value={x}
        onServiceLineValueChange={onServiceLineValueChange}
        onLineValueDelete={onLineValueDelete}
        isInEditMode={isInAddMode && i === 0}
      />
    ));
  };
  return (
    <MDBCard
      className="card-body"
      style={{ width: "22rem", marginTop: "1rem" }}
    >
      <MDBCardTitle>
        {props.title}
        <MDBIcon
          icon="plus"
          className="finger add-service"
          onClick={onLineValueAdd}
        />
      </MDBCardTitle>
      <MDBCardText>{getServicesElementList(isInAddMode)}</MDBCardText>
    </MDBCard>
  );
}
