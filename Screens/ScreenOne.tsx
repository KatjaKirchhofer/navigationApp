import React from "react";
import Screen from "./Screen";
import {Button, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import StackNavigatorOne from "../navigation/StackNavigatorOne";

const ScreenOne = ({ navigation }: any) => {
  return (
    <Screen>
      <Text>This is Screen one</Text>
      <Button
        title={'see more details'}
        onPress={()=> navigation.navigate('ScreenOneDetails')}
      />
    </Screen>
  )
}
export default ScreenOne;