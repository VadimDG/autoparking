import React, { useState } from "react";
import { MDBCard, MDBCardTitle, MDBCardText } from "mdbreact";
import ServiceCardLine from "./ServiceCartLine";

let services1 = [
    'Service 1',
    'Service 2'
];

export default function ServiceCard(props) {

    const [services, setServices] = useState(services1);
    const onServiceLineValueChange = (element) => {
        services[element.position] = element.value
    }
    const onLineValueDelete = (element) => {
            
        services.splice(element.position, 1);        
        setServices([...services]);        
    }
    const onLineValueAdd = () => {
        console.log('add');
    }
  return (
      
    <MDBCard
      className="card-body"
      style={{ width: "22rem", marginTop: "1rem" }}
    >
      <MDBCardTitle>{props.title}</MDBCardTitle>
      <MDBCardText>
        {            
            services.map((x, i) => 
                <ServiceCardLine
                 position={i}
                 key={i}
                 value={x}
                 onServiceLineValueChange={onServiceLineValueChange}
                 onLineValueDelete={onLineValueDelete}
                 onLineValueAdd={onLineValueAdd}
                />)
        }
      </MDBCardText>      
    </MDBCard>
  );
}
