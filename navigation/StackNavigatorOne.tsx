import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ScreenOneDetails from "../Screens/ScreenOneDetails";
import ScreenOne from "../Screens/ScreenOne";
import ScreenOneMoreDetails from "../Screens/ScreenOneMoreDetails";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const StackNavigatorOne = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name={'ScreenOne'}
          component={ScreenOne}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={'ScreenOneDetails'}
          component={ScreenOneDetails}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={'ScreenOneMoreDetails'}
          component={ScreenOneMoreDetails}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
  )
}

export default StackNavigatorOne;