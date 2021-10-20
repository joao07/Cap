import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, SafeAreaView } from 'react-native';


import FlexBoxV1 from '../layout/FlexBoxV1';
import Terceiro from '../Components/Terceiro';
import Quarto from '../Components/Quarto';
import Quinto from '../Components/Quinto';
import EmailInput from '../Components/Primeiro';
import SenhaInput from '../Components/Segundo';


export default function TelaLogin() {
  let numero = 0
  const inc = () => numero + 1

  return (
    <SafeAreaView style ={styles.AumentoTela} >
      <FlexBoxV1/>
      <View>
        <EmailInput/>
      </View>
      <View>
        <SenhaInput/>
      </View>
      <View style = {styles.EstiloLogin}>
        <Terceiro/>
      </View>
      <View>
        <TouchableOpacity style={styles.button}  onPress={inc}>
          <Text style = {styles.TextLogin}>Login</Text>
        </TouchableOpacity>
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

button: {
  alignItems: 'center',
  backgroundColor: '#ad0000',
  padding: 10,
  width: '70%',
  marginTop: 20,
  marginLeft: 50,
},

AumentoTela:{
  height: '100%',
  backgroundColor: "#2a2a2b"
},

TextLogin:{
  color:'whitesmoke'
}

});