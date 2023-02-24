import { useStore } from "@nanostores/react";
import {
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  AddItem,
  MainView,
  MyCategory,
  MyInput,
  TitleBox,
  TitleText,
} from "../style/Home.style";
import { addItem, Item, setItemName, TodoListStore } from "../store/Home.store";

/**
 * this function dislay the screen 3 : Mes todos
 */
type CategoryProps = {
  name: string;
};

export function Category({ name }: CategoryProps) {
  // const { itemName, itemList } = useStore(cleaningStore);

  return (
    // <GreenBox>
    //   <TaskBox>
    //     <TaskBox>
    //       <AuthorBox>
    //         <FontAwesome name="user" size={24} color="black" />
    //         <AuthorText>Rose</AuthorText>
    //       </AuthorBox>
    //     </TaskBox>
    //   </TaskBox>
    //   <TaskBox>
    //     <TaskText>{name}</TaskText>
    //   </TaskBox>
    //   <TodoBox>
    //     <TextInput
    //       editable
    //       maxLength={40}
    //       // onChangeText={setItemName}
    //       // value={itemName}
    //     />
    //     <Text>aa</Text>
    //   </TodoBox>
    // </GreenBox>
    <View>
      <Text> Rose</Text>
    </View>
  );
}

// ------------------------------------------------------------------

export default function Home() {
  const [count, setCount] = useState(0);
  const { itemName, itemList } = useStore(TodoListStore);

  return (
    <MainView>
      <TitleBox>
        <TitleText>Mes Todos</TitleText>
      </TitleBox>
      <MyCategory>
        <View>
          <View>
            <TitleText> Rose</TitleText>
          </View>
          <View>
            <TitleText> menage</TitleText>
          </View>
          <View>
            <Text>salade </Text>
          </View>
          <View>
            <Text>tomate</Text>
          </View>
          <View>
            <Text>
              oignon oignon{"\n"}
              oignon{"\n"}
              oignon{"\n"}
            </Text>
          </View>
          <AddItem>
            <MyInput onChangeText={setItemName} value={itemName} />
            <TouchableHighlight onPress={addItem}>
              <View>
                <Text>
                  <FontAwesome name="plus-circle" size={24} color="black" />
                </Text>
              </View>
            </TouchableHighlight>

    
          </AddItem>
        </View>
        {itemList.map((item: Item, index: number) => (
              <View key={index}>
              <Text>{item.name}{"\n"}</Text></View>))}

      </MyCategory>
    </MainView>
  );
}
