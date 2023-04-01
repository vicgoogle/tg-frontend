import React, { ReactElement, useEffect, useState } from "react";
import { FormDiv, List, MainDiv, Title } from "../styles/Styles";
import Button from "@mui/material/Button";
import api from "../services/api";
import ItemList from "./ItemList";
import EquipmentItemList from "./EquipmentItemList";

export default function EquipmentList() {
  const [name, setName] = useState([]);

  useEffect(() => {
    api
      .get("/equipment/list")
      .then((res) => setName(res.data))
      .catch((res) => alert(res.response.data.message));
  }, []);

  const listItems = name.map((d: any) => (
    <List key={d.nameEquipment}>
      {EquipmentItemList(
        d.id,
        d.nameEquipment,
        d.typeEquipment,
        d.priceEquipment,
        d.nameClient
      )}
    </List>
  ));

  return (
    <MainDiv>
      <Title>Lista de Equipamentos</Title>
      <FormDiv>{listItems}</FormDiv>
    </MainDiv>
  );
}
