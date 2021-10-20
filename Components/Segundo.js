import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Senha() {
   return<Text style = {StyleSenha.Estilo}>Senha</Text>
   
}

const StyleSenha = StyleSheet.create({
    Estilo:{
        textDecorationLine: 'underline',
        width: '80%',
        alignItems:'center',
        color:'#636963',        
        fontSize: 20,
    }
});