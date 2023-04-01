import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonPurple = styled(Button)({
    backgroundColor: '#5C00FF',
    color: 'white',
    '&:hover': {
        backgroundColor: '#5400EA',
    },
    margin: '20px',
    fontSize: '30px',
    width: '600px'
});