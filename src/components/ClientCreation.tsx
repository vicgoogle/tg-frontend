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

export default function ClientCreation({ setScreenNumber }: ScreenNumberInterface) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [birthDateError, setBirthDateError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameErrorText, setNameErrorText] = useState("");
  const [cpfErrorText, setCpfErrorText] = useState("");
  const [addressErrorText, setAddressErrorText] = useState("");
  const [birthDateErrorText, setBirthDateErrorText] = useState("");
  const [phoneErrorText, setPhoneErrorText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [PasswordErrorText, setPasswordErrorText] = useState("");

  function post() {
    validate();
    api
      .post("/client/create", {
        name,
        phone,
        address,
        cpf,
        birthDate,
        email,
        password,
      })
      .then(() => alert("Cliente cadastrado com sucesso"))
      .catch((res) => alert(res.response.data.message));
  }

  function validate() {
    if (name === "") {
      setError(true);
      setNameError(true);
      setNameErrorText("Campo inválido");
    }
    if (phone === "") {
      setError(true);
      setPhoneError(true);
      setPhoneErrorText("Campo inválido");
    }
    if (address === "") {
      setError(true);
      setAddressError(true);
      setAddressErrorText("Campo inválido");
    }
    if (cpf === "") {
      setError(true);
      setCpfError(true);
      setCpfErrorText("Campo inválido");
    }
    if (birthDate === "") {
      setError(true);
      setBirthDateError(true);
      setBirthDateErrorText("Campo inválido");
    }
    if (email === "") {
      setError(true);
      setEmailError(true);
      setEmailErrorText("Campo inválido");
    }
    if (password === "") {
      setError(true);
      setPasswordError(true);
      setPasswordErrorText("Campo inválido");
    }
  }

  return (
    <MainDiv>
      <Title>Cadastro de Clientes</Title>
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
            setNameError(false);
            setNameErrorText("");
            setName(e.target.value);
          }}
          error={nameError}
          helperText={nameErrorText}
          label="Nome"
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
            setCpfError(false);
            setCpfErrorText("");
            setCpf(e.target.value);
          }}
          error={cpfError}
          helperText={cpfErrorText}
          inputProps={{ maxLength: 11 }}
          type="number"
          label="CPF"
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
            setAddressError(false);
            setAddressErrorText("");
            setAddress(e.target.value);
          }}
          error={addressError}
          helperText={addressErrorText}
          label="Endereço"
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
            setBirthDateError(false);
            setBirthDateErrorText("");
            setBirthDate(e.target.value);
          }}
          error={birthDateError}
          helperText={birthDateErrorText}
          inputProps={{ maxLength: 10 }}
          label="Data de nascimento"
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
            setPhoneError(false);
            setPhoneErrorText("");
            setPhone(e.target.value);
          }}
          error={phoneError}
          helperText={phoneErrorText}
          inputProps={{ maxLength: 11 }}
          label="Telefone"
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
            setEmailError(false);
            setEmailErrorText("");
            setEmail(e.target.value);
          }}
          error={emailError}
          helperText={emailErrorText}
          label="E-mail"
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
            setPasswordError(false);
            setPasswordErrorText("");
            setPassword(e.target.value);
          }}
          error={passwordError}
          type="password"
          helperText={PasswordErrorText}
          label="Senha"
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
