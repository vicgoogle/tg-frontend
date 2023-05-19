import React, { useState } from "react";
import {
  BackgroundImg,
  FormDiv,
  FormLogDiv,
  FormMainDiv,
  Img,
  Link,
  LogDiv,
  MainDiv,
  Title,
} from "../styles/Styles";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import api from "../services/api";

export let client: any = {};

export default function LoginScreen({
  setScreenNumber,
  setIsLogged,
}: ScreenNumberInterface) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [, setError] = useState(false);

  function post() {
    validate();
    api
      .post("/client/login", {
        email,
        password,
      })
      .then((res) => {
        client = res;
        setScreenNumber(1);
      })
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
    <FormMainDiv>
      <FormLogDiv>
        <Title>Login</Title>
        <LogDiv>
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "8%",
            }}
            id="outlined-basic"
            size="medium"
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
            size="medium"
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
        </LogDiv>
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
          color="info"
        >
          Login
        </Button>
        <p>Não possui um login?</p>
        <Link
          onClick={() => setScreenNumber(2)}
          style={{ color: "blueviolet" }}
        >
          Crie sua conta
        </Link>
      </FormLogDiv>
      <BackgroundImg
        alt=" "
        src="https://www.grupowrlocacoes.com.br/wp-content/uploads/2020/07/capa-tipos-de-guindastes-1024x640.jpg"
      />
    </FormMainDiv>
  );
}
