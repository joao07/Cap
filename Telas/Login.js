import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Primeiro from './Components/Primeiro';
import Segundo from './Components/Segundo';
import FlexBoxV1 from './layout/FlexBoxV1';
import Terceiro from './Components/Terceiro';
import Quarto from './Components/Quarto';
import Quinto from './Components/Quinto';

export default function TelaLogin() {
  return (
    <SafeAreaView>
      <FlexBoxV1/>
      <View style = {styles.EstiloText}>
        <Primeiro/>
      </View>
      <View style = {styles.EstiloText}>
        <Segundo/>
      </View>
      <View style = {styles.EstiloLogin}>
        <Terceiro/>
      </View>
      <View style = {styles.EstiloCaixa}>
        <Quarto/>
      </View>
      <View>
        <Quinto/>
      </View>
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

  EstiloLogin:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  EstiloCaixa:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: '10%',
    backgroundColor: '#266621',
    marginLeft: 50,
    marginTop: 20,
},

EstiloText:{
    marginLeft:10,
    width:'90%',
    backgroundColor:'#c5d1c5',
    marginTop: 10,
    height:'10%',
    justifyContent:'center'
},

});