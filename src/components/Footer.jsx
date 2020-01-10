import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

export default function FooterPage() {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Андрей Авто </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}