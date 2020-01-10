import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import ServiceCard from "./ServiceCart";

function ConvertToTime() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export default function AutoService() {
  const [time, setTime] = useState(ConvertToTime());

//   const interval = setInterval(() => setTime(ConvertToTime()), 1000);

  useEffect(() => {    
    return () => {
        console.log('unmount');
    }
  });

  return (
    <MDBContainer>
      <MDBRow>
        <ServiceCard title="Автосервис 1" />
        <div>{time}</div>
        <ServiceCard title="Автосервис 2" />
      </MDBRow>
      <MDBRow>
        <ServiceCard title="Автосервис 3" />
        <ServiceCard title="Автосервис 4" />
      </MDBRow>
    </MDBContainer>
  );
}
