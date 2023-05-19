import React, { useState } from "react";
import {
  BackgroundImg,
  EditButtonDiv,
  FormLogDiv,
  FormMainDiv,
  LogDiv,
  Title,
} from "../styles/Styles";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import api from "../services/api";
import { client } from "./LoginScreen";

export default function RentCreationScreen({
  setScreenNumber,
}: ScreenNumberInterface) {
  const [equipment, setEquipment] = useState("");
  const [equipmentError, setEquipmentError] = useState(false);
  const [equipmentErrorText, setEquipmentErrorText] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateStartError, setDateStartError] = useState(false);
  const [dateStartErrorText, setDateStartErrorText] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [dateEndError, setDateEndError] = useState(false);
  const [dateEndErrorText, setDateEndErrorText] = useState("");

  function post() {
    validate();
    api
      .post("/rent/create", {
        equipment,
        client: client.data.id,
        dateStart,
        dateEnd,
      })
      .then(() => alert("Aluguel cadastrado com sucesso"))
      .catch((res) => alert(res.response.data.message));
  }

  function validate() {
    if (equipment === "") {
      setEquipmentError(true);
      setEquipmentErrorText("Campo inválido");
    }
  }

  return (
    <FormMainDiv>
      <FormLogDiv>
        <Title>Cadastro de Alugueis</Title>
        <LogDiv>
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "25%",
              marginBottom: "8%",
            }}
            id="outlined-basic"
            size="small"
            onChange={(e) => {
              setEquipmentError(false);
              setEquipmentErrorText("");
              setEquipment(e.target.value);
            }}
            error={equipmentError}
            helperText={equipmentErrorText}
            label="ID do equipamento"
            variant="outlined"
          />
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "8%",
            }}
            id="outlined-basic"
            size="small"
            onChange={(e) => {
              setDateStartError(false);
              setDateStartErrorText("");
              setDateStart(e.target.value);
            }}
            error={dateStartError}
            helperText={dateStartErrorText}
            label="Data de Início"
            variant="outlined"
          />
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "8%",
            }}
            id="outlined-basic"
            size="small"
            onChange={(e) => {
              setDateEndError(false);
              setDateEndErrorText("");
              setDateEnd(e.target.value);
            }}
            error={dateEndError}
            helperText={dateEndErrorText}
            label="Data de Fim"
            variant="outlined"
          />
        </LogDiv>
        <EditButtonDiv>
          <Button
            style={{
              marginLeft: "auto",
              marginRight: "50px",
              marginTop: "50px",
              marginBottom: "8%",
            }}
            onClick={() => {
              post();
            }}
            size="large"
            variant="contained"
          >
            Enviar
          </Button>
          <Button
            style={{
              marginLeft: "auto",
              marginTop: "50px",
              marginBottom: "8%",
            }}
            onClick={() => {
              setScreenNumber(1);
            }}
            size="large"
            variant="contained"
          >
            Voltar
          </Button>
        </EditButtonDiv>
      </FormLogDiv>
      <BackgroundImg
        alt=""
        src="https://www.psd.ca/uploads/calendarbanner5.png"
      />
    </FormMainDiv>
  );
}
