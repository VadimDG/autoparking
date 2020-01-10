import React, { useState } from "react";
import { MDBIcon } from "mdbreact";
import "./ServiceCartLine.scss";
import ServiceLineInput from "./ServiceLineInput";

export default function ServiceCardLine(props) {  
  const [isInEditMode, setEditMode] = useState(false);
  const [elementValue, setValue] = useState({
    value: props.value,
    position: props.position
  });

  const onServiceLineChange = (value) => {
    props.onServiceLineValueChange(elementValue);
    setValue({ value: value, position: props.position });
    setEditMode(!isInEditMode);
  }

  return (
    <>
      {!isInEditMode ? (
        <ServiceLineInput initValue={elementValue.value} onServiceLineChange={onServiceLineChange} />        
        // <form className="presentation-line">
        //   <input
        //     type="text"
        //     value={elementValue.value}
        //     onChange={event => {
        //       setValue({ value: event.target.value, position: props.position });
        //       event.preventDefault();
        //     }}
        //     className="form-control service-line-input"
        //   />
        //   <MDBIcon
        //     icon="check"
        //     className="finger"
        //     onClick={() => {
        //       props.onServiceLineValueChange(elementValue);
        //       setEditMode(!isInEditMode);
        //     }}
        //   />
        // </form>
      ) : (
        <div className="presentation-line">
          <MDBIcon
            icon="plus"
            className="finger add-service"
            onClick={props.onLineValueAdd}
          />
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
