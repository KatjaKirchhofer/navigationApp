import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import TabNavigator from "./navigation/TabNavigator";
import StackNavigatorOne from "./navigation/StackNavigatorOne";
import Screen from "./Screens/Screen";


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
