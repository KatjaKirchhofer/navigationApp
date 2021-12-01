import React from "react";
import Screen from "./Screen";
import {Button, Text} from "react-native";

const ScreenOneDetails = ({navigation}: any) => {
  return (
    <Screen>
      <Text>This is Screen One Details and shows a lot of Details!</Text>
      <Button title={'see even more details'} onPress={()=> navigation.navigate('ScreenOneMoreDetails')}/>
    </Screen>
  )
}
export default ScreenOneDetails;