import React from "react";
import { Hr, ItemDiv, Subtitle, ListButtonDiv, Modal } from "../styles/Styles";
import Button from "@mui/material/Button";
import api from "@/services/api";

export default function EquipmentItemList(
  id: String,
  nameEquipment: String,
  typeEquipment: String,
  priceEquipment: String,
  nameClient: String
) {
  function deleteRent() {
    api
      .delete("/equipment/delete/" + id)
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
      <p>Tipo do equipamento: {typeEquipment}</p>
      <p>Preço: {priceEquipment}</p>
      <p>Nome do Cliente: {nameClient}</p>
      <Hr />
    </ItemDiv>
  );
}
