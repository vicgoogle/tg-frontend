import React from "react";
import { Hr, ItemDiv, Subtitle, ListButtonDiv, Modal } from "../styles/Styles";
import Button from "@mui/material/Button";
import api from "@/services/api";

export default function EquipmentItemList(
  nameEquipment: String,
  rentTime: String,
  id: String
) {
  function deleteRent() {
    api
      .delete("/rent/delete/" + id)
      .then(() => alert("Item deletado com sucesso!"))
      .catch((res) => alert(res.response.data.message));
  }
  function openModal() {
    () => {
      <>
        <Modal>aaaaaaaaaaaaaaaaaa</Modal>
      </>;
    };
  }
  return (
    <ItemDiv>
      <Subtitle>Nome do equipamento: {nameEquipment}</Subtitle>
      <ListButtonDiv>
        <Button onClick={() => openModal()} variant="outlined" size="small">
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
