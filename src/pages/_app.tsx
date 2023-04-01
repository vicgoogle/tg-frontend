import "../styles/globals.css";
import React from "react";
import { useState } from "react";
import ClientCreation from "../components/ClientCreation";
import { Header, MainDiv, Option } from "../styles/Styles";
import RentList from "@/components/RentListScreen";
import LoginScreen from "@/components/LoginScreen";
import EquipmentList from "@/components/EquipmentListScreen";
import EquipmentCreationScreen from "@/components/EquipmentCreationScreen";
import RentCreationScreen from "@/components/RentCreationScreen";

export default function App() {
  const [color0, setColor0] = useState("grey");
  const [color1, setColor1] = useState("white");
  const [color2, setColor2] = useState("white");
  const [color3, setColor3] = useState("white");
  const [color4, setColor4] = useState("white");
  const [color5, setColor5] = useState("white");
  const [color6, setColor6] = useState("white");
  const [color7, setColor7] = useState("white");
  const [screen0, setScreen0] = useState(true);
  const [screen1, setScreen1] = useState(false);
  const [screen2, setScreen2] = useState(false);
  const [screen3, setScreen3] = useState(false);
  const [screen4, setScreen4] = useState(false);
  const [screen5, setScreen5] = useState(false);
  const [screen6, setScreen6] = useState(false);
  const [screen7, setScreen7] = useState(false);
  const [onLogin, setOnlogin] = useState(false);

  function resetAllColors(): void {
    setColor0("white");
    setColor1("white");
    setColor2("white");
    setColor3("white");
    setColor4("white");
    setColor5("white");
    setColor6("white");
    setColor7("white");
  }
  function resetAllScreens(): void {
    setScreen0(false);
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
          style={{ color: color0 }}
          onClick={() => {
            resetAllColors();
            resetAllScreens();
            setScreen0(true);
            setColor0("grey");
          }}
        >
          Login
        </Option>
        <Option
          style={{ color: color1 }}
          onClick={() => {
            resetAllColors();
            resetAllScreens();
            setScreen1(true);
            setColor1("grey");
          }}
        >
          Cadastro de Clientes
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
          Lista de Equipamentos
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
          Lista de Alugueis
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
          Cadastro de Equipamentos
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
        <Option
          style={{ color: color7 }}
          onClick={() => {
            resetAllColors();
            resetAllScreens();
            setScreen7(true);
            setColor7("grey");
          }}
        >
          Lista de Equipamentos
        </Option>
      </Header>
      {screen0 ? <LoginScreen /> : null}
      {screen1 ? <ClientCreation /> : null}
      {screen2 ? <EquipmentList /> : null}
      {screen3 ? <RentList /> : null}
      {screen4 ? <EquipmentCreationScreen /> : null}
      {screen5 ? <RentCreationScreen /> : null}
      {screen6 ? <RentList /> : null}
    </MainDiv>
  );
}
