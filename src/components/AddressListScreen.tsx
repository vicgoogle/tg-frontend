import React, { useEffect, useState } from "react";
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
import { client } from "./LoginScreen";

export default function AddressList({
  setScreenNumber,
}: ScreenNumberInterface) {
  const [name, setName] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);
  const [id, setId] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState(false);
  const [zipCodeErrorText, setZipCodeErrorText] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [numberErrorText, setNumberErrorText] = useState("");
  const [complement, setComplement] = useState("");
  const [complementError, setComplementError] = useState(false);
  const [complementErrorText, setComplementErrorText] = useState("");

  function getList() {
    api
      .get("/address/list/" + client.data.id)
      .then((res) => {
        console.log(client);
        setName(res.data);
      })
      .catch((res) => alert(res.response.data.message));
  }

  useEffect(() => {
    getList();
  }, []);

  function deleteAddress(id: String) {
    api
      .delete("/address/delete/" + id)
      .then(() => {
        alert("Item deletado com sucesso!");
        getList();
      })
      .catch((res) => alert(res.response.data.message));
  }
  function updateAddress() {
    api
      .put("/address/update", {
        id: id,
        zipCode,
        number,
        complement,
      })
      .then(() => {
        alert("Endereço atualizado com sucesso");
        setIsModalVisible(false);
        getList();
      })
      .catch((res) => alert(res.response.data.message));
  }
  function createAddress() {
    api
      .post("/address/create", {
        zipCode,
        number,
        complement,
        client: client.data.id,
      })
      .then(() => {
        alert("Endereço criado com sucesso");
        setIsModalVisible(false);
        getList();
      })
      .catch((res) => alert(res.response.data.message));
  }

  const listItems = name.map((d: any, index) => (
    <List key={d.nameEquipment}>
      <ItemDiv>
        <Subtitle>Endereço {index + 1}</Subtitle>
        <ListButtonDiv>
          <Button
            onClick={() => {
              setIsModalVisible(true);
              setId(d.id);
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
            onClick={() => deleteAddress(d.id)}
          >
            Excluir
          </Button>
        </ListButtonDiv>
        <p>CEP: {d.zipCode}</p>
        <p>Número {d.number}</p>
        <p>Complemento: {d.complement}</p>
        <Hr />
      </ItemDiv>
    </List>
  ));

  return (
    <MainDiv>
      {isModalVisible ? (
        <ScreenDiv>
          <EditDiv>
            <TitleEdit>Editar Endereço</TitleEdit>
            <TextField
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "3%",
              }}
              id="outlined-basic"
              size="small"
              onChange={(e) => {
                setZipCodeError(false);
                setZipCodeErrorText("");
                setZipCode(e.target.value);
              }}
              error={zipCodeError}
              helperText={zipCodeErrorText}
              label="CEP"
              type="number"
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
                setNumberError(false);
                setNumberErrorText("");
                setNumber(e.target.value);
              }}
              error={numberError}
              helperText={numberErrorText}
              label="Número"
              type="number"
              variant="outlined"
            />
            <TextField
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "7%",
              }}
              id="outlined-basic"
              size="small"
              onChange={(e) => {
                setComplementError(false);
                setComplementErrorText("");
                setComplement(e.target.value);
              }}
              error={complementError}
              helperText={complementErrorText}
              label="Complemento"
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
                  updateAddress();
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
      {isModal2Visible ? (
        <ScreenDiv>
          <EditDiv>
            <TitleEdit>Criar Endereço</TitleEdit>
            <TextField
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "3%",
              }}
              id="outlined-basic"
              size="small"
              onChange={(e) => {
                setZipCodeError(false);
                setZipCodeErrorText("");
                setZipCode(e.target.value);
              }}
              error={zipCodeError}
              helperText={zipCodeErrorText}
              label="CEP"
              type="number"
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
                setNumberError(false);
                setNumberErrorText("");
                setNumber(e.target.value);
              }}
              error={numberError}
              helperText={numberErrorText}
              label="Número"
              type="number"
              variant="outlined"
            />
            <TextField
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "7%",
              }}
              id="outlined-basic"
              size="small"
              onChange={(e) => {
                setComplementError(false);
                setComplementErrorText("");
                setComplement(e.target.value);
              }}
              error={complementError}
              helperText={complementErrorText}
              label="Complemento"
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
                  createAddress();
                  setIsModal2Visible(false);
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
                onClick={() => setIsModal2Visible(false)}
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
      <Title>Meus Endereços</Title>
      <FormDiv>{listItems}</FormDiv>
      <Button
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "5%",
          position: "static",
        }}
        onClick={() => {
          setIsModal2Visible(true);
        }}
        size="large"
        variant="contained"
      >
        Adicionar endereço
      </Button>
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
