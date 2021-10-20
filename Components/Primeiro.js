import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Email() {
   return<Text style = {StyleEmail.Estilo}>Email</Text>
   
}

const StyleEmail = StyleSheet.create({
    Estilo:{
        textDecorationLine: 'underline',
        width: '80%',
        alignItems:'center',
        fontSize: 20,
        color:'#636963',
        
    }
});