import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  EditButtonDiv,
  EditDiv,
  FormDiv,
  Hr,
  ImageDiv,
  Img,
  Info,
  ItemDiv,
  List,
  ListButtonDiv,
  MainDiv,
  Modal,
  ScreenDiv,
  Subtitle,
  Title,
  TitleEdit,
} from "../styles/Styles";
import Button from "@mui/material/Button";
import api from "../services/api";
import ItemList from "./ItemList";
import EquipmentItemList from "./EquipmentItemList";
import { TextField } from "@mui/material";

export default function EquipmentList({
  setScreenNumber,
}: ScreenNumberInterface) {
  const [name, setName] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idEquipment, setIdEquipment] = useState("");
  const [nameEquipment, setNameEquipment] = useState("");
  const [typeEquipment, setTypeEquipment] = useState("");
  const [priceEquipment, setPriceEquipment] = useState("");
  const [photo, setPhoto] = useState("");
  const [nameEquipmentError, setNameEquipmentError] = useState(false);
  const [typeEquipmentError, setTypeEquipmentError] = useState(false);
  const [priceEquipmentError, setPriceEquipmentError] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const [nameEquipmentErrorText, setNameEquipmentErrorText] = useState("");
  const [typeEquipmentErrorText, setTypeEquipmentErrorText] = useState("");
  const [priceEquipmentErrorText, setPriceEquipmentErrorText] = useState("");
  const [photoErrorText, setPhotoErrorText] = useState("");

  function getList() {
    api
      .get("/equipment/list")
      .then((res) => setName(res.data))
      .catch((res) => alert(res.response.data.message));
  }

  useEffect(() => {
    getList();
  }, []);

  function deleteRent(id: String) {
    api
      .delete("/equipment/delete/" + id)
      .then(() => {
        alert("Item deletado com sucesso!");
        getList();
      })
      .catch((res) => alert(res.response.data.message));
  }
  function updateRent() {
    api
      .put("/equipment/update", {
        id: idEquipment,
        nameEquipment,
        typeEquipment,
        priceEquipment,
        photo,
      })
      .then(() => {
        alert("Equipamento cadastrado com sucesso");
        setIsModalVisible(false);
        getList();
      })
      .catch((res) => alert(res.response.data.message));
  }

  const listItems = name.map((d: any) => (
    <List key={d.nameEquipment}>
      {d.isRented ? null : (
        <ItemDiv>
          <Subtitle>Nome do equipamento: {d.nameEquipment}</Subtitle>
          <ImageDiv>
            <Img alt=" " src={d.photo} width="500" height="600" />
          </ImageDiv>
          <ListButtonDiv>
            <Button
              onClick={() => {
                setIsModalVisible(true);
                setIdEquipment(d.id);
              }}
              style={{
                marginLeft: "1vh",
                marginRight: "1vh",
                position: "static",
              }}
              variant="outlined"
              size="small"
            >
              Editar
            </Button>
            <Button
              style={{
                marginLeft: "1vh",
                marginRight: "1vh",
                position: "static",
              }}
              color="warning"
              variant="outlined"
              size="small"
              onClick={() => deleteRent(d.id)}
            >
              Excluir
            </Button>
          </ListButtonDiv>
          <Info>
            <b>Tipo do equipamento:</b> {d.typeEquipment}
          </Info>
          <Info>
            <b> Preço: </b> {d.priceEquipment}
          </Info>
          <Info>
            <b> Descrição do Equipamento: </b>
          </Info>
          <Info>{d.description}</Info>
          <Hr />
        </ItemDiv>
      )}
    </List>
  ));

  return (
    <MainDiv>
      {isModalVisible ? (
        <ScreenDiv>
          <EditDiv>
            <TitleEdit>Editar Equipamento</TitleEdit>
            <TextField
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "3%",
                marginTop: "1%",
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
                setPhotoError(false);
                setPhotoErrorText("");
                setPhoto(e.target.value);
              }}
              error={photoError}
              helperText={photoErrorText}
              label="Link da Imagem"
              variant="outlined"
            />
            <EditButtonDiv>
              <Button
                style={{
                  marginLeft: "1vh",
                  marginBottom: "2vh",
                  marginRight: "1vh",
                }}
                onClick={() => {
                  updateRent();
                }}
                variant="outlined"
                size="small"
              >
                Confirmar
              </Button>
              <Button
                style={{
                  marginLeft: "1vh",
                  marginRight: "1vh",
                  marginBottom: "2vh",
                }}
                onClick={() => setIsModalVisible(false)}
                color="warning"
                variant="outlined"
                size="small"
              >
                Fechar
              </Button>
            </EditButtonDiv>
          </EditDiv>
        </ScreenDiv>
      ) : null}
      <Title>Lista de Equipamentos</Title>
      <FormDiv>{listItems}</FormDiv>
      <Button
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "5%",
          position: "static",
        }}
        onClick={() => {
          setScreenNumber(1);
        }}
        size="large"
        variant="contained"
      >
        Voltar
      </Button>
    </MainDiv>
  );
}
