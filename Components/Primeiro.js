import React from "react";
import { Text, StyleSheet, TextInput } from "react-native";

export default function EmailInput () {
    const [text, onChangeText] = React.useState(null);
  
    return (
        <TextInput
        style={StyleEmail.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType='email-address'
          placeholder="Email"
        />
    );
  };

const StyleEmail = StyleSheet.create({
    Estilo:{
        textDecorationLine: 'underline',
        width: '80%',
        alignItems:'center',
        fontSize: 20,
        color:'#636963',
        
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginLeft:10,
        backgroundColor:'whitesmoke',
        marginTop: 10,
        justifyContent:'center',
        borderRadius: 20
      },
});

