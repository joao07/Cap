import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Primeiro from './Components/Primeiro';
import Segundo from './Components/Segundo';
import {comp1, comp2} from './Components/Comp'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <Primeiro/>
      <Segundo/>
      <comp1/>
      <comp2/>
      <StatusBar style="auto" />
    </View>
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

const style = StyleSheet.create({
  App: {
      backgroundColor: "#A00",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"


  }
})