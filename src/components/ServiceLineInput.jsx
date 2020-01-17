import React, { useState } from "react";
import { MDBIcon } from "mdbreact";

export default function ServiceLineInput(props) {           
   const [elementValue, setElementValue] = useState(props.initValue);

  return (
    <form className="presentation-line">
      <input
        type="text"
        value={elementValue}
        onChange={event => {
          setElementValue(event.target.value);
          event.preventDefault();
        }}
        className="form-control service-line-input"
      />
      <MDBIcon
        icon="check"
        className="finger"
        onClick={() => props.onServiceLineChange(elementValue)}
      />
    </form>
  );
}
