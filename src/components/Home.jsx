import React from "react";
import { MDBView, MDBMask } from "mdbreact";

export default function Home() {
  return (
    <MDBView src="https://lh3.googleusercontent.com/J-hZBRfd9EjEv7_kzLvw_KduMEJZv2HLaOtLQMJyFEjE9eiTsqZraz60nhI9FGgCsMU=h800">
      <MDBMask
        overlay="black-strong"
        className="flex-center flex-column text-white text-center"
      >
        <h2>Московский паркинг</h2>
        <h5>Выбирите пункт в меню в верхней части экрана, куда Вы хотите перейти</h5>
        <br />        
      </MDBMask>
    </MDBView>
  );
}
