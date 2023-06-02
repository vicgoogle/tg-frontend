import { MainDiv, Title } from "@/styles/Styles";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ConstructionIcon from "@mui/icons-material/Construction";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HubIcon from "@mui/icons-material/Hub";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { ButtonPurple } from "@/styles/StyledComponents";
import { client } from "./LoginScreen";

export default function HomeScreen({ setScreenNumber }: ScreenNumberInterface) {
  return (
    <MainDiv>
      <Title>Olá, {client.data.name}, Bem vindo ao Locafácil</Title>
      <ButtonPurple
        startIcon={<PersonAddAltIcon />}
        onClick={() => {
          setScreenNumber(2);
        }}
      >
        Cadastro de Clientes
      </ButtonPurple>
      <ButtonPurple
        startIcon={<ConstructionIcon />}
        onClick={() => {
          setScreenNumber(3);
        }}
      >
        Lista de Equipamentos
      </ButtonPurple>
      <ButtonPurple
        startIcon={<ConstructionIcon />}
        onClick={() => {
          setScreenNumber(4);
        }}
      >
        Meus Equipamentos
      </ButtonPurple>
      <ButtonPurple
        startIcon={<MonetizationOnIcon />}
        onClick={() => {
          setScreenNumber(5);
        }}
      >
        Cadastro de Equipamentos
      </ButtonPurple>
      <ButtonPurple
        startIcon={<PlaylistAddIcon />}
        onClick={() => {
          setScreenNumber(6);
        }}
      >
        Meus Aluguéis
      </ButtonPurple>
      <ButtonPurple
        startIcon={<MenuBookIcon />}
        onClick={() => {
          setScreenNumber(7);
        }}
      >
        Cadastro de Alugueis
      </ButtonPurple>
      <ButtonPurple
        startIcon={<MenuBookIcon />}
        onClick={() => {
          setScreenNumber(8);
        }}
      >
        Lista de Endereços
      </ButtonPurple>
    </MainDiv>
  );
}
