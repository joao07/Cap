import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import TelaLogin from './Telas/Login';


export default function App() {
  return (
      <View>
        <TelaLogin/>
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

App: {
  backgroundColor: "#A00",
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
}
});
