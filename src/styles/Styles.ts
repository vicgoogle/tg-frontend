import styled from "styled-components";

export const Option = styled.p`
  font-size: 2vh;
  opacity: 100%;
  width: fit-content;
  margin: 7px;
  font-style: italic;
  padding: 0;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const MainDiv = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #b721ff,
    #4979ff,
    #00a3ff,
    #00bfff,
    #21d4fd
  );
  height: 140vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const ItemDiv = styled.div`
  height: fit-content;
  width: 100%;
  align-items: left;
  top: 1vh;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
`;

export const Hr = styled.hr`
  height: fit-content;
  width: 100%;
  border-width: 1px;
  margin-top: 0;
  margin-bottom: 0;
  border-style: dashed;
  border-color: black;
`;

export const List = styled.li`
  list-style-type: none;
  width: 100%;
`;

export const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 4vh;
  width: 100%;
  justify-content: start;
  display: flex;
  color: white;
`;

export const Div = styled.div`
  height: fit-content;
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 10vh;
`;

export const FormDiv = styled.div`
  height: fit-content;
  width: 45%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  color: black;
  background-color: white;
  border-radius: 3%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6vh;
`;

export const EditDiv = styled.div`
  border-radius: 3%;
  height: fit-content;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 45%;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  color: black;
  background-color: white;
`;

export const Modal = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center; /* aligns on vertical for column */
  align-items: center;
`;

export const ScreenDiv = styled.div`
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center; /* aligns on vertical for column */
  align-items: center;
`;

export const SecDiv = styled.div`
  height: fit-content;
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  color: white;
  margin: 0;
  padding-left: 3%;
`;

export const Title = styled.p`
  font-size: 10vh;
  font-style: italic;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const TitleForm = styled.p`
  font-size: 6vh;
  font-style: italic;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  margin-top: 0;
  margin-bottom: 1vh;
`;

export const Img = styled.img`
  margin-bottom: 10%;
  margin-right: 3%;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  width: 100%;
  margin-top: 1vh;
  margin-right: 4vh;
  display: flex;
  flex-direction: column;
`;

export const TitleEdit = styled.p`
  font-size: 24px;
  width: fit-content;
  margin-top: 1vh;

  display: flex;
  flex-direction: column;
`;

export const ListButtonDiv = styled.div`
  height: fit-content;
  width: fit-content;
  align-items: flex-end;
  margin-left: auto;
  margin-right: 0;
  flex-direction: row;
  color: white;
  padding-right: 0;
`;
export const EditButtonDiv = styled.div`
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  color: white;
`;
