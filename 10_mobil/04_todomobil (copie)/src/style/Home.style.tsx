import styled from "styled-components/native";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";

export const MyCategory = styled.View`
  background-color: #1f5e1f;
  height: 100px;
  margin: 10px 0px;
  border: 1px dashed red;

  display: flex;
  justify-content: center;
`;

export const MainView = styled.View`
  background-color: #9dce9d;
  justify-content: flex-start;
`;

export const TitleBox = styled.View`
  background-color: #9dce9d;
  font-size: 36px;
`;

export const TitleText = styled.Text`
  background-color: rgb(203, 223, 203);
  font-size: 36px;
  color: #061806;
  text-align: center;
  font-family: lobster;
`;

export const AuthorBox = styled.View`
  border-radius: 10%;
  background-color: #b5ddba;
  min-height: 40px;
  width: 100px;
  flex-direction: row;
  justify-content: center;
`;
export const TaskBox = styled.View`
  min-height: 40px;
  margin: 0px 10px 2px 10px;
  justify-content: center;
  align-items: center;
`;

export const TaskText = styled.Text`
  font-family: "Lobster_400Regular";
  font-size: 24px;
  text-align: center;
  color: #b5ddba;
`;

export const AuthorText = styled.Text`
  font-family: "Lobster_400Regular";
  font-size: 36px;
  text-align: center;
`;

export const Button = styled.View`
  align-items: center;
  background-color: beige;
  padding: 10;
`;

export const TodoBox = styled.View`
  min-height: 200px;
  justify-content: center;
  align-items: center;
`;

export const MyInput = styled.TextInput`
  background-color: "#000";
  font-size: 36px;
`;

export const AddItem = styled.View`
  background-color: "#685959";
  flex-direction: row;

`;
