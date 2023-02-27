import { Text, View } from "react-native";
import { Link, NativeRouter, Route, Routes } from "react-router-native";
import Home from "./src/component/Home";
import NewCategory from "./src/component/NewCategory";

export default function App() {
  //   const [isFontInstalled] = useFonts({Lobster })
  // if (!isFontInstalled) {
  //   return <Text>Chargement ...</Text>
  // }
  // return <Text>Coucou les amis</Text>

  return (
    <View>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewCategory" element={<NewCategory />} />
        </Routes>
      </NativeRouter>
    </View>
  );
}
