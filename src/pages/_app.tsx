import "../styles/globals.css";
import React, { useEffect } from "react";
import { useState } from "react";
import ClientCreation from "../components/ClientCreation";
import { MainDiv } from "../styles/Styles";
import RentList from "@/components/RentListScreen";
import LoginScreen from "@/components/LoginScreen";
import EquipmentList from "@/components/EquipmentListScreen";
import MyEquipmentList from "@/components/MyEquipmentListScreen";
import EquipmentCreationScreen from "@/components/EquipmentCreationScreen";
import RentCreationScreen from "@/components/RentCreationScreen";
import HomeScreen from "@/components/HomeScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [screenNumber, setScreenNumber] = useState(0);
  const [isLogged, setIsLogged] = useState(false);

  const screenArray = [
    <LoginScreen setScreenNumber={setScreenNumber} />,
    <HomeScreen setScreenNumber={setScreenNumber} />,
    <ClientCreation setScreenNumber={setScreenNumber} />,
    <EquipmentList setScreenNumber={setScreenNumber} />,
    <MyEquipmentList setScreenNumber={setScreenNumber} />,
    <EquipmentCreationScreen setScreenNumber={setScreenNumber} />,
    <RentList setScreenNumber={setScreenNumber} />,
    <RentCreationScreen setScreenNumber={setScreenNumber} />,
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <>{screenArray[screenNumber]}</>
    </ThemeProvider>
  );
}
