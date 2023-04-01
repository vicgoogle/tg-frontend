import React, { useEffect, useState } from "react";
import { FormDiv, List, MainDiv, Title } from "../styles/Styles";
import api from "../services/api";
import ItemList from "./ItemList";

export default function RentList() {
  const [name, setName] = useState([]);

  useEffect(() => {
    api
      .get("/rent/list")
      .then((res) => setName(res.data))
      .catch((res) => alert(res.response.data.message));
  }, []);

  const listItems = name.map((d: any) => (
    <List key={d.nameEquipment}>
      {ItemList(d.nameEquipment, d.rentTime, d.id)}
    </List>
  ));

  return (
    <MainDiv>
      <Title>Lista de Alugueis</Title>
      <FormDiv>{listItems}</FormDiv>
    </MainDiv>
  );
}
