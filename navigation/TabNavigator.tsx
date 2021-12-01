import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import ScreenOne from "../Screens/ScreenOne";
import ScreenTwo from "../Screens/ScreenTwo";
import StackNavigatorOne from "./StackNavigatorOne";
import StackNavigatorTwo from "./StackNavigatorTwo";


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen
        name={'ScreenOne'}
        component={StackNavigatorOne}
      />
      <Tab.Screen
        name={'ScreenTwo'}
        component={StackNavigatorTwo}
      />

    </Tab.Navigator>
  )
}

export default TabNavigator;