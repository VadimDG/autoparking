import React, { useEffect } from "react";
import { MDBIcon } from "mdbreact";

export default function ServiceLineInput(props) {    
    console.log(typeof(props));
    // if ('initValue' in props){
    //     console.log('has value')
    // } else {
    //     console.log('dosnt have value')
    // }
//   const [elementValue, setElementValue] = useEffect(props.initValue);

  return (
      <div>Hello</div>
    // <form className="presentation-line">
    //   <input
    //     type="text"
    //     value={elementValue}
    //     onChange={event => {
    //       setElementValue(event.target.value);
    //       event.preventDefault();
    //     }}
    //     className="form-control service-line-input"
    //   />
    //   <MDBIcon
    //     icon="check"
    //     className="finger"
    //     onClick={() => props.onServiceLineChange(elementValue)}
    //   />
    // </form>
  );
}
