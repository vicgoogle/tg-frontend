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

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [error, setError] = useState(false);

  function post() {
    validate();
    api
      .post("/client/login", {
        email,
        password,
      })
      .then(() => alert("Cliente cadastrado com sucesso"))
      .catch((res) => alert(res.response.data.message));
  }

  function handleLogin() {
    validate();
    api
      .post("/client/login", {
        email,
        password,
      })
      .then(() => alert("Cliente cadastrado com sucesso"))
      .catch((res) => alert(res.response.data.message));
  }

  function validate() {
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
      <Title>Login</Title>
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
          helperText={passwordErrorText}
          inputProps={{ maxLength: 11 }}
          type="password"
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
        Login
      </Button>
    </MainDiv>
  );
}
