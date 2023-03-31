import "../styles/globals.css";
import React from "react";
import { useState } from "react";
import ClientCreation from "../components/ClientCreation";
import RentCreationScreen from "../components/RentCreationScreen";
import { Header, MainDiv, Option } from "../styles/Styles";
import RentList from "@/components/RentListScreen";

export default function App() {
  const [color1, setColor1] = useState("grey");
  const [color2, setColor2] = useState("white");
  const [color3, setColor3] = useState("white");
  const [color4, setColor4] = useState("white");
  const [color5, setColor5] = useState("white");
  const [color6, setColor6] = useState("white");
  const [color7, setColor7] = useState("white");
  const [screen1, setScreen1] = useState(true);
  const [screen2, setScreen2] = useState(false);
  const [screen3, setScreen3] = useState(false);
  const [screen4, setScreen4] = useState(false);
  const [screen5, setScreen5] = useState(false);
  const [screen6, setScreen6] = useState(false);
  const [screen7, setScreen7] = useState(false);

  function resetAllColors(): void {
    setColor1("white");
    setColor2("white");
    setColor3("white");
    setColor4("white");
    setColor5("white");
    setColor6("white");
    setColor7("white");
  }
  function resetAllScreens(): void {
    setScreen1(false);
    setScreen2(false);
    setScreen3(false);
    setScreen4(false);
    setScreen5(false);
    setScreen6(false);
    setScreen7(false);
  }

  return (
    <MainDiv>
      <Header>
        <Option
          style={{ color: color1 }}
          onClick={() => {
            resetAllColors();
            resetAllScreens();
            setScreen1(true);
            setColor1("grey");
          }}
        >
          Home
        </Option>
        <Option
          style={{ color: color2 }}
          onClick={() => {
            resetAllColors();
            resetAllScreens();
            setScreen2(true);
            setColor2("grey");
          }}
        >
          Voluntariado
        </Option>
        <Option
          style={{ color: color3 }}
          onClick={() => {
            resetAllColors();
            resetAllScreens();
            setScreen3(true);
            setColor3("grey");
          }}
        >
          Cadeia produtiva sustentavel
        </Option>
        <Option
          style={{ color: color4 }}
          onClick={() => {
            resetAllColors();
            resetAllScreens();
            setScreen4(true);
            setColor4("grey");
          }}
        >
          ESG
        </Option>
        <Option
          style={{ color: color5 }}
          onClick={() => {
            resetAllColors();
            resetAllScreens();
            setScreen5(true);
            setColor5("grey");
          }}
        >
          Políticas públicas
        </Option>
        <Option
          style={{ color: color6 }}
          onClick={() => {
            resetAllColors();
            resetAllScreens();
            setScreen6(true);
            setColor6("grey");
          }}
        >
          Redes de trabalho
        </Option>
      </Header>
      {screen1 ? <ClientCreation /> : null}
      {screen2 ? <RentList /> : null}
      {screen3 ? <RentList /> : null}
      {screen4 ? <RentList /> : null}
      {screen5 ? <RentList /> : null}
      {screen6 ? <RentList /> : null}
    </MainDiv>
  );
}
