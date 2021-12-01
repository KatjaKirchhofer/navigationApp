import React from "react";
import {SafeAreaView, StyleSheet } from "react-native";
import {StatusBar} from 'react-native';

const Screen = ({children, prop}: any) => {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
  }
})

export default Screen;