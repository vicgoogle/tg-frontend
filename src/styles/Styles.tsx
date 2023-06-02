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
  background-image: url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-dark.png");
  height: 140vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: white;
`;

export const FormLogDiv = styled.div`
  background-color: #0e0e0e;
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const Link = styled.a`
  color: blueviolet;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid blueviolet;
  }
`;

export const FormMainDiv = styled.div`
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  color: white;
`;

export const ItemDiv = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #0e0e0e;
  align-items: left;
  top: 1vh;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  border-color: #ffffff;
  color: white;
  flex-direction: column;
`;

export const Hr = styled.hr`
  height: fit-content;
  width: 100%;
  border-width: 1px;
  margin-top: 0;
  margin-bottom: 0;
  border-color: #ffffff;
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
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6vh;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;

export const LogDiv = styled.div`
  height: fit-content;
  width: 45%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: transparent;
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
  color: #ffffff;
  background-color: #202020;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
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
  font-size: 6vh;
  font-style: italic;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const Info = styled.p`
  font-size: 16px;
  font-weight: 20px;
  width: 100%;
  color: white;
`;

export const EquipmentTitle = styled.p`
  font-size: 5vh;
  font-style: italic;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #ffffff;
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
  width: 90%;
  height: 5%;
`;

export const BackgroundImg = styled.img`
  width: 68%;
  height: 100%;
`;

export const ImageDiv = styled.div`
  height: fit-content;
  width: fit-content;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  color: white;
  padding-right: 0;
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
  margin-top: 20px;
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
