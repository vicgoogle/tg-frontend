import React, { useState } from "react";
import { FormDiv, MainDiv, Title } from "../styles/Styles";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import api from "../services/api";

export default function EquipmentCreationScreen({ setScreenNumber }: ScreenNumberInterface) {
  const [nameEquipment, setNameEquipment] = useState("");
  const [typeEquipment, setTypeEquipment] = useState("");
  const [priceEquipment, setPriceEquipment] = useState("");
  const [nameClient, setNameClient] = useState("");
  const [nameEquipmentError, setNameEquipmentError] = useState(false);
  const [typeEquipmentError, setTypeEquipmentError] = useState(false);
  const [priceEquipmentError, setPriceEquipmentError] = useState(false);
  const [nameClientError, setNameClientError] = useState(false);
  const [nameEquipmentErrorText, setNameEquipmentErrorText] = useState("");
  const [typeEquipmentErrorText, setTypeEquipmentErrorText] = useState("");
  const [priceEquipmentErrorText, setPriceEquipmentErrorText] = useState("");
  const [nameClientErrorText, setNameClientErrorText] = useState("");

  function post() {
    validate();
    api
      .post("/equipment/create", {
        nameEquipment,
        typeEquipment,
        priceEquipment,
        nameClient,
      })
      .then(() => alert("Equipamento cadastrado com sucesso"))
      .catch((res) => alert(res.response.data.message));
  }

  function validate() {
    if (nameEquipment === "") {
      setNameEquipmentError(true);
      setNameEquipmentErrorText("Campo inválido");
    }
    if (typeEquipment === "") {
      setTypeEquipmentError(true);
      setTypeEquipmentErrorText("Campo inválido");
    }
    if (priceEquipment === "") {
      setPriceEquipmentError(true);
      setPriceEquipmentErrorText("Campo inválido");
    }
    if (nameClient === "") {
      setNameClientError(true);
      setNameClientErrorText("Campo inválido");
    }
  }

  return (
    <MainDiv>
      <Title>Cadastro de Equipamentos</Title>
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
          label="Nome do Equipamento"
          variant="outlined"
        />
        <TextField
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "3%",
          }}
          id="outlined-basic"
          size="small"
          onChange={(e) => {
            setTypeEquipmentError(false);
            setTypeEquipmentErrorText("");
            setTypeEquipment(e.target.value);
          }}
          error={typeEquipmentError}
          helperText={typeEquipmentErrorText}
          inputProps={{ maxLength: 11 }}
          label="Tipo do Equipamento"
          variant="outlined"
        />
        <TextField
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "3%",
          }}
          id="outlined-basic"
          size="small"
          onChange={(e) => {
            setPriceEquipmentError(false);
            setPriceEquipmentErrorText("");
            setPriceEquipment(e.target.value);
          }}
          error={priceEquipmentError}
          helperText={priceEquipmentErrorText}
          type="number"
          label="Preço do equipamento"
          variant="outlined"
        />
        <TextField
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "3%",
          }}
          id="outlined-basic"
          size="small"
          onChange={(e) => {
            setNameClientError(false);
            setNameClientErrorText("");
            setNameClient(e.target.value);
          }}
          error={nameClientError}
          helperText={nameClientErrorText}
          label="Nome do cliente"
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
      <Button
        style={{
          marginLeft: "1vh",
          marginRight: "1vh",
          marginBottom: "2vh",
        }}
        onClick={() => setScreenNumber(1)}
        color="warning"
        variant="outlined"
        size="small"
      >
        Voltar
      </Button>
    </MainDiv>
  );
}
