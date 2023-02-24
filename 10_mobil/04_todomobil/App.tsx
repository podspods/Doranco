import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./src/component/Home";

export default function App() {
  return (
    <View>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NativeRouter>
    
      <StatusBar style="auto" />
    </View>
  );
}


