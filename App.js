import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import TelaLogin from './Telas/Login';


export default function App() {
  return (
      <SafeAreaView>
        <TelaLogin/>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
App: {
  backgroundColor: "#3f3f40",
}
});
