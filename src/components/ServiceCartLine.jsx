import React, { useState } from "react";
import { MDBIcon } from "mdbreact";
import "./ServiceCartLine.scss";
import ServiceLineInput from "./ServiceLineInput";

export default function ServiceCardLine(props) {  
  const [isInEditMode, setEditMode] = useState(props.isInEditMode);
  const [elementValue, setValue] = useState({
    value: props.value,
    position: props.position
  });
  
  const onServiceLineChange = (value) => {    
    setValue({ value: value, position: props.position });    
    setEditMode(!isInEditMode);
    props.onServiceLineValueChange({ value: value, position: props.position });
  }

  return (
    <>
      {isInEditMode ? (
        <ServiceLineInput initValue={elementValue.value} onServiceLineChange={onServiceLineChange} /> 
      ) : (
        <div className="presentation-line">          
          <span className="element-text">{elementValue.value}</span>
          <MDBIcon
            icon="pencil-alt"
            className="finger edit-service"
            onClick={() => setEditMode(!isInEditMode)}
          />
          <MDBIcon
            icon="times"
            className="finger"
            onClick={() => props.onLineValueDelete(elementValue)}
          />
        </div>
      )}
    </>
  );
}
