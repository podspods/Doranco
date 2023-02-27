import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";
import { Link } from "react-router-native";
import {
  CategoryIcon,
  CategoryName,
  HeaderBox,
  Category,
  TitleText,
  HalfCategory,
  CategoryView,
  Footer,
  NewCategorieContainer,
  AddCategory,
  AddCategoryIcone,
  AddCategoryName,
  MyLink,
} from "../style/Home.style";

export function Kategory(username: string, label: string) {
  return (
    <Category>
      <HalfCategory>
        <CategoryView>
          <CategoryIcon>
            <FontAwesome name="user" size={36} color="black" />
          </CategoryIcon>
          <CategoryIcon>{username}</CategoryIcon>
        </CategoryView>
      </HalfCategory>
      <HalfCategory>
        <CategoryName>{label}</CategoryName>
      </HalfCategory>
    </Category>
  );
}

/**
 * this function dislay the screen 3 : Mes todos
 */
// ------------------------------------------------------------------
export default function Home() {
  return (
    // <MainView>
    <>
      <HeaderBox>
        <TitleText>Mes Todos</TitleText>
      </HeaderBox>

      {Kategory("Rosita", "Les courses")}
      {Kategory("Rosita", "Ménage")}
      {Kategory("Rosita", "tâche pour rose")}
      <Link to="/NewCategory">
        <NewCategorieContainer>
          <AddCategory>
            <AddCategoryIcone>
              <FontAwesome name="plus-circle" size={36} color="black" />
            </AddCategoryIcone>
            <AddCategoryName>new category</AddCategoryName>
          </AddCategory>
        </NewCategorieContainer>
      </Link>
      <Footer>
        <FontAwesome name="bars" size={36} color="black" />
        <FontAwesome name="user" size={36} color="black" />
      </Footer>
    </>
  );
}
