import React, { useState } from "react";
import {
  Div,
  FormDiv,
  Img,
  MainDiv,
  SecDiv,
  Subtitle,
  Title,
  TitleForm,
} from "../styles/Styles";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import api from "../services/api";
import { resolve } from "path/win32";

export default function VolunteerScreen() {
  const [nameEquipment, setNameEquipment] = useState("");
  const [nameEquipmentError, setNameEquipmentError] = useState(false);
  const [nameEquipmentErrorText, setNameEquipmentErrorText] = useState("");
  const [rentTime, setRentTime] = useState("");
  const [rentTimeError, setRentTimeError] = useState(false);
  const [rentTimeErrorText, setRentTimeErrorText] = useState("");

  function post() {
    validate();
    api
      .post("/rent/create", {
        nameEquipment,
        rentTime,
      })
      .then(() => alert("Cliente cadastrado com sucesso"))
      .catch((res) => alert(res.response.data.message));
  }

  function validate() {
    if (nameEquipment === "") {
      setNameEquipmentError(true);
      setNameEquipmentErrorText("Campo inválido");
    }
    if (rentTime === "") {
      setRentTimeError(true);
      setRentTimeErrorText("Campo inválido");
    }
  }

  return (
    <MainDiv>
      <Title>Cadastro</Title>
      <FormDiv>
        <TextField
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "3%",
            marginTop: "5%",
          }}
          id="outlined-basic"
          size="small"
          onChange={(e) => {
            setNameEquipmentError(false);
            setNameEquipmentErrorText("");
            setNameEquipment(e.target.value);
          }}
          error={nameEquipmentError}
          helperText={nameEquipmentErrorText}
          label="Nome do equipamento"
          variant="outlined"
        />
      </FormDiv>
      <Button
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "5%",
        }}
        onClick={() => {
          post();
        }}
        size="large"
        variant="contained"
      >
        Enviar
      </Button>
    </MainDiv>
  );
}
