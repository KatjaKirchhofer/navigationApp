import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ScreenOneDetails from "../Screens/ScreenOneDetails";
import ScreenOne from "../Screens/ScreenOne";
import ScreenOneMoreDetails from "../Screens/ScreenOneMoreDetails";
import {NavigationContainer} from "@react-navigation/native";
import ScreenTwo from "../Screens/ScreenTwo";
import ScreenTwoDetails from "../Screens/ScreenTwoDetails";

const Stack = createNativeStackNavigator();
const StackNavigatorTwo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'ScreenOne'}
        component={ScreenTwo}
      />
      <Stack.Screen
        name={'ScreenTwoDetails'}
        component={ScreenTwoDetails}
      />
    </Stack.Navigator>
  )
}

export default StackNavigatorTwo;