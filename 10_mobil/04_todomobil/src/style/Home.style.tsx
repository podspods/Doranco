import { Link } from "react-router-native";
import styled from "styled-components/native";

export const MainView = styled.View`
  background-color: #d7eed7;
`;
export const HeaderBox = styled.View`
  background-color: #1f5e1f;
  margin: 10px 0px;
  border: 1px dashed red;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TitleText = styled.Text`
  color: beige;
  font-size: 36px;
  text-align: center;
`;

export const Category = styled.View`
  background-color: #1f5e1f;
  margin: 10px 0px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const HalfCategory = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CategoryView = styled.View`
  background-color: #968ada;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CategoryIcon = styled.Text`
  font-size: 36px;
  padding: 10px;
`;

export const CategoryName = styled.Text`
  font-size: 36px;
  color: aqua;
  
`;

export const NewCategorieContainer = styled.View`
  font-size: 36px;
`;

export const AddCategory = styled.View`
background-color  : #e1ecec;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 10px;
border-radius: 100px;
`;

export const AddCategoryName = styled.Text`
padding: 10px;
font-size: 36px;
`;
export const AddCategoryIcone = styled.View`
font-size: 36px;
padding: 10px;

`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom:  0px;
  left: 0px;
  padding: 10px 20px;
  background-color: bisque;
`;

export const MyLink = styled(Link)`
  text-decoration: none;
`;