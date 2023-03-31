import React from "react";
import { Hr, ItemDiv, Subtitle, ListButtonDiv } from "../styles/Styles";
import Button from "@mui/material/Button";
import api from "@/services/api";

export default function ItemList(
  nameEquipment: String,
  rentTime: String,
  id: String
) {
  function deleteRent() {
    api
      .get("/rent/delete/" + id)
      .then(() => alert("cu"))
      .catch((res) => alert(res.response.data.message));
  }
  return (
    <ItemDiv>
      <Subtitle>Nome do equipamento: {nameEquipment}</Subtitle>
      <ListButtonDiv>
        <Button variant="outlined" size="small">
          Editar
        </Button>
        <Button
          style={{ marginLeft: "1vh", marginRight: "1vh" }}
          color="warning"
          variant="outlined"
          size="small"
          onClick={() => deleteRent()}
        >
          Excluir
        </Button>
      </ListButtonDiv>
      <p>Tempo de Aluguel: {rentTime} meses</p>
      <Hr />
    </ItemDiv>
  );
}
