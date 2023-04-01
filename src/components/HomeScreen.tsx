import { MainDiv, Title } from "@/styles/Styles";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ConstructionIcon from '@mui/icons-material/Construction';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HubIcon from '@mui/icons-material/Hub';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { ButtonPurple } from "@/styles/StyledComponents";

export default function HomeScreen({ setScreenNumber }: ScreenNumberInterface) {

    return (
        <MainDiv>
            <Title>Bem Vindo!</Title>
            <ButtonPurple startIcon={<PersonAddAltIcon />} onClick={() => { setScreenNumber(2) }}>
                Cadastro de Clientes
            </ButtonPurple>
            <ButtonPurple startIcon={<ConstructionIcon />} onClick={() => { setScreenNumber(3) }}>
                Lista de Equipamentos
            </ButtonPurple>
            <ButtonPurple startIcon={<MonetizationOnIcon />} onClick={() => { setScreenNumber(4) }}>
                Cadastro de Equipamentos
            </ButtonPurple>
            <ButtonPurple startIcon={<PlaylistAddIcon />} onClick={() => { setScreenNumber(5) }}>
                Lista de Aluguéis
            </ButtonPurple>
            <ButtonPurple startIcon={<MenuBookIcon />} onClick={() => { setScreenNumber(6) }}>
                Cadastro de Alugueis
            </ButtonPurple>
        </MainDiv>
    );
}