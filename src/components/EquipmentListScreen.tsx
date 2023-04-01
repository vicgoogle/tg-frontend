import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  EditButtonDiv,
  EditDiv,
  FormDiv,
  Hr,
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

export default function EquipmentList(this: any) {
  const [name, setName] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idEquipment, setIdEquipment] = useState("");
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
        nameClient,
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
      <ItemDiv>
        <Subtitle>Nome do equipamento: {d.nameEquipment}</Subtitle>
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
        <p>Tipo do equipamento: {d.typeEquipment}</p>
        <p>Preço: {d.priceEquipment}</p>
        <p>Nome do Cliente: {d.nameClient}</p>
        <Hr />
      </ItemDiv>
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
                setNameClientError(false);
                setNameClientErrorText("");
                setNameClient(e.target.value);
              }}
              error={nameClientError}
              helperText={nameClientErrorText}
              label="Nome do cliente"
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
    </MainDiv>
  );
}
