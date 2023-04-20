import * as React from "react";
import HomeScreen from "./screens/HomeScreen";
import FeedScreen from "./screens/FeedScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
   <NavigationContainer>
    <DrawerNavigator/>
   </NavigationContainer>
  );
}