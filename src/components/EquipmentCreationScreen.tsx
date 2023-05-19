import React, { useState } from "react";
import {
  BackgroundImg,
  EditButtonDiv,
  EquipmentTitle,
  FormDiv,
  FormLogDiv,
  FormMainDiv,
  LogDiv,
  MainDiv,
  Title,
} from "../styles/Styles";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import api from "../services/api";
import { client } from "./LoginScreen";

export default function EquipmentCreationScreen({
  setScreenNumber,
}: ScreenNumberInterface) {
  const [nameEquipment, setNameEquipment] = useState("");
  const [typeEquipment, setTypeEquipment] = useState("");
  const [priceEquipment, setPriceEquipment] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [nameEquipmentError, setNameEquipmentError] = useState(false);
  const [typeEquipmentError, setTypeEquipmentError] = useState(false);
  const [priceEquipmentError, setPriceEquipmentError] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [nameEquipmentErrorText, setNameEquipmentErrorText] = useState("");
  const [typeEquipmentErrorText, setTypeEquipmentErrorText] = useState("");
  const [priceEquipmentErrorText, setPriceEquipmentErrorText] = useState("");
  const [photoErrorText, setPhotoErrorText] = useState("");
  const [descriptionErrorText, setDescriptionErrorText] = useState("");

  function post() {
    validate();
    api
      .post("/equipment/create", {
        nameEquipment,
        typeEquipment,
        priceEquipment,
        description,
        client: client.data.id,
        photo,
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
  }

  return (
    <FormMainDiv>
      <FormLogDiv>
        <EquipmentTitle>Cadastro de Equipamentos</EquipmentTitle>
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
              setNameEquipmentError(false);
              setNameEquipmentErrorText("");
              setNameEquipment(e.target.value);
            }}
            error={nameEquipmentError}
            helperText={nameEquipmentErrorText}
            label=" Nome do Equipamento"
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
              marginBottom: "8%",
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
              marginBottom: "8%",
            }}
            id="outlined-basic"
            size="small"
            onChange={(e) => {
              setDescriptionError(false);
              setDescriptionErrorText("");
              setDescription(e.target.value);
            }}
            error={descriptionError}
            helperText={descriptionErrorText}
            label="Descrição do equipamento"
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
              setPhotoError(false);
              setPhotoErrorText("");
              setPhoto(e.target.value);
            }}
            error={photoError}
            helperText={photoErrorText}
            inputProps={{ maxLength: 200 }}
            label="Link da imagem"
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
        src="https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2022/09/iStock-1138429558-scaled.jpg"
      />
    </FormMainDiv>
  );
}
