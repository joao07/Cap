import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Primeiro from './Components/Primeiro';
import Segundo from './Components/Segundo';
import {comp1, comp2} from './Components/Comp';
import FlexBoxV1 from './layout/FlexBoxV1';
import Terceiro from './Components/Terceiro';
import Quarto from './Components/Quarto';
import Quinto from './Components/Quinto';

export default function App() {
  return (
    <SafeAreaView>
      <FlexBoxV1/>
      <Primeiro/>
      <Segundo/>
      <Terceiro/>
      <Quarto/>
      <Quinto/>
      <StatusBar style="auto" />
    </SafeAreaView>
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