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
  ScreenDiv,
  Subtitle,
  Title,
  TitleEdit,
} from "../styles/Styles";
import Button from "@mui/material/Button";
import api from "../services/api";
import { TextField } from "@mui/material";

export default function EquipmentList({ setScreenNumber }: ScreenNumberInterface) {
  const [name, setName] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idEquipment, setIdEquipment] = useState("");
  const [nameEquipment, setNameEquipment] = useState("");
  const [rentTime, setRentTime] = useState("");
  const [nameEquipmentError, setNameEquipmentError] = useState(false);
  const [rentTimeError, setRentTimeError] = useState(false);
  const [nameEquipmentErrorText, setNameEquipmentErrorText] = useState("");
  const [rentTimeErrorText, setRentTimeErrorText] = useState("");

  function getList() {
    api
      .get("/rent/list")
      .then((res) => setName(res.data))
      .catch((res) => alert(res.response.data.message));
  }

  useEffect(() => {
    getList();
  }, []);

  function deleteRent(id: String) {
    api
      .delete("/rent/delete/" + id)
      .then(() => {
        alert("Item deletado com sucesso!");
        getList();
      })
      .catch((res) => alert(res.response.data.message));
  }
  function updateRent() {
    api
      .put("/rent/update", {
        id: idEquipment,
        nameEquipment,
        rentTime,
      })
      .then(() => {
        alert("Aluguel atualizado com sucesso");
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
        <p>Tempo de aluguel: {d.rentTime}</p>
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
                setRentTimeError(false);
                setRentTimeErrorText("");
                setRentTime(e.target.value);
              }}
              error={rentTimeError}
              helperText={rentTimeErrorText}
              label="Tempo de aluguel"
              type="number"
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
                Voltar
              </Button>
            </EditButtonDiv>
          </EditDiv>
        </ScreenDiv>
      ) : null}
      <Title>Lista de Alugueis</Title>
      <FormDiv>{listItems}</FormDiv>
      <Button
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "5%",
          position: "static"
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
