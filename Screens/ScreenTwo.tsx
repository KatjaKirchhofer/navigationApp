import React from "react";
import Screen from "./Screen";
import {Button, Text} from "react-native";

const ScreenTwo = ({navigation}: any) => {
  return (
    <Screen>
      <Text>This is Screen Two!</Text>
      <Button title={'more Details'} onPress={()=> navigation.navigate('ScreenTwoDetails')}/>
    </Screen>
  )
}
export default ScreenTwo;