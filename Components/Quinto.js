import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Cadastrar() {
   return<View style = {StyleCadastrar.Estilo}>        
        <Text>Não tem conta:</Text>
        <Text style = {StyleCadastrar.Cor}>Cadastre-se</Text>
    </View>
   
}

const StyleCadastrar = StyleSheet.create({
    Estilo:{
        flexDirection:"row",
        justifyContent: 'center'
    },

    Cor:{
        color: '#098000'
    }
});