import "../styles/globals.css";
import React, { useEffect } from "react";
import { useState } from "react";
import ClientCreation from "../components/ClientCreation";
import { MainDiv } from "../styles/Styles";
import RentList from "@/components/RentListScreen";
import LoginScreen from "@/components/LoginScreen";
import EquipmentList from "@/components/EquipmentListScreen";
import EquipmentCreationScreen from "@/components/EquipmentCreationScreen";
import RentCreationScreen from "@/components/RentCreationScreen";
import HomeScreen from "@/components/HomeScreen";

export default function App() {
  const [screenNumber, setScreenNumber] = useState(0);

  const screenArray = [
    <LoginScreen setScreenNumber={setScreenNumber} />,
    <HomeScreen setScreenNumber={setScreenNumber} />,
    <ClientCreation setScreenNumber={setScreenNumber} />,
    <EquipmentList setScreenNumber={setScreenNumber} />,
    <RentList setScreenNumber={setScreenNumber} />,
    <EquipmentCreationScreen setScreenNumber={setScreenNumber} />,
    <RentCreationScreen setScreenNumber={setScreenNumber} />,
  ]

  return (
    <MainDiv>
      {screenArray[screenNumber]}
    </MainDiv>
  );
}
